import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GiLetterBomb } from "react-icons/gi";
import useOnChangeInputs from "../../../src/components/commons/hooks/useOnChange";

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
        deleteBoard(boardId: $boardId)
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
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const BoardList = styled.ul`
    display: flex;
    flex-direction: column;
`;
const List = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 3em;
    border: 1px solid #c305e0;
    border-radius: 50px;
    margin: 5px;
    background-color: rgba(0, 0, 0, 0.1);
`;
const Input = styled.input`
    border: 1px solid #c305e0;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 2em;
    padding: 5px;
    color: #fff;
    &:focus {
        background-color: none;
        border: 2px solid #c305e0;

        outline: none;
    }
`;
const Item = styled.div`
    width: 10em;
    padding: 10px;
    color: #fff;
`;
const DeleteBtn = styled(IoIosCloseCircleOutline)`
    width: 1em;
    height: 1em;
    margin-left: 1em;
    margin-right: 1em;
    color: rgba(255, 255, 255, 0.9);
`;
const Create = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 4em;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    border: 1px solid #999;

    /* height: 10em; */
`;
const Header = styled.h1`
    color: #fff;
    font-size: 2em;
    margin-bottom: 20px;
`;
const SubmitBtn = styled(GiLetterBomb)`
    width: 2em;
    height: 2em;
    color: rgba(255, 255, 255, 0.8);
    &:hover {
        color: #fff;
    }
    &:active {
        color: #6400ff;
    }
`;
export default function ApolloCacheStatePage() {
    const { data } = useQuery(FETCH_BOARDS);
    const [deleteBoard] = useMutation(DELETE_BOARD);
    const [createBoard] = useMutation(CREATE_BOARD);

    const { inputs, onChangeInputs } = useOnChangeInputs();

    const onClickDelete = (boardId: string) => () => {
        deleteBoard({
            variables: { boardId },
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
            // refetchQueries: [{ query: FETCH_BOARDS }],
        });
    };

    const onClickCreate = () => {
        createBoard({
            variables: {
                createBoardInput: {
                    ...inputs,
                },
            },
            update(cache, { data }) {
                cache.modify({
                    fields: {
                        fetchBoards: (prev) => {
                            return [data.createBoard, ...prev];
                        },
                    },
                });
            },

            // refetchQueries: [{ query: FETCH_BOARDS }],
        });
    };
    return (
        <Wrapper>
            <BoardList>
                {data?.fetchBoards.map((el) => (
                    <List key={el._id}>
                        <Item>{el.writer}</Item>
                        <Item className="title">{el.title}</Item>
                        <Item>{el.contents}</Item>
                        <DeleteBtn onClick={onClickDelete(el._id)} />
                    </List>
                ))}
            </BoardList>
            <Create>
                <Header>게시글 작성</Header>
                <Input
                    id="writer"
                    type="text"
                    placeholder="작성자"
                    onChange={onChangeInputs}
                />
                <Input
                    id="password"
                    type="password"
                    placeholder="비밀번호"
                    onChange={onChangeInputs}
                />
                <Input
                    id="title"
                    type="text"
                    placeholder="제목"
                    onChange={onChangeInputs}
                />
                <Input
                    id="contents"
                    type="text"
                    placeholder="내용"
                    onChange={onChangeInputs}
                />
                <SubmitBtn onClick={onClickCreate} />
            </Create>
        </Wrapper>
    );
}
