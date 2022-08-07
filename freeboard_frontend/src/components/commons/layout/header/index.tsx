import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import LoginPage from "../../../units/user/login/Login.container";
import CreateUserModal from "../../modal/createUserModal/Modal.container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 50px;
  padding-right: 2em;
  /* background-color: #b60d34; */
`;
function LayoutHeader() {
  const [userInfo] = useRecoilState(userInfoState);
  const [accessToken] = useRecoilState(accessTokenState);
  return (
    <Wrapper>
      {accessToken ? (
        <div>{`${userInfo.name}님 환영합니다.`}</div>
      ) : (
        <>
          <LoginPage />
          <CreateUserModal />
        </>
      )}
    </Wrapper>
  );
}
export default LayoutHeader;
