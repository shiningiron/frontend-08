import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTIONS,
} from "./cmtList.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../commons/types/generated/types";
import * as C from "../../../commons/styles/useditemComment.styles";
import { getDate } from "../../../commons/libraries/utils";
import { useRecoilState } from "recoil";
import { isReplyState } from "../../../commons/store";
import ReCommentContainer from "../../reComment/wirte/reComment.container";
import ReCmtListContainer from "../../reComment/reCommentList/reCmtList.container";

const schema = yup.object({
  contents: yup.string().required("내용을 입력해주세요"),
});
export default function CmtItem(props: any) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setIsReply] = useState(false);
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USEDITEM_QUESTIONS);
  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">
  >(DELETE_USEDITEM_QUESTION);
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
  const onClickEditFin = async (data) => {
    try {
      const result = await updateUseditemQuestion({
        variables: {
          useditemQuestionId: props.el._id,
          updateUseditemQuestionInput: {
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
      console.log(result);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
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
            <C.CancelBtn type="button" onClick={onClickCancel}>
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
            width: "100%",
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
            {isReply ? (
              <C.ReCmtBtn type="reset" onClick={onClickReply}>
                취소
              </C.ReCmtBtn>
            ) : (
              <C.ReCmtBtn
                type="button"
                id={props.el._id}
                onClick={onClickReply}
              >
                답글달기
              </C.ReCmtBtn>
            )}
          </C.ContentBox>
          {isReply ? <ReCommentContainer questionId={props.el._id} /> : <div />}
          <ReCmtListContainer questionId={props.el._id} />
        </div>
      )}
    </>
  );
}
