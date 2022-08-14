import styled from "@emotion/styled";
import Navi01 from "./navi01/navi01.container";

const Wrapper = styled.div`
  /* width: 100px; */
  height: 50rem;
  /* background-color: green; */
  margin-right: 120px;
`;

export default function LayoutNavigation() {
  return (
    <Wrapper>
      <Navi01 />
    </Wrapper>
  );
}
