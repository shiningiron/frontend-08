import styled from "@emotion/styled";
import SlickLib from "../../../../commons/libraries/slick";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100px;
    margin-bottom: 200px;
`;

export default function LayoutBanner() {
    return (
        <Wrapper>
            <SlickLib />
        </Wrapper>
    );
}
