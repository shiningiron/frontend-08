import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { IBoard, IQuery } from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id
            writer
            title
            contents
        }
    }
`;
const Row = styled.div`
    width: 25%;
    display: flex;
`;
const Column = styled.div`
    width: 25%;
`;

export default function StaticRoutedBoardPage() {
    const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);
    const onClickBasket = (basket: IBoard) => () => {
        console.log(basket);

        // 1. 기존 장바구니 가져오기
        const baskets: Pick<IBoard, "contents" | "title" | "_id" | "writer">[] =
            JSON.parse(localStorage.getItem("baskets") || "[]");

        // 2. 이미 담겼는지 확인하기
        const temp = baskets.filter((el) => el._id === basket._id);
        if (temp.length === 1) {
            alert("이미 담으신 물품입니다.");
            return;
        }
        // 3. 해당 장바구니에 담기
        const { __typename, ...newBasket } = basket;
        baskets.push(newBasket);
        localStorage.setItem("baskets", JSON.stringify(baskets));
    };
    return (
        <>
            {data?.fetchBoards.map((el) => (
                // <Fragment key={el.number}>
                <Row key={el._id}>
                    <Column>{el._id}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    <button onClick={onClickBasket(el)}>장바구니 담기</button>
                </Row>
            ))}
        </>
    );
}
