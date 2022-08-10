import styled from "@emotion/styled";
import { useState } from "react";
import { BsCartPlus, BsCartX } from "react-icons/bs";
import { IBoard } from "../../../../commons/types/generated/types";

const List = styled.li`
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
const Item = styled.div`
  width: ${(props) => (props.title ? "23em" : "8em")};
  padding: 10px;
  color: #fff;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const BasketBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
`;
const Label = styled.div`
  color: ${(props: any) => (props.isCancel ? "#ff00e6" : "#fff")};
`;
const BasketIcon = styled(BsCartPlus)`
  font-size: 1em;
  cursor: pointer;
  color: white;
`;
const CancelBasketIcon = styled(BsCartX)`
  font-size: 1em;
  cursor: pointer;
  color: #ff00e6;
`;

interface IListItemsProps {
  el: IBoard;
}

export default function ListItems(props: IListItemsProps) {
  const [isCancel, setIsCancel] = useState(false);
  const onClickBasket = (basket: IBoard) => () => {
    const baskets: Pick<IBoard, "contents" | "title" | "_id" | "writer">[] =
      JSON.parse(localStorage.getItem("baskets") || "[]");
    console.log(baskets);

    const temp = baskets.filter((el) => el._id === basket._id);

    if (temp.length === 1) {
      const edited = baskets.filter((el) => el._id !== basket._id);
      localStorage.setItem("baskets", JSON.stringify(edited));
      setIsCancel((prev) => !prev);
      return;
    }
    // 3. 해당 장바구니에 담기
    const { __typename, ...newBasket } = basket;
    baskets.push(newBasket);
    localStorage.setItem("baskets", JSON.stringify(baskets));

    setIsCancel((prev) => !prev);
  };

  return (
    <>
      <List key={props.el._id}>
        <Item>{props.el.writer}</Item>
        <Item title={"title"}>{props.el.title}</Item>
        {isCancel ? (
          <BasketBox>
            <CancelBasketIcon onClick={onClickBasket(props.el)} />
            <Label isCancel>담기 취소</Label>
          </BasketBox>
        ) : (
          <BasketBox>
            <BasketIcon onClick={onClickBasket(props.el)} />
            <Label>게시물 담기</Label>
          </BasketBox>
        )}
      </List>
    </>
  );
}
