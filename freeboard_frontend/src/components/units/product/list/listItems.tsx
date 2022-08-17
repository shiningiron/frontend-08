import styled from "@emotion/styled";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsCartPlus, BsCartX } from "react-icons/bs";
import { IUseditem } from "../../../../commons/types/generated/types";

const List = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* width: 50rem; */
  height: 3em;
  /* border: 1px solid #c305e0; */
  border-radius: 50px;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.1);
`;
const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
`;
const Item = styled.div`
  width: ${(props) => (props.title ? "23rem" : "8rem")};
  /* padding: 10px; */
  color: #fff;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
`;
const BasketBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
`;
const BasketIcon = styled(BsCartPlus)`
  font-size: 2rem;
  cursor: pointer;
  color: ${(props: any) => (props.isCancel ? "#ff00e6" : "#fff")};
`;
const CancelBasketIcon = styled(BsCartX)`
  font-size: 2rem;
  cursor: pointer;
  color: ${(props: any) => (props.isCancel ? "#ff00e6" : "#fff")};
`;
export const TextToken = styled.span`
  color: ${(props: any) => (props.isMatched ? "#0ffe" : "white")};
`;

interface IListItemsProps {
  el: IUseditem;
  isCancel: boolean;
  onClickToUsedItem: (data: IUseditem) => () => void;
}

export default function ListItems(props: IListItemsProps) {
  const [isCancel, setIsCancel] = useState(false);
  const onClickBasket = (basket: IUseditem) => () => {
    const baskets: Pick<
      IUseditem,
      "contents" | "remarks" | "_id" | "name" | "price" | "seller"
    >[] = JSON.parse(localStorage.getItem("baskets") || "[]");
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
        <ItemBox onClick={props.onClickToUsedItem(props.el)}>
          <Item>
            {props.el.name
              .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
              .split("@#$%")
              .map((el) => (
                <TextToken key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </TextToken>
              ))}
          </Item>
          <Item title={"remarks"}>{props.el.remarks}</Item>
        </ItemBox>
        {isCancel ? (
          <BasketBox>
            <CancelBasketIcon
              onClick={onClickBasket(props.el)}
              isCancel={isCancel}
            />
          </BasketBox>
        ) : (
          <BasketBox>
            <BasketIcon onClick={onClickBasket(props.el)} />
          </BasketBox>
        )}
      </List>
    </>
  );
}
