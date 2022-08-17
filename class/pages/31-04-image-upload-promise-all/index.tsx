import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { checkValidationFile } from "../../src/commons/libraries/fileValidation";

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

export default function ImageUploadPreviewPage() {
    const [imageUrls, setImageUrls] = useState(["", "", ""]);
    const [files, setFiles] = useState<File[]>([]);
    const [uploadFile] = useMutation(UPLOAD_FILE);
    const [callGraphql] = useMutation(CREATE_BOARD);

    const onClickGraphqlApi = async () => {
        // // 1. Promise.all을 안 썻을 때
        // const resultFile0 = await uploadFile({ variables: { file: files[0] } });
        // const resultFile1 = await uploadFile({ variables: { file: files[1] } });
        // const resultFile2 = await uploadFile({ variables: { file: files[2] } });
        // const url0 = resultFile0.data.uploadFile.url;
        // const url1 = resultFile1.data.uploadFile.url;
        // const url2 = resultFile2.data.uploadFile.url;
        // const resultUrls = [url0, url1, url2];

        // // 2. Promise.all을 썼을 때
        // const results = await Promise.all([
        //     uploadFile({ variables: { file: files[0] } }),
        //     uploadFile({ variables: { file: files[1] } }),
        //     uploadFile({ variables: { file: files[2] } }),
        // ]);
        // console.log(results); // const result = [resultFile0, resultFile1, resultFile2]

        // const resultUrls = results.map((el) =>
        //     el ? el.data.uploadFile.url : ""
        // ); // const resultUrls = [url0, url1, url2]

        // 3. Promise.all을 썻을 때(리펙토링)

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
                    writer: "맹구",
                    password: "1234",
                    title: "맷돌",
                    contents: "빙글빙글 돌아가는 맷돌",
                    images: resultUrls,
                },
            },
        });
        console.log(result);
    };

    // 1. 진짜 url 생성
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

            // 2. 가짜 url 생성
            // const result = URL.createObjectURL(file);
            // console.log(result);
            // setImageUrl(result);
        };

    return (
        <>
            <input type="file" onChange={onChangeFile(0)} />
            <input type="file" onChange={onChangeFile(1)} />
            <input type="file" onChange={onChangeFile(2)} />
            <img src={imageUrls[0]} />
            <img src={imageUrls[1]} />
            <img src={imageUrls[2]} />
            <button onClick={onClickGraphqlApi}>작성</button>
        </>
    );
}
