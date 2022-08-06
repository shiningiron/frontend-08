import { ChangeEvent } from "react";
import _ from "lodash";
import BoardListSearchUI from "./boardListSearch.presenter";
import { IBoardListSearchProps } from "./boardListSearch.types";

export default function BoardListSearch(props: IBoardListSearchProps) {
  const getDebounce = _.debounce((value: string) => {
    props.refetch({ search: value, page: 1 });
    props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 200);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <BoardListSearchUI onChangeSearchbar={onChangeSearchbar} />;
}
