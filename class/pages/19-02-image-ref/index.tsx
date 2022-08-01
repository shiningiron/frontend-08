import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import {
    IMutation,
    IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
        }
    }
`;

export default function ImageUploadPage() {
    const [imageUrl, setImageUrl] = useState("");
    const [uploadFile] = useMutation<
        Pick<IMutation, "uploadFile">,
        IMutationUploadFileArgs
    >(UPLOAD_FILE);
    const fileRef = useRef<HTMLInputElement>(null);

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        console.log(file);

        try {
            const result = await uploadFile({ variables: { file } });
            console.log(result.data?.uploadFile.url);
            setImageUrl(result.data?.uploadFile.url || "");
        } catch (error) {
            Modal.error({ content: "에러발생!!!" });
        }
    };

    const onClickImage = () => {
        // 파일태그(aaa 변수)를 클릭해줘!
        fileRef.current?.click();
    };

    return (
        <>
            <div
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "gray",
                }}
                onClick={onClickImage}
            >
                이미지선택
            </div>
            <input
                type="file"
                onChange={onChangeFile}
                style={{ display: "none" }}
                ref={fileRef}
            />
            ;
            <img src={`https://storage.googleapis.com/${imageUrl}`} />
        </>
    );
}
