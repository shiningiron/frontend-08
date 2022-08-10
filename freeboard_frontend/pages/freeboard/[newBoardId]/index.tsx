import DetailBoardContainer from "../../../src/components/units/boards/fetch/detailBoard.container";
import CommentContainer from "../../../src/components/units/comments/create/createComment.container";
import FetchCommentsContainer from "../../../src/components/units/comments/fetch/fetchComment.container";

export default function DetailPage() {
  return (
    <>
      <DetailBoardContainer />
      <CommentContainer />
      <FetchCommentsContainer />
    </>
  );
}
