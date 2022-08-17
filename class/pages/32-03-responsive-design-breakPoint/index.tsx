import styled from "@emotion/styled";

const Wrapper = styled.div`
    width: 1000px;
    height: 1000px;
    background-color: rgba(255, 0, 0, 0.2);

    @media (min-width: 768px) and (max-width: 991px) {
        width: 500px;
        height: 500px;
        background-color: rgba(200, 1, 180, 0.2);
    }

    @media (max-width: 767px) {
        width: 100px;
        height: 100px;
        background-color: rgba(88, 0, 220, 0.2);
        display: none;
    }
`;
export default function ResponsiveDesignPage() {
    return <Wrapper>상자</Wrapper>;
}
