import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { IUseditem } from "../../../../commons/types/generated/types";

const Wrapper = styled.div`
  width: 100%;
  height: 30rem;
  border-radius: 1.5rem;
  overflow: scroll;
  /* cursor: pointer; */
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BoardList = styled.ul`
  display: flex;
  flex-direction: column;
  /* cursor: pointer; */
`;
const List = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  /* height: 3em; */
  /* border: 1px solid #c305e0; */
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
const Item = styled.div`
  /* width: ${(props) => (props.title ? "20em" : "8em")}; */
  width: 8rem;
  /* padding: 10px; */
  color: #fff;
  text-align: start;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.9rem;
  cursor: pointer;
`;
const ImageCard = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 1rem;
  align-self: center;
  margin-bottom: 0.5rem;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default function TodayItemList(props: any) {
  const router = useRouter();
  const onClickToUsedItem = (item: IUseditem) => () => {
    router.push(`/usedItem/detail/${item._id}`);
  };
  return (
    <Wrapper>
      <BoardList>
        {props.today.map((el) => (
          <List key={el._id} onClick={onClickToUsedItem(el)}>
            <ImageCard />
            <Item>{el.name}</Item>
            <Item title={"remarks"}>{el.remarks}</Item>
          </List>
        ))}
      </BoardList>
    </Wrapper>
  );
}
