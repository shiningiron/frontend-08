import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import {
    IQuery,
    IQueryFetchBoardsArgs,
    IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent, useState } from "react";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import UseSearch from "../../commons/hooks/useSearch";

export default function BoardList() {
    // const router = useRouter();
    // const onClickMoveToBoardNew = () => {
    //   router.push("/boards/new");
    // };

    // const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    //   if (!(event.target instanceof HTMLDivElement)) return;
    //   router.push(`/boards/${event.target.id}`);
    // };

    const { onClickMoveToPage } = useMoveToPage();
    const { keyword, onChangeKeyword } = UseSearch();

    const [keyword, setKeyword] = useState("");

    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
        Pick<IQuery, "fetchBoardsCount">,
        IQueryFetchBoardsCountArgs
    >(FETCH_BOARDS_COUNT);

    const onChangeKeyword = (value: string) => {
        setKeyword(value);
    };

    return (
        <BoardListUI
            data={data}
            onClickMoveToPage={onClickMoveToPage}
            refetch={refetch}
            refetchBoardsCount={refetchBoardsCount}
            count={dataBoardsCount?.fetchBoardsCount}
            keyword={keyword}
            onChangeKeyword={onChangeKeyword}
            // onClickMoveToBoardNew={onClickMoveToBoardNew}
            // onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        />
    );
}
