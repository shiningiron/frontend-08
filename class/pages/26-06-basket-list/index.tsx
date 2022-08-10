import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

const Row = styled.div`
    width: 25%;
    display: flex;
`;
const Column = styled.div`
    width: 25%;
`;

export default function StaticRoutedBoardPage() {
    const [baskets, setBaskets] = useState<IBoard[]>([]);

    // 1. process.browser
    // 2. typeof window !== "undefined"
    // 3. useEffect
    // 위에 것들을 사용하게 되면 프론트서버에서 localStorage사용 안해도 됨(어차피 안됨 브라우저 아니라서)
    useEffect(() => {
        const result = JSON.parse(localStorage.getItem("baskets") || "[]");
        setBaskets(result);
    }, []);
    return (
        <>
            {baskets.map((el) => (
                // <Fragment key={el.number}>
                <Row key={el._id}>
                    <Column>{el._id}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                </Row>
            ))}
        </>
    );
}
