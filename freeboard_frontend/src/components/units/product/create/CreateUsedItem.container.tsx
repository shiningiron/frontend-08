import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputVc from "../../../commons/inputs/vc";
import ButtonVc from "../../../commons/buttons/vc";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";

const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      contents
      price
    }
  }
`;

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

export default function CreateUsedItemContainer() {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickButton = async (data) => {
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
          },
        },
      });
      console.log(result);
      router.push("/freeboard");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickButton)}>
      <InputVc type="text" register={register("name")} placeholder="상품명" />
      <div>{formState.errors.name?.message}</div>
      <InputVc type="text" register={register("remarks")} placeholder="설명" />
      <div>{formState.errors.remarks?.message}</div>
      <InputVc type="text" register={register("contents")} placeholder="내용" />
      <div>{formState.errors.contents?.message}</div>
      <InputVc type="text" register={register("price")} placeholder="가격" />
      <div>{formState.errors.price?.message}</div>
      <ButtonVc title="상품등록" isActive={formState.isValid} />
    </form>
  );
}
