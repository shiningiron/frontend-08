import { ChangeEvent, useState } from "react";
import { checkValidationFile } from "../../src/commons/libraries/fileValidation";

export default function ImageUploadPreviewPage() {
    const [imageUrl, setImageUrl] = useState("");

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
        </>
    );
}
