import { useRecoilState } from "recoil";
import { imageUrlsState } from "../../../commons/store";
import * as U from "../../../commons/styles/usedItem.styles";
import { IItemImageUploadUIProps } from "./itemImageUpload.types";

export default function ItemImageUploadUI(props: IItemImageUploadUIProps) {
  const [imageUrls, setImageUrls] = useRecoilState(imageUrlsState);

  return (
    <U.UploadWrapper>
      <input
        style={{ display: "none" }}
        type="file"
        id={`${props.index}`}
        ref={props.fileRef}
        onChange={props.onChangeFile(props.index)}
      />
      {/* <input type="file" ref={props.fileRef} onChange={props.onChangeFile(1)} />
      <input type="file" ref={props.fileRef} onChange={props.onChangeFile(2)} /> */}

      {imageUrls[props.index] ? (
        <>
          <U.UploadPreview
            src={imageUrls[props.index]}
            onClick={props.onClickImage(props.index)}
          />
          {/* <U.UploadPreview src={imageUrls[1]} />
          <U.UploadPreview src={imageUrls[2]} /> */}
        </>
      ) : (
        <>
          <U.UploadButton
            type="button"
            onClick={props.onClickImage(props.index)}
          />
          {/* <U.UploadButton onClick={props.onClickImage} />
          <U.UploadButton onClick={props.onClickImage} /> */}
        </>
      )}
    </U.UploadWrapper>
  );
}
