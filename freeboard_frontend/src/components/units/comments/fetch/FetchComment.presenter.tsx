import { IFetchCommentUIProps } from "./FetchComment.types";
import CommentsItem from "../edit/CommentEdit.container";

export default function FetchCommentUI(props: IFetchCommentUIProps) {
  console.log(props.data?.fetchBoardComments);
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <CommentsItem
          key={el._id}
          el={el}
          commentDeleteButton={props.commentDeleteButton}
        />
      ))}
    </>
  );
}
