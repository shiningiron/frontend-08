import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./reCmtList.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../commons/types/generated/types";
import * as C from "../../../commons/styles/useditemReComment.styles";
import { getDate } from "../../../commons/libraries/utils";
import { useRecoilState } from "recoil";
import { isReplyState } from "../../../commons/store";

const schema = yup.object({
  contents: yup.string().required("내용을 입력해주세요"),
});
export default function reCmtItem(props: any) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setIsReply] = useRecoilState(isReplyState);
  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USEDITEM_QUESTION_ANSWER);
  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">
  >(DELETE_USEDITEM_QUESTION_ANSWER);
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickEdit = () => {
    setIsEdit(true);
  };
  const onClickCancel = () => {
    setIsEdit(false);
  };
  const onClickReply = () => {
    setIsReply((prev) => !prev);
  };
  const onClickEditFin = async (data: any) => {
    try {
      const result = await updateUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.el._id,
          updateUseditemQuestionAnswerInput: {
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
      console.log(result);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.questionId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {isEdit ? (
        <form
          style={{
            display: "flex",
            width: "90%",
            flexDirection: "column",
            marginBottom: "1rem",
          }}
          onSubmit={handleSubmit(onClickEditFin)}
        >
          <C.Comment
            type="text"
            {...register("contents")}
            defaultValue={props.el.contents || ""}
          />
          <C.BtnBox>
            <C.CancelBtn type="reset" onClick={onClickCancel}>
              취소하기
            </C.CancelBtn>
            <C.CommentSubmit onClick={handleSubmit(onClickEditFin)}>
              수정하기
            </C.CommentSubmit>
          </C.BtnBox>
        </form>
      ) : (
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <C.HeaderBox>
            <C.UserBox>
              {props.el.user.picture ? (
                <C.UserThumb
                  src={`https://storage.googleapis.com/${props.el.user.picture}`}
                />
              ) : (
                <C.UserThumb src="/images/pizza.png" />
              )}
              <C.UserNameBox>
                <C.UserName>{props.el.user.name}</C.UserName>
                <C.CmtDate>{getDate(props.el.createdAt)}</C.CmtDate>
              </C.UserNameBox>
            </C.UserBox>
            <C.ToolBox>
              <C.EditBtn onClick={onClickEdit} />
              <C.DelBtn onClick={onClickDelete} />
            </C.ToolBox>
          </C.HeaderBox>
          <C.ContentBox>
            <C.Contents>{props.el.contents}</C.Contents>
          </C.ContentBox>
        </div>
      )}
    </>
  );
}
