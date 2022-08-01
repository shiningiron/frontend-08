import * as Cmt from "../styles/Comment.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { ICreateCommentUIProps } from "./CreateComment.types";
import CommentModal from "../../../commons/createCommentModal/CommentModal.container";
import StarRate from "../../../commons/starRate";

export default function CommentUI(props: ICreateCommentUIProps) {
  return (
    <Cmt.Box>
      <Cmt.WriterInfoBox>
        <Cmt.Thumb>
          <Cmt.ImgIcon src="/images/purple.jpeg" />
        </Cmt.Thumb>
        <Cmt.ProfileBox>
          <StarRate setRating={props.setRating} />
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
