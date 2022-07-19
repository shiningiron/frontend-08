import CommentUI from "./CreateComment.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_COMMENT } from "./CreateComment.queries";
import { FETCH_BOARD } from "../../boards/fetch/DetailBoard.queries";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { ICommentVariables } from "./CreateComment.types";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_COMMENT } from "../fetch/FetchComment.queries";

export default function CommentContainer() {
  const router = useRouter();
  const [createComment] = useMutation(CREATE_COMMENT);
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");

  const onChangeComments = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.newBoardId as string },
    }
  );

  const replyButton = async () => {
    if (!contents) alert("내용을 작성해주세요");
    // const { data } = useQuery(FETCH_COMMENT)
    try {
      const commentVariables: ICommentVariables = {
        boardId: router.query.newBoardId as string,
        createBoardCommentInput: {
          writer: data?.fetchBoard?.writer as string,
          password,
          contents,
          rating: 4.5,
        },
      };

      const result = await createComment({
        variables: commentVariables,
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { boardId: router.query.newBoardId },
          },
        ],
      });
      console.log(result.data.createBoardComment);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <CommentUI
      onChangeComments={onChangeComments}
      onChangePassword={onChangePassword}
      replyButton={replyButton}
      data={data}
    />
  );
}
