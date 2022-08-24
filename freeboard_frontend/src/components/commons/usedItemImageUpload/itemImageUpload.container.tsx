import { ChangeEvent, useRef } from "react";
import { useRecoilState } from "recoil";
import { checkValidationFile } from "../../../commons/libraries/validationFile";
import {
  fileCheckState,
  filesState,
  imageUrlsState,
} from "../../../commons/store";
import ItemImageUploadUI from "./itemImageUpload.presenter";
import { IItemImageUploadContainerProps } from "./itemImageUpload.types";

export default function ItemImageUploadContainer(
  props: IItemImageUploadContainerProps
) {
  const [imageUrls, setImageUrls] = useRecoilState(imageUrlsState);
  const [files, setFiles] = useRecoilState(filesState);

  const fileRef = useRef<HTMLInputElement>(null);
  const onClickImage = (index: number) => () => {
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
          console.log("tempUrls", tempUrls);
          tempUrls[index] = data.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          console.log("tempFiles", tempFiles);
          tempFiles[index] = file;
          setFiles(tempFiles);
          // console.log(files, files[props.index]);
        }
      };
    };

  return (
    <ItemImageUploadUI
      onChangeFile={onChangeFile}
      onClickImage={onClickImage}
      fileRef={fileRef}
      index={props.index}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
