import { ChangeEvent, RefObject } from "react";

export interface IItemImageUploadUIProps {
  onChangeFile: (
    index: number
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  onClickImage: () => void;
  fileRef: RefObject<HTMLInputElement>;
}
