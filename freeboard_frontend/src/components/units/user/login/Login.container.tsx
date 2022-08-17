import { useApolloClient, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  logState,
  userInfoState,
} from "../../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import LoginPageUI from "./login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./login.queries";

export default function LoginPage() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isLogout, setIsLogout] = useRecoilState(logState);
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
      if (!email) {
        Modal.error({ content: "이메일을 입력해주세요" });
        return;
      } else if (!password) {
        Modal.error({ content: "비밀번호를 입력해주세요" });
        return;
      }

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
      // localStorage.setItem("accessToken", accessToken);
      // localStorage.setItem("userInfo", JSON.stringify(userInfo));

      // 4. login 성공 페이지로 이동하기
      Modal.success({
        content: `로그인에 성공하였습니다! ${userInfo.name}님 환영합니다.`,
      });
      localStorage.setItem("log", JSON.stringify({ logoutUser: false }));
      setIsLogout(false);
      router.push("/freeboard");
    } catch (error) {
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
