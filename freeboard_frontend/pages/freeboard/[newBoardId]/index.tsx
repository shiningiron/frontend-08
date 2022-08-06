import DetailBoardContainer from "../../../src/components/units/boards/fetch/DetailBoard.container";
import CommentContainer from "../../../src/components/units/comments/create/CreateComment.container";
import FetchCommentsContainer from "../../../src/components/units/comments/fetch/FetchComment.container";

export default function DetailPage() {
  return (
    <>
      <DetailBoardContainer />
      <CommentContainer />
      <FetchCommentsContainer />
    </>
  );
}
