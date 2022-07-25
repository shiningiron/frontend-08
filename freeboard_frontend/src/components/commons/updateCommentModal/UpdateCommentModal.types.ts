import { ChangeEvent } from "react";

export interface ICommentModalProps {
  onClickEditFin: () => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  setIsEdit: any;
  // setWriter: string;
  // setPassword: string;
  id: string;
  password: any;
  contents: string;
}

export interface ICommentModalUIProps {
  onToggleModal: () => void;
  submitOk: () => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  isModalVisible: boolean;
  // setWriter: string;
  // setPassword: string;
}
