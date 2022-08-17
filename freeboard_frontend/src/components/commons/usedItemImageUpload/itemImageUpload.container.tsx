import { ChangeEvent, useRef } from "react";
import { useRecoilState } from "recoil";
import { checkValidationFile } from "../../../commons/libraries/validationFile";
import { filesState, imageUrlsState } from "../../../commons/store";
import ItemImageUploadUI from "./itemImageUpload.presenter";

export default function ItemImageUploadContainer() {
  const [imageUrls, setImageUrls] = useRecoilState(imageUrlsState);
  const [files, setFiles] = useRecoilState(filesState);

  const fileRef = useRef<HTMLInputElement>(null);
  const onClickImage = () => {
    fileRef.current?.click();
  };

  // url 생성
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
    <ItemImageUploadUI
      onChangeFile={onChangeFile}
      onClickImage={onClickImage}
      fileRef={fileRef}
    />
  );
}
