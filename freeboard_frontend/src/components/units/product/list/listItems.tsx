import styled from "@emotion/styled";
import { IUseditem } from "../../../../commons/types/generated/types";

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

const ImageCard = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 1rem;
  align-self: center;
  margin-bottom: 0.5rem;
  background-color: rgba(0, 0, 0, 0.2);
`;

interface IListItemsProps {
  el: IUseditem;
  isCancel: number;
  onClickToUsedItem: (data: IUseditem) => () => void;
}

export default function ListItems(props: IListItemsProps) {
  return (
    <>
      <List key={props.el._id}>
        <ItemBox onClick={props.onClickToUsedItem(props.el)}>
          <ItemInfoBox>
            <Item>{props.el.name}</Item>
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
      </List>
    </>
  );
}
// 마이페이지
// 찜
// 대댓글
// 최근본목록
//
