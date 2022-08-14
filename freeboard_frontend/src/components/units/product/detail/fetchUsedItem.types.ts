import { IQuery } from "../../../../commons/types/generated/types";

export interface IFetchUsedItemUIProps {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  onClickDelete: () => void;
  onClickMoveToEdit: () => void;
  onClickMoveToList: () => void;
}
