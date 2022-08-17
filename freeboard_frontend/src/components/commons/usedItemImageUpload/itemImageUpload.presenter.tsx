import { useRecoilState } from "recoil";
import { imageUrlsState } from "../../../commons/store";
import * as U from "../../../commons/styles/usedItem.styles";
import { IItemImageUploadUIProps } from "./itemImageUpload.types";

export default function ItemImageUploadUI(props: IItemImageUploadUIProps) {
  const [imageUrls] = useRecoilState(imageUrlsState);
  return (
    <U.UploadWrapper>
      <input type="file" ref={props.fileRef} onChange={props.onChangeFile(0)} />
      <input type="file" ref={props.fileRef} onChange={props.onChangeFile(1)} />
      <input type="file" ref={props.fileRef} onChange={props.onChangeFile(2)} />

      {imageUrls ? (
        <>
          <U.UploadPreview src={imageUrls[0]} />
          <U.UploadPreview src={imageUrls[1]} />
          <U.UploadPreview src={imageUrls[2]} />
        </>
      ) : (
        <>
          <U.UploadButton onClick={props.onClickImage} />
          <U.UploadButton onClick={props.onClickImage} />
          <U.UploadButton onClick={props.onClickImage} />
        </>
      )}
    </U.UploadWrapper>
  );
}
