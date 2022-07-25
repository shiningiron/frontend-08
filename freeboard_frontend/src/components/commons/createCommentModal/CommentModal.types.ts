import { ChangeEvent } from "react";

export interface ICommentModalProps {
  replyButton: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  // setWriter: string;
  // setPassword: string;
  contents: string;
}

export interface ICommentModalUIProps {
  onToggleModal: () => void;
  submitOk: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  isModalVisible: boolean;
  // setWriter: string;
  // setPassword: string;
}
