import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            _id
            likeCount
        }
    }
`;
const LIKE_BOARD = gql`
    mutation likeBoard($boardId: ID!) {
        likeBoard(boardId: $boardId)
    }
`;
export default function OptimisticUIPage() {
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: "62fc38aa03562900296b2d8d" },
    });

    const [likeBoard] = useMutation(LIKE_BOARD);

    const onClickLike = () => {
        likeBoard({
            variables: { boardId: "62fc38aa03562900296b2d8d" },
            // refetchQueries: [
            //     { query: FETCH_BOARD, variables: { boardId: "게시글ID" } },
            // ],
            optimisticResponse: {
                likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
            },
            update(cache, { data }) {
                cache.writeQuery({
                    query: FETCH_BOARD,
                    variables: { boardId: "62fc38aa03562900296b2d8d" },
                    data: {
                        fetchBoard: {
                            _id: "62fc38aa03562900296b2d8d",
                            __typename: "Board",
                            likeCount: data.likeBoard,
                        },
                    },
                });
            },
        });
    };

    return (
        <>
            <div>현재 카운트(좋아요):{data?.fetchBoard.likeCount}</div>
            <button onClick={onClickLike}>좋아요 올리기!</button>
        </>
    );
}
