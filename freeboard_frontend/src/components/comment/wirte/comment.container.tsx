import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import CommentUI from "./comment.presenter";
import { CREATE_USEDITEM_QUESTION } from "./comment.queries";
import { resetCaches, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USEDITEM_QUESTIONS } from "../commentList/cmtList.queries";
import { useRecoilState } from "recoil";
import { cmtIdState } from "../../../commons/store";
import { useEffect } from "react";

const schema = yup.object({
  contents: yup.string().required("댓글을 입력해주세요"),
});
export default function CommentContainer() {
  const router = useRouter();
  const [cmtId, setCmtId] = useRecoilState(cmtIdState);
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);

  const {
    register,
    handleSubmit,
    // reset,
    formState,
    // formState: { isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset({ comment: "" });
  //   }
  // }, [formState, reset]);

  const onClickSubmit = async (data) => {
    try {
      const result = await createUseditemQuestion({
        variables: {
          useditemId: router.query.useditemId,
          createUseditemQuestionInput: {
            contents: data.contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      setCmtId(result.data.createUseditemQuestion._id);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <CommentUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
    />
  );
}
