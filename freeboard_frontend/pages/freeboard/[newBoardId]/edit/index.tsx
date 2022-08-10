import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";
import CreateBoardContainer from "../../../../src/components/units/boards/create/createBoard.container";
import { FETCH_BOARD } from "../../../../src/components/units/boards/fetch/detailBoard.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function UpdateDetailPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.newBoardId as string },
    }
  );

  return <CreateBoardContainer isEdit={true} data={data} />;
}
