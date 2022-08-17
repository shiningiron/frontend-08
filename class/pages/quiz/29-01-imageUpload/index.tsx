import { gql, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { checkValidationFile } from "../../../src/commons/libraries/fileValidation";

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            title
            writer
            contents
            images
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

const schema = yup.object({
    writer: yup
        .string()
        .max(5, "작성자는 5글자 이내 문자열입니다.")
        .required("작성자를 입력해주세요"),
    password: yup.string().required("비밀번호를 입력해주세요"),
    title: yup
        .string()
        .max(100, "제목은 100자 이내 문자열입니다.")
        .required("제목을 입력해주세요"),
    contents: yup
        .string()
        .max(1000, "내용은 1000자 이내 문자열입니다.")
        .required("내용을 입력해주세요"),
});

export default function ImageUploadPreviewPage() {
    const [imageUrls, setImageUrls] = useState(["", "", ""]);
    const [files, setFiles] = useState<File[]>([]);
    const [uploadFile] = useMutation(UPLOAD_FILE);
    const [callGraphql] = useMutation(CREATE_BOARD);

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });
    const onClickButton = async (data) => {
        const results = await Promise.all(
            // files - [파일0, 파일1, 파일2]
            files.map((el) => el && uploadFile({ variables: { file: el } }))

            // files.map - [uploadFile({variables:{file: 파일0}}), uploadFile({variables:{file: 파일1}}), uploadFile({variables:{file: 파일2}})]
        );
        console.log(results); // const result = [resultFile0, resultFile1, resultFile2]
        const resultUrls = results.map((el) =>
            el ? el.data.uploadFile.url : ""
        ); // const resultUrls = [url0, url1, url2]

        // const result = await axios.get("https://koreanjson.com/posts/1"); // rest-api 방식
        const result = await callGraphql({
            variables: {
                createBoardInput: {
                    ...data,
                    images: resultUrls,
                },
            },
        });
        console.log(result);
    };

    const onChangeFile =
        (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
            const file = event?.target.files?.[0];
            if (!file) return;
            const isValid = checkValidationFile(file);
            if (!isValid) return;
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = (data) => {
                if (typeof data.target?.result === "string") {
                    console.log(data.target?.result);

                    const tempUrls = [...imageUrls];
                    tempUrls[index] = data.target?.result;
                    setImageUrls(tempUrls);

                    const tempFiles = [...files];
                    tempFiles[index] = file;
                    setFiles(tempFiles);
                }
            };
        };

    return (
        <form onSubmit={handleSubmit(onClickButton)}>
            작성자: <input type="text" {...register("writer")} />
            <div>{formState.errors.writer?.message}</div>
            비밀번호: <input type="password" {...register("password")} />
            <div>{formState.errors.password?.message}</div>
            제목: <input type="text" {...register("title")} />
            <div>{formState.errors.title?.message}</div>
            내용: <input type="text" {...register("contents")} />
            <div>{formState.errors.contents?.message}</div>
            <input type="file" onChange={onChangeFile(0)} />
            <input type="file" onChange={onChangeFile(1)} />
            <input type="file" onChange={onChangeFile(2)} />
            <img
                src={imageUrls[0]}
                style={{
                    width: "30px",
                    height: "30px",
                }}
            />
            <img
                src={imageUrls[1]}
                style={{
                    width: "30px",
                    height: "30px",
                }}
            />
            <img
                src={imageUrls[2]}
                style={{
                    width: "30px",
                    height: "30px",
                }}
            />
            <button
                style={{
                    backgroundColor: formState.isValid ? "yellow" : "",
                }}
            >
                등록하기
            </button>
        </form>
    );
}
