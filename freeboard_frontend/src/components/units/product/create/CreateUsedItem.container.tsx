import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import CreateUsedItemUI from "./createUsedItem.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./createUsedItem.queries";
import { ICreateUsedItemContainerProps } from "./createUsedItem.types";

const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요"),
  remarks: yup.string().required("상품설명을 입력해주세요"),
  contents: yup.string().required("내용을 입력해주세요"),
  price: yup
    .number()
    .min(1, "")
    .max(10000000, "터무니없는 가격입니다.")
    .typeError("숫자를 입력하셔야합니다.")
    .required("가격을 입력해주세요"),
});

export default function CreateUsedItemContainer(
  props: ICreateUsedItemContainerProps
) {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    console.log(value);

    setValue("contents", value === "<p><br></p>" ? "" : value);

    trigger("contents");
  };

  const onClickButton = async (data) => {
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            // name: data.name,
            // remarks: data.remarks,
            // price: data.price,
            // contents: data.contents,
            ...data,
          },
        },
      });
      console.log(result);
      router.push(`/usedItem/detail/${result.data.createUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async (data) => {
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,
          updateUseditemInput: {
            ...data,
          },
        },
      });
      router.push(`/usedItem/detail/${result.data.updateUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <CreateUsedItemUI
      onClickButton={onClickButton}
      onClickUpdate={onClickUpdate}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
