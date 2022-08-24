import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import CreateUsedItemUI from "./createUsedItem.presenter";
import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./createUsedItem.queries";
import { ICreateUsedItemContainerProps } from "./createUsedItem.types";
import {
  filesState,
  imageUrlsState,
  resultImagesState,
} from "../../../../commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

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
  const [resultImages, setResultImages] = useRecoilState(resultImagesState);
  const [files] = useRecoilState(filesState);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
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
    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );

    const resultUrls = results.map((el) => (el ? el.data.uploadFile.url : ""));
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            images: resultUrls,
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
    const results = await Promise.all(
      // files - [파일0, 파일1, 파일2]
      files.map((el) => el && uploadFile({ variables: { file: el } }))

      // files.map - [uploadFile({variables:{file: 파일0}}), uploadFile({variables:{file: 파일1}}), uploadFile({variables:{file: 파일2}})]
    );
    console.log(results); // const result = [resultFile0, resultFile1, resultFile2]
    const resultUrls = results.map((el) => (el ? el.data.uploadFile.url : "")); // const resultUrls = [url0, url1, url2]
    setResultImages(resultUrls);
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,
          updateUseditemInput: {
            ...data,
            images: resultUrls,
          },
        },
      });
      console.log(result);
      router.push(`/usedItem/detail/${result.data.updateUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  // useEffect(() => {
  //   if (props.data?.fetchUseditem.images?.length) {
  //     setImageUrls([...props.data?.fetchUseditem.images]);
  //   }
  // }, [props.data]);

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
