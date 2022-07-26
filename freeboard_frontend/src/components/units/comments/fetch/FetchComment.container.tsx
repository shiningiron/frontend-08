import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_COMMENT } from "./FetchComment.queries";
import FetchCommentUI from "./FetchComment.presenter";
import React from "react";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function FetchCommentsContainer() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_COMMENT, {
    variables: { boardId: String(router.query.newBoardId) },
  });

  console.log(data);

  return <FetchCommentUI data={data} />;
}
