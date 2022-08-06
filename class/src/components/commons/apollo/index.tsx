import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";

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
        console.log("지금은 브라우저다!!!!");
        const accessToken = localStorage.getItem("accessToken") || "";
        const userInfo = localStorage.getItem("userInfo");
        setAccessToken(accessToken);

        if (!accessToken || !userInfo) return;
        setUserInfo(JSON.parse(userInfo));
    }, []);

    const uploadLink = createUploadLink({
        uri: "http://backend08.codebootcamp.co.kr/graphql",
        headers: { Authorization: `Bearer ${accessToken}` },
    });

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
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
