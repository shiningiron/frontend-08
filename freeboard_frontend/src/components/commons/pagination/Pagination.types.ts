import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";

export interface IPaginationProps {
  count?: number;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface IPaginationUIProps {
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onClickPage: (event: MouseEvent<HTMLDivElement>) => void;
  startPage: number;
  lastPage: number;
  currentId: number;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
