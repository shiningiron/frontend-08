import { useApolloClient, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import LoginPageUI from "./Login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./Login.queries";

export default function LoginPage() {
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
      console.log(accessToken);

      if (!accessToken) {
        alert("로그인에 실패하였습니다. 다시 시도해 주세요.");
        return;
      }

      // 2. login token 으로 유저 정보(userInfo) 받아오기
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });
      console.log(resultUserInfo.data);
      const userInfo = resultUserInfo.data?.fetchUserLoggedIn;

      // 3. 글로벌 스테이트에 저장하기
      setAccessToken(accessToken || "");
      setUserInfo(userInfo || {});
      localStorage.setItem("accessToken", accessToken); // 임시사용(나중에 지울 예정);
      localStorage.setItem("userInfo", JSON.stringify(userInfo)); // 임시사용(나중에 지울 예정);

      // 4. login 성공 페이지로 이동하기
      alert("로그인에 성공하였습니다!");
      router.push("/freeboard");
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
