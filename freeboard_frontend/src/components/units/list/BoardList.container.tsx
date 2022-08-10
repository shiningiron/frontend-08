import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./boardList.queries";
import { useQuery } from "@apollo/client";
import BoardListUI from "./boardList.presenter";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";
import React, { MouseEvent, useState } from "react";

export default function BoardListContainer() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveToBoard = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) return;
    router.push(`/freeboard/${event?.currentTarget.id}`);
  };

  const onClickNewBoard = () => {
    router.push(`/freeboard/new`);
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      onClickMoveToBoard={onClickMoveToBoard}
      onClickNewBoard={onClickNewBoard}
      count={dataBoardsCount?.fetchBoardsCount}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
