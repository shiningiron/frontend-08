import InputVc from "../../../commons/inputs/vc";
import ButtonVc from "../../../commons/buttons/vc";
import { ICreateUsedItemUIProps } from "./createUsedItem.types";
import { QuillEditor } from "../../../../commons/styles/product.styles";

export default function CreateUsedItemUI(props: ICreateUsedItemUIProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickButton)}>
      <InputVc
        type="text"
        register={props.register("name")}
        placeholder="상품명"
      />
      <div>{props.formState.errors.name?.message}</div>
      <InputVc
        type="text"
        register={props.register("remarks")}
        placeholder="설명"
      />
      <div>{props.formState.errors.remarks?.message}</div>
      <InputVc
        type="text"
        register={props.register("price")}
        placeholder="가격"
      />
      <div>{props.formState.errors.price?.message}</div>
      <ButtonVc title="상품등록" isActive={props.formState.isValid} />
      <QuillEditor onChange={props.onChangeContents} />
      <div>{props.formState.errors.contents?.message}</div>
    </form>
  );
}
