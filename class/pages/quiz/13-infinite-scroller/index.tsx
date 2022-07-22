import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

import InfiniteScroll from "react-infinite-scroller";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            _id
            writer
            title
            contents
        }
    }
`;
const TD = styled.td`
    border: 1px solid blueviolet;
    padding: 20px;
`;
const Wrapper = styled.div`
    height: 500px;
    overflow: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export default function StaticRoutedPage() {
    const { data, fetchMore } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const onFetchMore = () => {
        if (!data) return;
        fetchMore({
            variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult.fetchBoards)
                    return { fetchBoards: [...prev.fetchBoards] };

                return {
                    fetchBoards: [
                        ...prev.fetchBoards,
                        ...fetchMoreResult.fetchBoards,
                    ],
                };
            },
        });
    };

    return (
        <Wrapper>
            <InfiniteScroll
                pageStart={0}
                loadMore={onFetchMore}
                hasMore={true}
                useWindow={false}
            >
                <table
                    style={{
                        width: "100%",
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
                            <th>내용</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.fetchBoards.map((el) => (
                            <tr key={el._id}>
                                <TD>{el.writer}</TD>
                                <TD>{el.title}</TD>
                                <TD>{el.contents}</TD>
                            </tr>
                        )) || <div></div>}
                    </tbody>
                </table>
            </InfiniteScroll>
        </Wrapper>
    );
}
