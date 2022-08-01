import { LikeOutlined } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidationFile } from "../../../src/commons/libraries/fileValidation";
import {
    IMutation,
    IMutationCreateBoardArgs,
    IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            contents
            title
        }
    }
`;

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
        }
    }
`;

export default function ImageUploadPage() {
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [imageUrl, setImageUrl] = useState("");

    const [createBoard] = useMutation<
        Pick<IMutation, "createBoard">,
        IMutationCreateBoardArgs
    >(CREATE_BOARD);

    const [uploadFile] = useMutation<
        Pick<IMutation, "uploadFile">,
        IMutationUploadFileArgs
    >(UPLOAD_FILE);
    const fileRef = useRef<HTMLInputElement>(null);

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
    };
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value);
    };
    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        console.log(file);

        const isValid = checkValidationFile(file);
        if (!isValid) return;

        try {
            const result = await uploadFile({ variables: { file } });
            console.log(result.data?.uploadFile.url);
            setImageUrl(result.data?.uploadFile.url || "");
        } catch (error) {
            Modal.error({ content: "에러발생!!!" });
        }
    };

    const onClickSubmitButton = async () => {
        if (writer !== "" && password !== "" && title !== "" && contents !== "")
            try {
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer,
                            password,
                            title,
                            contents,
                            images: [imageUrl],
                        },
                    },
                });
                console.log(result.data);
            } catch (error) {
                console.log(error.message);
            }
    };

    const onClickImage = () => {
        // 파일태그(aaa 변수)를 클릭해줘!
        fileRef.current?.click();
    };

    return (
        <>
            작성자: <input type="text" onChange={onChangeWriter} />
            비밀번호: <input type="password" onChange={onChangePassword} />
            제목: <input type="text" onChange={onChangeTitle} />
            내용: <input type="text" onChange={onChangeContents} />
            <LikeOutlined
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "gray",
                }}
                onClick={onClickImage}
            />
            <input
                type="file"
                onChange={onChangeFile}
                style={{ display: "none" }}
                ref={fileRef}
                accept="image/jpeg"
            />
            <button onClick={onClickSubmitButton}> 저장하기 </button>
            ;
            <img src={`https://storage.googleapis.com/${imageUrl}`} />
        </>
    );
}
