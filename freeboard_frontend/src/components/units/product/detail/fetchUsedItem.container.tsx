import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import FetchUsedItemUI from "./fetchUsedItem.presenter";
import { FETCH_USED_ITEM } from "./fetchUsedItem.queries";

export default function FetchUsedItemContainer() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  console.log(data);

  return <FetchUsedItemUI />;
}
