import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import React, { MouseEvent } from "react";

export default function BoardListContainer() {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  console.log(data);

  const onClickMoveToBoard = (event: React.MouseEvent<HTMLDivElement>) => {
    router.push(`/freeboard/${(event?.target as HTMLDivElement).id}`);
  };

  const onClickNewBoard = (event: MouseEvent<HTMLButtonElement>) => {
    router.push(`/freeboard/new`);
  };

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      onClickMoveToBoard={onClickMoveToBoard}
      onClickNewBoard={onClickNewBoard}
    />
  );
}
