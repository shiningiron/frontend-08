import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 3em;
    border: 1px solid #c305e0;
    border-radius: 50px;
    margin: 5px;
    background-color: rgba(0, 0, 0, 0.1);
`;
const Column = styled.div`
    width: 25%;
    width: ${(props) => (props.title ? "23em" : "8em")};
    padding: 10px;
    color: #fff;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
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
        <Wrapper>
            {baskets.map((el, index) => (
                // <Fragment key={el.number}>
                <Row key={el._id}>
                    <Column>{index}</Column>
                    <Column>{el.writer}</Column>
                    <Column title="title">{el.title}</Column>
                </Row>
            ))}
        </Wrapper>
    );
}
