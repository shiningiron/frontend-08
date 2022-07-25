import * as Cmt from "../styles/Comment.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { ICreateCommentUIProps } from "./CreateComment.types";
import CommentModal from "../../../commons/createCommentModal/CommentModal.container";

export default function CommentUI(props: ICreateCommentUIProps) {
  return (
    <Cmt.Box>
      <Cmt.WriterInfoBox>
        <Cmt.Thumb>
          <Cmt.ImgIcon src="/purple.jpeg" />
        </Cmt.Thumb>
        <Cmt.ProfileBox>
          {/* <Cmt.NonMemberWriter placeholder="작성자" />
          <Cmt.NonMemberPassword placeholder="password" /> */}
          <Cmt.ProfileCreatedTime>
            {getDate(props.data?.fetchBoard?.createdAt)}
          </Cmt.ProfileCreatedTime>
        </Cmt.ProfileBox>
      </Cmt.WriterInfoBox>
      <Cmt.WriteBox>
        <Cmt.TextArea
          onChange={props.onChangeComments}
          placeholder="댓글을 입력해주세요"
          value={props.contents}
          // defaultValue={""}
        />
        {/* <Cmt.submitButton onClick={props.replyButton}>등록</Cmt.submitButton> */}
      </Cmt.WriteBox>
      <CommentModal
        contents={props.contents}
        onChangeWriter={props.onChangeWriter}
        onChangePassword={props.onChangePassword}
        replyButton={props.replyButton}
      />
    </Cmt.Box>
  );
}
