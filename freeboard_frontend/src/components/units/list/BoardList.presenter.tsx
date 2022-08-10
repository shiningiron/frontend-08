import * as Li from "../../../commons/styles/boardList.styles";
import { IBoardListUIProps } from "./boardList.types";
import { getDate } from "../../../commons/libraries/utils";
import Pagination from "../../commons/pagination/pagination.container";
import styled from "@emotion/styled";
import BoardListSearch from "../../commons/searchbar/boardlistSearch/boardListSearch.container";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <Wrapper>
      <Li.ListWrapper>
        {props.data?.fetchBoards.map((el) => (
          <Li.ListBox
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToBoard}
          >
            {el?.images?.[0] ? (
              <Li.Img src={`https://storage.googleapis.com/${el.images[0]}`} />
            ) : (
              <div
                style={{ width: "50px", height: "50px", marginRight: "50px" }}
              ></div>
            )}
            <Li.Title id={el._id}>
              {el.title
                .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                .split("@#$%")
                .map((el) => (
                  <Li.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </Li.TextToken>
                ))}
            </Li.Title>
            <Li.ListInfo id={el._id}>
              <Li.Writer id={el._id}>{el.writer}</Li.Writer>
              <Li.BoardDate id={el._id}>{getDate(el.createdAt)}</Li.BoardDate>
            </Li.ListInfo>
          </Li.ListBox>
        ))}
      </Li.ListWrapper>
      <Li.Footer>
        <BoardListSearch
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
          onChangeKeyword={props.onChangeKeyword}
        />
        <Pagination refetch={props.refetch} count={props.count} />
      </Li.Footer>
      <Li.NewBoardButton onClick={props.onClickNewBoard}>
        글쓰기
      </Li.NewBoardButton>
    </Wrapper>
  );
}
