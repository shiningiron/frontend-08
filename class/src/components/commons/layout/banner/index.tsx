import styled from "@emotion/styled";
import ReactSlider from "../../../../commons/libraries/slick/index";

const Wrapper = styled.div`
    display: absolute;
    height: 350px;
    background-color: #fff;
`;
export default function BannerLayout() {
    return (
        <Wrapper>
            <ReactSlider />
        </Wrapper>
    );
}
