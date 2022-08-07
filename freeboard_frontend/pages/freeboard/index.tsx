import { withAuth } from "../../src/components/commons/hocs/withAuth";
import BoardListContainer from "../../src/components/units/list/BoardList.container";

function BoardListPage() {
  return <BoardListContainer />;
}
export default withAuth(BoardListPage);
