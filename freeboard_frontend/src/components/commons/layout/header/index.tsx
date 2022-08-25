import { useApolloClient } from "@apollo/client";
import styled from "@emotion/styled";
import { result } from "lodash";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../../commons/libraries/fetchLoggedin";
import { LogOut } from "../../../../commons/libraries/logout";
import {
  accessTokenState,
  logState,
  resultPointState,
  userInfoState,
} from "../../../../commons/store";
import { FETCH_USER_LOGGED_IN } from "../../../units/payment/login/login.queries";
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
const RowBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  div {
    color: #9c9c9c;
  }
  span {
    color: #fff;
  }
`;
function LayoutHeader() {
  const client = useApolloClient();
  const router = useRouter();
  const [rp] = useRecoilState(resultPointState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
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
        <RowBox>
          <div>
            <span>{`${userInfo?.name || ""}`}</span> 님 환영합니다.
          </div>
          <div>
            <span>{`${userInfo?.userPoint.amount || ""}`}</span> Point
          </div>
          <div
            onClick={LogOut}
            style={{
              cursor: "pointer",
              color: "#fff",
            }}
          >
            로그아웃
          </div>
        </RowBox>
      )}
    </Wrapper>
  );
}
export default LayoutHeader;
