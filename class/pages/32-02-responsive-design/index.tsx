import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";

const Wrapper = styled.div`
    width: 1000px;
    height: 1000px;
    background-color: rgba(255, 0, 0, 0.2);

    @media ${breakPoints.tablet} {
        width: 500px;
        height: 500px;
        background-color: rgba(200, 1, 180, 0.2);
    }

    @media ${breakPoints.mobile} {
        width: 100px;
        height: 100px;
        background-color: rgba(88, 0, 220, 0.2);
        display: none;
    }
`;

const MWrapper = styled.div`
    display: none;
    @media ${breakPoints.mobile} {
        width: 30%; // 반응형 디자인에서 가로는 비율(%)로 주기
        height: 18.75rem; // em도 있음 --> 부모의 font-size에 영향 / rem --> body에 적용된 font-size에 영향
        background-color: rgba(2, 155, 123, 0.3);
        display: block;
    }
`;
export default function ResponsiveDesignPage() {
    return (
        <>
            <MWrapper>모바일에만 필요한 컴포넌트!!</MWrapper>
            <Wrapper>상자</Wrapper>
        </>
    );
}
