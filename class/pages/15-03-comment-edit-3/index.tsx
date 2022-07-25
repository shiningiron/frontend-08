import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import BoardCommentItem from "../../src/components/units/15-board-comment-item";

const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutedBoardPage() {
    const { data } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    // const [myIndex, setMyIndex] = useState([
    //     false, // index0
    //     false, // index1
    //     false, // index2
    //     false, // index3
    //     false,
    //     false,
    //     false,
    //     false,
    //     false,
    //     false, // index9
    // ]);

    return (
        <>
            {data?.fetchBoards.map((el) => (
                <BoardCommentItem key={el._id} el={el} />
            ))}
        </>
    );
}
