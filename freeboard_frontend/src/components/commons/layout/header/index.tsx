import { useApolloClient } from "@apollo/client";
import styled from "@emotion/styled";
import { result } from "lodash";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { LogOut } from "../../../../commons/libraries/logout";
import {
  accessTokenState,
  logState,
  userInfoState,
} from "../../../../commons/store";
import LoginPage from "../../../units/user/login/login.container";
import { LOGOUT_USER } from "../../../units/user/login/login.queries";
import CreateUserModal from "../../modal/createUserModal/modal.container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 50px;
  padding-right: 2em;
  /* background-color: #b60d34; */
`;
function LayoutHeader() {
  const client = useApolloClient();
  const router = useRouter();
  const [userInfo] = useRecoilState(userInfoState);
  const [accessToken] = useRecoilState(accessTokenState);
  const [isLogout, setIsLogout] = useRecoilState(logState);

  const LogOut = async () => {
    const result = await client.mutate({
      mutation: LOGOUT_USER,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    console.log(result);
    setIsLogout(result.data);
    localStorage.setItem("log", JSON.stringify(result.data));
    router.push("/");
  };

  return (
    <Wrapper>
      {isLogout ? (
        <>
          <LoginPage />
          <CreateUserModal />
        </>
      ) : (
        <>
          <div>{`${userInfo.name}님 환영합니다.`}</div>
          <div onClick={LogOut} style={{ cursor: "pointer" }}>
            로그아웃
          </div>
        </>
      )}
    </Wrapper>
  );
}
export default LayoutHeader;
