import styled from "@emotion/styled";
import Navi01 from "./navi01/navi01.container";

const Wrapper = styled.div`
    height: 50rem;
    background-color: green;
    margin-right: 8%;
`;

export default function LayoutNavigation() {
    return (
        <Wrapper>
            <Navi01 />
        </Wrapper>
    );
}
