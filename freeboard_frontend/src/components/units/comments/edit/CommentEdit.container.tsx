import { getDate } from "../../../../commons/libraries/utils";
import { ChangeEvent, useState } from "react";
import * as Cmt from "../../../../commons/styles/Comment.styles";
import { useMutation } from "@apollo/client";
import { UPDATE_COMMENT } from "./CommentEdit.queries";
import UpdateCommentModal from "../../../commons/updateCommentModal/UpdateCommentModal.container";
import {
  IMutation,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import DeleteCommentModal from "../delete/DeleteCommentModal";
import EditStarRate from "../../../commons/EditstarRate";
// import { FETCH_COMMENT } from "../fetch/FetchComment.queries";
// import { useRouter } from "next/router";

export default function CommentsItem(props: any) {
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  // const [isDelete, setIsDelete] = useState(false);
  //   const router = useRouter();

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event?.target.value);
    console.log(contents);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onClickEdit = () => {
    setIsEdit(true);
  };
  // const onClickDelete = () => {
  //   setIsDelete(true);
  // };
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_COMMENT);
  const onClickEditFin = async () => {
    try {
      const result = await updateBoardComment({
        variables: {
          boardCommentId: props.el._id,
          password,
          updateBoardCommentInput: {
            contents,
            rating,
          },
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_COMMENT,
        //     variables: { boardId: router.query.newBoardId },
        //   },
        // ],
      });
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {isEdit === false && (
        <Cmt.Box key={props.el._id}>
          <Cmt.WriterInfoBox>
            <Cmt.Thumb>
              <Cmt.ImgIcon src="/images/purple.jpeg" />
            </Cmt.Thumb>
            <Cmt.ProfileBox>
              <Cmt.ProfileWriter>{props.el.writer}</Cmt.ProfileWriter>
              <EditStarRate rating={props.el.rating} isEdit={isEdit} />
              <Cmt.ProfileCreatedTime>
                {getDate(props.el.createdAt)}
              </Cmt.ProfileCreatedTime>
            </Cmt.ProfileBox>
          </Cmt.WriterInfoBox>
          <Cmt.CommentContents>{props.el.contents}</Cmt.CommentContents>
          <Cmt.Tools>
            <DeleteCommentModal id={props.el._id} />
            <Cmt.EditTool onClick={onClickEdit} />
          </Cmt.Tools>
        </Cmt.Box>
      )}
      {isEdit === true && (
        <Cmt.Box key={props.el._id}>
          <Cmt.WriterInfoBox>
            <Cmt.Thumb>
              <Cmt.ImgIcon src="/images/purple.jpeg" />
            </Cmt.Thumb>
            <Cmt.ProfileBox>
              <Cmt.ProfileWriter>{props.el.writer}</Cmt.ProfileWriter>
              <EditStarRate isEdit={isEdit} setRating={setRating} />
              <Cmt.ProfileCreatedTime>
                {getDate(props.el.createdAt)}
              </Cmt.ProfileCreatedTime>
            </Cmt.ProfileBox>
          </Cmt.WriterInfoBox>
          <Cmt.TextArea
            onChange={onChangeContents}
            defaultValue={props.el.contents || ""}
          />
          <Cmt.Tools>
            {/* <Cmt.DeleteTool
              id={props.el._id}
              onClick={props.commentDeleteButton}
              src="/free-icon-font-trash.png"
            /> */}
            <UpdateCommentModal
              id={props.el._id}
              setIsEdit={setIsEdit}
              contents={contents}
              password={password}
              onChangePassword={onChangePassword}
              onClickEditFin={onClickEditFin}
            />
          </Cmt.Tools>
        </Cmt.Box>
      )}
    </div>
  );
}
