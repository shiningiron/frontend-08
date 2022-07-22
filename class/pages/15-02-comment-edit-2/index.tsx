import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

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
const Row = styled.div`
    width: 50%;
    display: flex;
`;
const Column = styled.div`
    width: 50%;
`;

export default function StaticRoutedBoardPage() {
    const { data } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const [myIndex, setMyIndex] = useState([
        false, // index0
        false, // index1
        false, // index2
        false, // index3
        false,
        false,
        false,
        false,
        false,
        false, // index9
    ]);

    const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
        if (!(event.target instanceof HTMLButtonElement)) return;
        const aaa = [...myIndex];
        aaa[Number(event.target.id)] = true;
        setMyIndex(aaa);
        console.log(aaa);
    };

    return (
        <>
            {data?.fetchBoards.map((el, index) => (
                <div key={el._id}>
                    {myIndex[index] === false && (
                        <Row key={el._id}>
                            <Column>{el.writer}</Column>
                            <Column>{el.contents}</Column>
                            <button id={String(index)} onClick={onClickEdit}>
                                수정하기
                            </button>
                        </Row>
                    )}
                    {myIndex[index] === true && (
                        <div>
                            수정할 내용: <input type="text" />
                            <button>수정하기</button>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}
