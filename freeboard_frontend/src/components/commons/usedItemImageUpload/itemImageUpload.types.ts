import { ChangeEvent, RefObject } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IItemImageUploadContainerProps {
  index: number;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}

export interface IItemImageUploadUIProps {
  index: number;
  // el: string;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
  onChangeFile: (
    index: number
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  onClickImage: (index: number) => () => void;
  fileRef: RefObject<HTMLInputElement>;
}
