import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import {
    accessTokenState,
    isLoadedState,
    restoreAccessTokenLoadable,
} from "../../../commons/store";

export const withAuth = (Component) => (props) => {
    const router = useRouter();
    const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
    const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
    useEffect(() => {
        // if (!localStorage.getItem("accessToken")) {
        //     alert("로그인 후 이용 가능합니다!!");
        //     router.push("/24-03-login-use-apollo-client");
        //
        //
        //
        // [해결방법: 1번째 - restoreAccessTokend을 두 번 요청하기]
        // if (!accessToken) {
        //     getAccessToken().then((newAccessToken) => {
        //         if (newAccessToken) {
        //             setAccessToken(newAccessToken);
        //         } else {
        //             alert("로그인 후 이용 가능합니다!!");
        //             router.push("/24-03-login-use-apollo-client");
        //         }
        //     });
        // }
    }, []);
    // [해결방법: 2번째 - 나만의 로딩 활용하기]
    // useEffect(() => {
    //     if (isLoaded && !accessToken) {
    //         alert("로그인 후 이용 가능합니다!");
    //         router.push("/24-03-login-use-apollo-client");
    //     }
    // }, [isLoaded]);
    //
    //
    //
    // [해결방법: 3번째 - Recoil selector 활용하기]
    useEffect(() => {
        aaa.toPromise().then((newAccessToken) => {
            if (!newAccessToken) {
                alert("로그인 후 이용 가능합니다!");
                router.push("/24-03-login-use-apollo-client");
            }
        });
    });
    return <Component {...props} />;
};
