import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";

const FETCH_BOARDS = gql`
    query fetchBoards($search: String, $page: Int) {
        fetchBoards(search: $search, page: $page) {
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
    // const [search, setSearch] = useState("");

    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const getDebounce = _.debounce((value) => {
        refetch({ search: value, page: 1 });
    }, 1000);

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        // setSearch(event?.target.value);
        getDebounce(event.target.value);
    };
    // const onClickSearch = () => {
    //     refetch({ search, page: 1 });
    // };

    const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
        if (!(event.target instanceof HTMLSpanElement)) return;
        refetch({ page: Number(event.target.id) }); // 해당 결과를 리페치 하므로, 입력되지 않은 인자는 굳이 입력 안해도 재사용됨
    };

    return (
        <>
            검색어 입력 : <input type="text" onChange={onChangeSearch} />
            {/* <button onClick={onClickSearch}>검색하기</button> */}
            {data?.fetchBoards.map((el) => (
                // <Fragment key={el.number}>
                <Row key={el._id}>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                </Row>
            ))}
            {new Array(10).fill(1).map((_, index) => (
                <span
                    key={index + 1}
                    id={String(index + 1)}
                    onClick={onClickPage}
                >
                    {index + 1}
                </span>
            ))}
        </>
    );
}
