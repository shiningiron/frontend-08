import { IQuery } from "../../../../commons/types/generated/types";

export interface IFetchCommentUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onFetchMore: () => void;
}
