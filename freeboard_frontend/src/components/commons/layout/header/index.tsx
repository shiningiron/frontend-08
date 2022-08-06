import styled from "@emotion/styled";
import CreateUserModal from "../../modal/createUserModal/Modal.container";

const Wrapper = styled.div`
  height: 50px;
  background-color: #b60d34;
`;

export default function LayoutHeader() {
  return (
    <Wrapper>
      <CreateUserModal />
    </Wrapper>
  );
}
