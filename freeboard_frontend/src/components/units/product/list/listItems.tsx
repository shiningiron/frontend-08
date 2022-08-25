import styled from "@emotion/styled";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsCartPlus, BsCartX } from "react-icons/bs";
import {
  IMutation,
  IMutationToggleUseditemPickArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { Modal } from "antd";
import { gql, useMutation } from "@apollo/client";
import { FETCH_USED_ITEMS } from "../../../../../pages/usedItem/list";
import { async } from "@firebase/util";
import Pick from "./picked";

const List = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  /* width: 50rem; */
  /* height: 3em; */
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
const ItemInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
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
export const Heart = styled(IoIosHeartEmpty)`
  font-size: 2rem;
  cursor: pointer;
  color: #fff;
  /* ${(props: any) => (props.isCancel ? "#ff00e6" : "#fff")}; */
`;
export const HeartY = styled(IoIosHeart)`
  font-size: 2rem;
  cursor: pointer;
  color: #ff00e6;
  /* ${(props: any) => (props.isCancel ? "#ff00e6" : "#fff")}; */
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
  font-weight: 500;
  color: ${(props: any) => (props.isMatched ? "#0ffe" : "white")};
`;
const ImageCard = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 1rem;
  align-self: center;
  margin-bottom: 0.5rem;
  background-color: rgba(0, 0, 0, 0.2);
`;
const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;
interface IListItemsProps {
  el: IUseditem;
  isCancel: number;
  onClickToUsedItem: (data: IUseditem) => () => void;
}

export default function ListItems(props: IListItemsProps) {
  const [isCancel, setIsCancel] = useState(0);
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);
  // const onClickBasket = (basket: IUseditem) => () => {
  //   const baskets: Pick<
  //     IUseditem,
  //     "contents" | "remarks" | "_id" | "name" | "price" | "seller" | "images"
  //   >[] = JSON.parse(localStorage.getItem("baskets") || "[]");
  //   console.log(baskets);

  //   const temp = baskets.filter((el) => el._id === basket._id);

  //   if (temp.length === 1) {
  //     const edited = baskets.filter((el) => el._id !== basket._id);
  //     localStorage.setItem("baskets", JSON.stringify(edited));
  //     setIsCancel((prev) => !prev);
  //     return;
  //   }
  //   // 3. 해당 장바구니에 담기
  //   const { __typename, ...newBasket } = basket;
  //   baskets.push(newBasket);
  //   localStorage.setItem("baskets", JSON.stringify(baskets));

  //   setIsCancel((prev) => !prev);
  // };

  const onClickPick = async () => {
    const result = await toggleUseditemPick({
      variables: { useditemId: String(props.el._id) },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_USED_ITEMS,
          data: {
            fetchUseditems: {
              __typename: "[Useditem!]!",
              pickedCount: data?.toggleUseditemPick,
            },
          },
        });
      },
    });
    setIsCancel(result);
  };

  return (
    <>
      <List key={props.el._id}>
        <ItemBox onClick={props.onClickToUsedItem(props.el)}>
          <ItemInfoBox>
            <Item>
              {props.el.name
                .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                .split("@#$%")
                .map((el) => (
                  <TextToken
                    key={uuidv4()}
                    isMatched={props.keyword === el}
                    style={{ fontWeight: "bold" }}
                  >
                    {el}
                  </TextToken>
                ))}
            </Item>
            <Item title={"remarks"} style={{ color: "#999" }}>
              {props.el.remarks}
            </Item>
            <Item style={{ color: "red" }}>
              {props.el.price?.toLocaleString()}&nbsp;원
            </Item>
          </ItemInfoBox>
          {props.el.images[0] || props.el.images[1] ? (
            // prettier-ignore
            <ImageCard src={`https://storage.googleapis.com/${props.el.images[props.el.images[0] ? 0 : 1]}`} />
          ) : (
            <ImageCard src={"/images/pizza.png"} />
          )}
        </ItemBox>
        <Pick onClickPick={onClickPick} isCancel={isCancel} el={props.el} />
      </List>
    </>
  );
}
// 마이페이지
// 찜
// 대댓글
// 최근본목록
//
