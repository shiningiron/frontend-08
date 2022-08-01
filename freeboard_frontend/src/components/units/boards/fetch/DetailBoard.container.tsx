import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./DetailBoard.queries";
import { useRouter } from "next/router";
import DetailBoardUI from "./DetailBoard.presenter";
import { DELETE_BOARD } from "../delete/DeleteBoard.queries";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { useState } from "react";

export default function DetailBoardContainer() {
  const router = useRouter();
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);
  const [boardAddress, setBoardAddress] = useState("");
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.newBoardId as string },
    }
  );
  console.log(data);

  const onClickMoveToEdit = () => {
    router.push(`/freeboard/${router.query.newBoardId}/edit`);
    console.log(data);
  };
  const onClickMoveToList = () => {
    router.push(`/freeboard`);
  };
  const onClickDelete = async () => {
    const result = await deleteBoard({
      variables: { boardId: router.query.newBoardId as string },
    });
    alert("게시글이 삭제 되었습니다.");
    router.push("/freeboard");
    console.log(result);
  };

  const onClickLocation = () => {
    setBoardAddress(
      (data?.fetchBoard.boardAddress?.address || "") +
        " " +
        (data?.fetchBoard.boardAddress?.addressDetail || "")
    );
    if (boardAddress) setBoardAddress("");
  };

  const onClickLike = async () => {
    try {
      const result = await likeBoard({
        variables: { boardId: router.query.newBoardId as string },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.newBoardId as string },
          },
        ],
      });
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };
  const onClickDisLike = async () => {
    try {
      const result = await dislikeBoard({
        variables: { boardId: router.query.newBoardId as string },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.newBoardId as string },
          },
        ],
      });
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <DetailBoardUI
      data={data}
      boardAddress={boardAddress}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickLocation={onClickLocation}
      onClickMoveToList={onClickMoveToList}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
    />
  );
}
