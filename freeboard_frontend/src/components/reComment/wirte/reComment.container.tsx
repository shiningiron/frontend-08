import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import CommentUI from "./reComment.presenter";
import { CREATE_USEDITEM_QUESTION_ANSWER } from "./reComment.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "../reCommentList/reCmtList.queries";
import { cmtIdState } from "../../../commons/store";
import { useRecoilState } from "recoil";

const schema = yup.object({
  contents: yup.string().required("댓글을 입력해주세요"),
});
export default function ReCommentContainer(props: any) {
  const router = useRouter();

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data) => {
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.questionId,
          createUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.questionId },
          },
        ],
      });
      // setCmtId(result.data.createUseditemQuestionAnswer._id);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  // console.log("받아온 아이디", cmtId);
  return (
    <CommentUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
    />
  );
}
