import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    fromPromise,
    InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";

import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const APOLLO_CACHE = new InMemoryCache();

interface IApolloSettingProps {
    children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps) {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);
    // 1. 프리렌더링 예제 - process.browser 방법
    // if (process.browser) {
    //     console.log("지금은 브라우저다!!");
    //     const result = localStorage.getItem("accessToken");
    //     console.log(result);
    // } else {
    //     console.log("지금은 프론트엔드 서버다!!(즉, yarn dev 프로그램 내부다)");
    //     const result = localStorage.getItem("accessToken");
    //     console.log(result);
    //     const result = localStorage.getItem("accessToken")}
    // }

    // 2. 프리렌더링 예제 - typeof window   방법
    // if (typeof window !== "undefined") {
    //     console.log("지금은 브라우저다!!");
    //     const result = localStorage.getItem("accessToken");
    //     console.log(result);
    // } else {
    //     console.log(
    //         "지금은 프론트엔드 서버다!!!(즉 yarn dev 프로그램 내부다!)"
    //     );
    //     const result = localStorage.getItem("accessToken");
    //     console.log(result);
    // }

    // 3. 프리렌더링 무시 - useEffect 방법
    useEffect(() => {
        // 1. 기존방식(refreshToken 이전)
        // console.log("지금은 브라우저다!!!!");
        // const accessToken = localStorage.getItem("accessToken") || "";
        // const userInfo = localStorage.getItem("userInfo");
        // setAccessToken(accessToken);

        // if (!accessToken || !userInfo) return;
        // setUserInfo(JSON.parse(userInfo));

        // 2. 새로운 방식(refreshToken 이후)
        getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);
        });
    }, []);

    const errorLink = onError(({ graphQLErrors, operation, forward }) => {
        // 1-1. 에러를 캐치
        if (graphQLErrors) {
            for (const err of graphQLErrors) {
                // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
                if (err.extensions.code === "UNAUTHENTICATED") {
                    return fromPromise(
                        // 2-1. refreshToken으로 accessToken을 재발급 받기
                        getAccessToken().then((newAccessToken) => {
                            // 2-2. 재발급 받은 accessToken 저장하기
                            setAccessToken(newAccessToken);

                            // 3-1. 재발급 받은 accessToken으로 방금 실패한 query 재요청하기 (토큰 바꿔치기)
                            operation.setContext({
                                headers: {
                                    ...operation.getContext().headers, // 만료된 토큰이 추가되어있는 상태
                                    Authorization: `Bearer ${newAccessToken}`, // 토큰만 새걸로 바꿔치기
                                },
                            });
                        })
                    ).flatMap(() => forward(operation)); // 3-2. 재발급 받은 accessToken으로 방금 실패한 query 재요청하기(변경된 operation 재요청하기)
                }
            }
        }

        // 2. refreshToken으로 accessToken 재발급 받기

        // 3. 재발급 받은 accessToken으로 방금 실패한 query 재요청하기
    });

    const uploadLink = createUploadLink({
        uri: "https://backend08.codebootcamp.co.kr/graphql",
        headers: { Authorization: `Bearer ${accessToken}` },
        credentials: "include",
    });

    const client = new ApolloClient({
        link: ApolloLink.from([errorLink, uploadLink]),
        cache: APOLLO_CACHE,
        connectToDevTools: true,
    });

    // prettier-ignore
    return(
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}
