import { IQuery } from "../../../../commons/types/generated/types";

export interface IDetailBoardUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  boardAddress: string;
  onClickMoveToEdit: () => void;
  onClickLocation: () => void;
  onClickMoveToList: () => void;
  onClickDelete: () => void;
  onClickLike: () => void;
  onClickDisLike: () => void;
}
