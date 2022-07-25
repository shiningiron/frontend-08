import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }
`;

export default function graphqlMutationPage() {
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [createBoard] = useMutation(CREATE_BOARD);

    const onClickGraphqlAPI = async () => {
        const result = await createBoard({
            variables: {
                writer,
                title,
                contents,
            },
        });
        console.log(result);
        console.log(result.data.createBoard.message);
    };

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
    };

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value);
    };

    return (
        <>
            작성자: <input type="text" onChange={onChangeWriter} />
            <br />
            제목: <input type="text" onChange={onChangeTitle} />
            <br />
            내용: <input type="text" onChange={onChangeContents} />
            <br />
            <button onClick={onClickGraphqlAPI}>GRAPHQL-API 요청하기</button>
        </>
    );
}
