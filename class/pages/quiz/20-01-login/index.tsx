import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";
import {
    IMutation,
    IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";

const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            accessToken
        }
    }
`;

export default function LoginPage() {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginUser] = useMutation<
        Pick<IMutation, "loginUser">,
        IMutationLoginUserArgs
    >(LOGIN_USER);

    const onChangeId = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const onClickLogin = async () => {
        const result = await loginUser({
            variables: { email, password },
        });

        const accessToken = result.data?.loginUser.accessToken;
        console.log(accessToken);
        if (!accessToken) {
            alert("로그인을 먼저 해주세요");
            return;
        }

        setAccessToken(accessToken);
        alert("로그인에 성공하였습니다!");
        router.push("/quiz/20-02-login-success");
    };

    return (
        <>
            아이디: <input type="text" onChange={onChangeId} />
            비밀번호: <input type="password" onChange={onChangePassword} />
            <button onClick={onClickLogin}>로그인</button>
        </>
    );
}
