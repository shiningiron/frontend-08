import { ApolloQueryResult } from "@apollo/client";
import React from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToBoard: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClickNewBoard: (event: React.MouseEvent<HTMLButtonElement>) => void;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}
