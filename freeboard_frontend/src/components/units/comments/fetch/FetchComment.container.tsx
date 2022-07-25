import { useQuery, gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_COMMENT } from "./FetchComment.queries";
import FetchCommentUI from "./FetchComment.presenter";
import React from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

const DELETE_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

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
