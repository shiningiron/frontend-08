import * as Li from "../../../commons/styles/boardList.styles";
import { IBoardListUIProps } from "./BoardList.types";
import { getDate } from "../../../commons/libraries/utils";
import Pagination from "../../commons/pasination/Pasination.container";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <>
      <Li.ListWrapper>
        {props.data?.fetchBoards.map((el) => (
          <Li.ListBox
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToBoard}
          >
            <Li.Img src={`${el.images}`} />
            <Li.Title id={el._id}>{el.title}</Li.Title>
            <Li.ListInfo id={el._id}>
              <Li.Writer id={el._id}>{el.writer}</Li.Writer>
              <Li.BoardDate id={el._id}>{getDate(el.createdAt)}</Li.BoardDate>
            </Li.ListInfo>
          </Li.ListBox>
        ))}
      </Li.ListWrapper>
      <Li.Footer>
        <Pagination data={props.data} refetch={props.refetch} />
      </Li.Footer>
      <Li.NewBoardButton onClick={props.onClickNewBoard}>
        글쓰기
      </Li.NewBoardButton>
    </>
  );
}
