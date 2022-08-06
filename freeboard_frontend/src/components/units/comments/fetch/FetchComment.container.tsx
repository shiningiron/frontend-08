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

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_COMMENT, {
    variables: { boardId: String(router.query.newBoardId) },
  });

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  console.log(data);

  return <FetchCommentUI data={data} onFetchMore={onFetchMore} />;
}
