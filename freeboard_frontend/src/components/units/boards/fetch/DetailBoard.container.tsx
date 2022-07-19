import { useQuery } from "@apollo/client";
import { FETCH_BOARD } from "./DetailBoard.queries";
import { useRouter } from "next/router";
import DetailBoardUI from "./DetailBoard.presenter";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { useState } from "react";

export default function DetailBoardContainer() {
  const router = useRouter();
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

  const onClickLocation = () => {
    setBoardAddress(
      (data?.fetchBoard.boardAddress?.address || "") +
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
    />
  );
}
