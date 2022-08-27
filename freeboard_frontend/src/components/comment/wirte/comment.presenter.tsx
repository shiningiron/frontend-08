import * as C from "../../../commons/styles/useditemComment.styles";

export default function CommentUI(props: any) {
  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={props.handleSubmit(props.onClickSubmit)}
    >
      <C.Comment
        id="comment"
        type="text"
        {...props.register("contents")}
        defaultValue={""}
      />
      <C.CommentSubmit>작성하기</C.CommentSubmit>
    </form>
  );
}
