import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { UPLOAD_FILE } from "../../units/boards/create/createBoard.queries";
import { checkValidationImage } from "../../../commons/libraries/fileValidation";
import { Modal } from "antd";
import UploadImageUI from "./uploadImageUI";

export default function UploadImageContainer(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  // onClickUpload를 실행하면 fileRef가 click 된다
  const onClickImage = () => {
    fileRef.current?.click();
  };

  // input에 파일이 첨부될 경우 작동하는 함수
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    // 이미지 적합성 체크 (Uploads01.validation.ts에서 함수 import)
    const file = checkValidationImage(event.target.files?.[0]);
    // const file = event.target.files?.[0];
    // if (!file) return;

    try {
      // 첨부된 파일을 구글 스토리지에 업로드 후 url를 반환받는다.
      const result = await uploadFile({ variables: { file } });
      // BoardWrite에서 props로 받아온 onChangeFileUrls 함수에 스토리지에 업로드가 완료된 file의 url을 넘겨준다.
      props.onChangeImageUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <UploadImageUI
      fileRef={fileRef}
      imageUrl={props.imageUrl}
      // defaultFileUrl={props.defaultFileUrl}
      onClickImage={onClickImage}
      onChangeFile={onChangeFile}
    />
  );
}
