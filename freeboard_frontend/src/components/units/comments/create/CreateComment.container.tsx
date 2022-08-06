import CommentUI from "./CreateComment.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_COMMENT } from "./CreateComment.queries";
import { FETCH_BOARD } from "../../boards/fetch/DetailBoard.queries";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { ICommentVariables } from "./CreateComment.types";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_COMMENT } from "../fetch/FetchComment.queries";
import FetchCommentsContainer from "../fetch/FetchComment.container";

export default function CommentContainer() {
  const router = useRouter();
  const [createComment] = useMutation(CREATE_COMMENT);
  const [writer, setWriter] = useState("");
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(0);

  const onChangeComments = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  // const onChangeRating = (event) => {
  //   setRating(event.target.value);
  // };
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
          writer,
          password,
          contents,
          rating,
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
    setContents("");
  };

  return (
    <>
      <CommentUI
        onChangeComments={onChangeComments}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        setRating={setRating}
        replyButton={replyButton}
        contents={contents}
        data={data}
      />
    </>
  );
}
