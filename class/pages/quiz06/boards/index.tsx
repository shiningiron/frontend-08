import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import ListItems from "./listItems";

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

const Wrapper = styled.div`
    height: 500px;
    overflow: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const BoardList = styled.ul`
    display: flex;
    flex-direction: column;
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
                <BoardList>
                    {data?.fetchBoards.map((el) => (
                        <ListItems key={el._id} el={el} />
                    ))}
                </BoardList>
            </InfiniteScroll>
        </Wrapper>
    );
}
