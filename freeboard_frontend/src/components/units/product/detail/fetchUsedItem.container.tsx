import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

import FetchUsedItemUI from "./fetchUsedItem.presenter";
import {
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./fetchUsedItem.queries";

export default function FetchUsedItemContainer() {
  const router = useRouter();
  const [isPick, setIsPick] = useState(false);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  console.log(data);

  const onClickMoveToEdit = () => {
    router.push(`/usedItem/detail/${router.query.useditemId}/edit`);
    console.log(data);
  };
  const onClickMoveToList = () => {
    router.push(`/usedItem/list`);
  };
  const onClickDelete = async () => {
    try {
      const result = await deleteUseditem({
        variables: { useditemId: String(router.query.useditemId) },
        // refetchQueries: [{ query: FETCH_USED_ITEMS }],
      });
      Modal.info({ content: "게시글이 삭제 되었습니다." });
      router.push("/freeboard");
      console.log(result);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickPick = async () => {
    try {
      const result = await toggleUseditemPick({
        variables: { useditemId: String(router.query.useditemId) },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
      console.log("찜 결과", result);
      setIsPick((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <FetchUsedItemUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToList={onClickMoveToList}
      onClickPick={onClickPick}
      isPick={isPick}
    />
  );
}
