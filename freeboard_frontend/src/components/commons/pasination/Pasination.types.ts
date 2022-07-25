import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";

export interface IPaginationProps {
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface IPaginationUIProps {
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  startPage: number;
  lastPage: number;
  currentId: number;
}
