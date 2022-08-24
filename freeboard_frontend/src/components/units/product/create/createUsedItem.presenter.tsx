import InputVc from "../../../commons/inputs/vc";
import ButtonVc from "../../../commons/buttons/vc";
import { ICreateUsedItemUIProps } from "./createUsedItem.types";
import { QuillEditor } from "../../../../commons/styles/usedItem.styles";
import KakaoMapPage from "../../../commons/kakaoMap";
import ItemImageUploadContainer from "../../../commons/usedItemImageUpload/itemImageUpload.container";
import { useRecoilState } from "recoil";
import { imageUrlsState } from "../../../../commons/store";
import { v4 as uuidv4 } from "uuid";

export default function CreateUsedItemUI(props: ICreateUsedItemUIProps) {
  const [imageUrls] = useRecoilState(imageUrlsState);
  return (
    <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUpdate : props.onClickButton
      )}
    >
      <InputVc
        type="text"
        register={props.register("name")}
        placeholder="상품명"
        defaultValue={props.data?.fetchUseditem.name || ""}
      />
      <div>{props.formState.errors.name?.message}</div>
      <InputVc
        type="text"
        register={props.register("remarks")}
        placeholder="설명"
        defaultValue={props.data?.fetchUseditem.remarks || ""}
      />
      <div>{props.formState.errors.remarks?.message}</div>
      <InputVc
        type="text"
        register={props.register("price")}
        placeholder="가격"
        defaultValue={props.data?.fetchUseditem.price || ""}
      />
      <div>{props.formState.errors.price?.message}</div>
      <ButtonVc
        title={props.isEdit ? "상품수정" : "상품등록"}
        isActive={props.formState.isValid}
      />
      <QuillEditor
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchUseditem.contents || ""}
      />
      <div>{props.formState.errors.contents?.message}</div>
      <KakaoMapPage />
      {imageUrls.map((_, index) => (
        <ItemImageUploadContainer
          key={uuidv4()}
          index={index}
          isEdit={props.isEdit}
          data={props.data}
        />
      ))}
    </form>
  );
}
