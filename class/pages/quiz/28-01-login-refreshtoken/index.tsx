import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store/";
import {
    IMutation,
    IMutationLoginUserExampleArgs,
} from "../../../src/commons/types/generated/types";

const LOGIN_USER_EXAMPLE = gql`
    mutation loginUserExample($email: String!, $password: String!) {
        loginUserExample(email: $email, password: $password) {
            accessToken
        }
    }
`;

export default function LoginPage() {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginUserExample] = useMutation<
        Pick<IMutation, "loginUserExample">,
        IMutationLoginUserExampleArgs
    >(LOGIN_USER_EXAMPLE);

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const onClickLogin = async () => {
        const result = await loginUserExample({
            variables: { email, password },
        });

        const accessToken = result.data?.loginUserExample.accessToken;
        console.log(accessToken);
        if (!accessToken) {
            alert("로그인에 실패하였습니다. 다시 시도해 주세요.");
            return;
        }

        setAccessToken(accessToken);
        alert("로그인에 성공하였습니다!");
        router.push("/quiz/28-02-login-refreshtoken-success");
    };

    return (
        <>
            이메일: <input type="text" onChange={onChangeEmail} />
            비밀번호: <input type="password" onChange={onChangePassword} />
            <button onClick={onClickLogin}>로그인</button>
        </>
    );
}
