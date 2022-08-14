import CreateUsedItemContainer from "../../../../../src/components/units/product/create/createUsedItem.container";
import { FETCH_USED_ITEM } from "../../../../../src/components/units/product/detail/fetchUsedItem.queries";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../../src/commons/types/generated/types";
export default function EditUsedItemPage() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  return <CreateUsedItemContainer isEdit={true} data={data} />;
}
