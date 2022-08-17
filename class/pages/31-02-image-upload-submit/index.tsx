import { SettingFilled } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { checkValidationFile } from "../../src/commons/libraries/fileValidation";

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
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

export default function ImageUploadPreviewPage() {
    const [imageUrl, setImageUrl] = useState("");
    const [file, setFile] = useState<File>();
    const [uploadFile] = useMutation(UPLOAD_FILE);
    const [callGraphql] = useMutation(CREATE_BOARD);

    const onClickGraphqlApi = async () => {
        const resultFile = uploadFile({ variables: { file } });
        const url = (await resultFile).data.uploadFile.url;

        // const result = await axios.get("https://koreanjson.com/posts/1"); // rest-api 방식
        const result = await callGraphql({
            variables: {
                createBoardInput: {
                    writer: "맹구",
                    password: "1234",
                    title: "맷돌",
                    contents: "빙글빙글 돌아가는 맷돌",
                    images: [url],
                },
            },
        });
        console.log(result);
    };

    // 1. 진짜 url 생성
    const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event?.target.files?.[0];
        if (!file) return;
        const isValid = checkValidationFile(file);
        if (!isValid) return;
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (data) => {
            if (typeof data.target?.result === "string") {
                console.log(data.target?.result);
                setImageUrl(data.target?.result);
                setFile(file);
            }
        };

        // 2. 가짜 url 생성
        const result = URL.createObjectURL(file);
        console.log(result);
        // setImageUrl(result);
    };

    return (
        <>
            <input type="file" onChange={onChangeFile} />
            <img src={imageUrl} />
            <button onClick={onClickGraphqlApi}>작성</button>
        </>
    );
}
