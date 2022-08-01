import { gql, useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchBoardsArgs,
    IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent, useState } from "react";
import { css } from "@emotion/react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

export const spanStyle = css``;

const TD = styled.td`
    border: 1px solid blueviolet;
    padding: 20px;
`;

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

const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount {
        fetchBoardsCount
    }
`;

export default function Pagination() {
    const [startPage, setStartPage] = useState(1);
    const [currentId, setCurrentId] = useState("1");
    const [keyword, setKeyword] = useState("");

    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const { data: dataBoardsCount } = useQuery<
        Pick<IQuery, "fetchBoardsCount">,
        IQueryFetchBoardsCountArgs
    >(FETCH_BOARDS_COUNT);

    const lastPage = dataBoardsCount
        ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
        : 1;

    const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
        if (!(event?.target instanceof HTMLSpanElement)) return;
        refetch({ page: Number(event.target.id) });
        setCurrentId(event.target.id);
        console.log(event.target);
    };

    const onClickPrevPage = () => {
        if (startPage === 1) return;
        setStartPage((prev) => prev - 10);
        setCurrentId(`${(prev) => prev - 10}`);
        refetch({ page: startPage - 10 });
    };

    const onClickNextPage = () => {
        if (startPage + 10 <= lastPage) {
            setStartPage((prev) => prev + 10);
            setCurrentId(`${(prev) => prev + 10}`);
            refetch({ page: startPage + 10 });
        }
    };

    const getDebounce = _.debounce((searchKeyword) => {
        refetch({ search: searchKeyword, page: 1 });
        setKeyword(searchKeyword);
    }, 1000);
    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        getDebounce(event.target.value);
    };

    return (
        <>
            검색: <input type="text" onChange={onChangeSearch} />
            <div
                style={{
                    padding: "10px",
                    tableLayout: "fixed",
                    width: "100%",
                }}
            >
                <table
                    style={{
                        border: "3px solid purple",
                    }}
                >
                    <thead>
                        <tr
                            style={{
                                border: "1px solid violet",
                                padding: "10px",
                            }}
                        >
                            <th>작성자</th>
                            <th>제목</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.fetchBoards.map((el) => (
                            <tr key={uuidv4()}>
                                <TD>{el.writer}</TD>
                                <TD>
                                    {el.title
                                        .replaceAll(keyword, `^&*${keyword}^&*`)
                                        .split("^&*")
                                        .map((el) => (
                                            <span
                                                key={uuidv4()}
                                                style={{
                                                    color:
                                                        keyword === el
                                                            ? "red"
                                                            : "black",
                                                }}
                                            >
                                                {el}
                                            </span>
                                        ))}
                                </TD>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <span onClick={onClickPrevPage}>&lt;</span>
                {new Array(10).fill(1).map((_, index) =>
                    index + startPage <= lastPage ? (
                        <span
                            key={index + startPage}
                            id={String(index + startPage)}
                            onClick={onClickPage}
                            style={{
                                padding: "10px",
                                color:
                                    Number(currentId) ===
                                    Number(index + startPage)
                                        ? "midnightblue"
                                        : "gray",
                                fontSize:
                                    Number(currentId) ===
                                    Number(index + startPage)
                                        ? "50px"
                                        : "30px",
                            }}
                        >
                            {index + startPage}
                        </span>
                    ) : (
                        <span></span>
                    )
                )}
                <span onClick={onClickNextPage}>&gt;</span>
            </div>
        </>
    );
}
