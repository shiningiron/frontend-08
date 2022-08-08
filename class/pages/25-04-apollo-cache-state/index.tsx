import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

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
const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!) {
        deleteBoard(boardId: $boardId) {
            message
        }
    }
`;
const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            title
            contents
        }
    }
`;
const Row = styled.div`
    width: 25%;
    display: flex;
`;
const Column = styled.div`
    width: 25%;
`;

export default function StaticRoutedBoardPage() {
    const { data } = useQuery(FETCH_BOARDS);
    const [deleteBoard] = useMutation(DELETE_BOARD);
    const [createBoard] = useMutation(CREATE_BOARD);

    const onClickDelete = (boardId: string) => () => {
        deleteBoard({
            variables: { boardId },
            // refetchQueries: [{ query: FETCH_BOARDS }],
            update(cache, { data }) {
                cache.modify({
                    fields: {
                        fetchBoards: (prev, { readField }) => {
                            const deletedId = data.deleteBoard; // 삭제된 ID
                            const filteredPrev = prev.filter(
                                (el) => readField("_id", el) !== deletedId // el._id가 안되므로(_ref 밖에 없음), readField를 사용해서 꺼내오기
                            );
                            return [...filteredPrev];
                        },
                    },
                });
            },
        });
    };

    const onClickCreate = () => {
        createBoard({
            variables: {
                createBoardInput: {
                    writer: "비가주륵주륵주르륵",
                    password: "1234",
                    title: "우르르쾅쾅",
                    contents: "우르르쿠콰코캉",
                },
            },
            // refetchQueries: [{ query: FETCH_BOARDS }],
            update(cache, { data }) {
                cache.modify({
                    fields: {
                        fetchBoards: (prev) => {
                            return [data.createBoard, ...prev];
                        },
                    },
                });
            },
        });
    };

    return (
        <>
            {data?.fetchBoards.map((el) => (
                // <Fragment key={el.number}>
                <Row key={el._id}>
                    <Column>{el._id}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.contents}</Column>
                    <button onClick={onClickDelete(el._id)}>삭제하기</button>
                </Row>
            ))}
            <div onClick={onClickCreate}>등록하기</div>
        </>
    );
}
