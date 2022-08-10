import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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

export default function WebEditorPage() {
    const router = useRouter();
    const [createBoard] = useMutation(CREATE_BOARD);

    const { register, handleSubmit, setValue, trigger } = useForm({
        mode: "onChange",
    });
    const onChangeContents = (value: string) => {
        console.log(value);

        setValue("contents", value === "<p><br></p>" ? "" : value);

        trigger("contents");
    };

    const onClickCreate = async (data) => {
        const result = await createBoard({
            variables: {
                createBoardInput: {
                    writer: data.writer,
                    password: data.password,
                    title: data.title,
                    contents: data.contents,
                },
            },
        });
        router.push(`/quiz06/editor/detail/${result.data.createBoard._id}`);
    };

    return (
        <form onSubmit={handleSubmit(onClickCreate)}>
            작성자: <input type="text" {...register("writer")} />
            <br />
            비밀번호: <input type="password" {...register("password")} />
            <br />
            제목: <input type="text" {...register("title")} />
            <br />
            내용: <ReactQuill onChange={onChangeContents} />
            <br />
            <button>등록하기</button>
        </form>
    );
}
