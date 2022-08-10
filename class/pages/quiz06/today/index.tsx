import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import {
    IBoard,
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { getDate } from "../../../src/commons/libraries/utils";
import { useEffect, useState } from "react";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            _id
            writer
            title
            contents
            createdAt
        }
    }
`;
const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
const Wrapper = styled.div`
    height: 500px;
    width: 400px;
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
const List = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 3em;
    border: 1px solid #c305e0;
    border-radius: 50px;
    margin: 5px;
    background-color: rgba(0, 0, 0, 0.1);
`;
const Item = styled.div`
    width: ${(props) => (props.title ? "20em" : "8em")};
    padding: 10px;
    color: #fff;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
export default function StaticRoutedPage() {
    const { data, fetchMore } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);
    const [today, setToday] = useState<IBoard[]>([]);

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
    const onClickItem = (data: IBoard) => () => {
        const todayPicks: Pick<
            IBoard,
            "contents" | "createdAt" | "title" | "writer" | "_id"
        >[] = JSON.parse(localStorage.getItem(`${getDate()}`) || "[]");

        const temp = todayPicks.filter((el) => el._id === data._id);

        if (temp.length === 1) {
            return;
        }
        const { __typename, ...newPick } = data;
        todayPicks.push(newPick);
        localStorage.setItem(`${getDate()}`, JSON.stringify(todayPicks));
        setToday(todayPicks);
    };
    useEffect(() => {
        // const result = JSON.parse(localStorage.getItem(`${getDate()}`) || "[]");
        // setTodayPicks(result);
    }, [today]);
    return (
        <Container>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div>게시글</div>
                <Wrapper>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={onFetchMore}
                        hasMore={true}
                        useWindow={false}
                    >
                        <BoardList>
                            {data?.fetchBoards.map((el) => (
                                <List key={el._id} onClick={onClickItem(el)}>
                                    <Item>{el.writer}</Item>
                                    <Item title={"title"}>{el.title}</Item>
                                </List>
                            ))}
                        </BoardList>
                    </InfiniteScroll>
                </Wrapper>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div>오늘의 선택</div>
                <Wrapper>
                    <BoardList>
                        {today.map((el) => (
                            <List key={el._id} onClick={onClickItem(el)}>
                                <Item>{el.writer}</Item>
                                <Item title={"title"}>{el.title}</Item>
                            </List>
                        ))}
                    </BoardList>
                </Wrapper>
            </div>
        </Container>
    );
}
