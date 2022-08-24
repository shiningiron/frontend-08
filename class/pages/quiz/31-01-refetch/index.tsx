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
        variables: { boardId: "62fd3a4703562900296b2e47" },
    });

    const [likeBoard] = useMutation(LIKE_BOARD);

    const onClickLike = () => {
        likeBoard({
            variables: { boardId: "62fd3a4703562900296b2e47" },
            refetchQueries: [
                {
                    query: FETCH_BOARD,
                    variables: { boardId: "62fd3a4703562900296b2e47" },
                },
            ],

            update(cache, { data }) {
                cache.writeQuery({
                    query: FETCH_BOARD,
                    variables: { boardId: "62fd3a4703562900296b2e47" },
                    data: {
                        fetchBoard: {
                            _id: "62fd3a4703562900296b2e47",
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
            <button onClick={onClickLike}>좋아요-refetch</button>
        </>
    );
}
