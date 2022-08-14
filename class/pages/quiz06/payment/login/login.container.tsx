import { useApolloClient, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../src/commons/store";
import {
    IMutation,
    IMutationLoginUserArgs,
} from "../../../../src/commons/types/generated/types";

import LoginPageUI from "./login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./login.queries";

export default function LoginPageContainer() {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);
    const router = useRouter();
    const client = useApolloClient();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginUser] = useMutation<
        Pick<IMutation, "loginUser">,
        IMutationLoginUserArgs
    >(LOGIN_USER);

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const onClickLogin = async () => {
        try {
            // 1. login해서 token 받아오기
            const result = await loginUser({
                variables: { email, password },
            });
            const accessToken = result.data?.loginUser.accessToken;

            if (!accessToken) {
                alert("로그인에 실패하였습니다. 다시 시도해 주세요.");
                return;
            }

            const resultUserInfo = await client.query({
                query: FETCH_USER_LOGGED_IN,
                context: {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                },
            });
            const userInfo = resultUserInfo.data?.fetchUserLoggedIn;

            setAccessToken(accessToken || "");
            setUserInfo(userInfo || {});
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("userInfo", JSON.stringify(userInfo));

            alert("로그인에 성공하였습니다!");
            router.push("/quiz06/payment/loading");
        } catch {
            Modal.error({ content: Error.name });
        }
    };

    return (
        <LoginPageUI
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onClickLogin={onClickLogin}
        />
    );
}
