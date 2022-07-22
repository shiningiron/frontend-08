import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD } from "./DetailBoard.queries";
import { useRouter } from "next/router";
import DetailBoardUI from "./DetailBoard.presenter";
import { DELETE_BOARD } from "../delete/DeleteBoard.queries";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { useState } from "react";

export default function DetailBoardContainer() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
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
  return (
    <DetailBoardUI
      data={data}
      boardAddress={boardAddress}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickLocation={onClickLocation}
      onClickMoveToList={onClickMoveToList}
      onClickDelete={onClickDelete}
    />
  );
}
