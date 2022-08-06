import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import React from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  keyword: string;
  count?: number;
  onClickMoveToBoard: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClickNewBoard: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChangeKeyword: (value: string) => void;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}
