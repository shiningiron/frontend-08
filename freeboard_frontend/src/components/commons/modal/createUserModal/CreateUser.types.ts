import { ChangeEvent } from "react";

export interface ICreateUserUIProps {
  isModalVisible: boolean;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  emailCheck: boolean;
  passwordCheck: boolean;
  isActive: boolean;
}

export interface ICreateUserModalUIProps {
  isModalVisible: boolean;
  onToggleModal: () => void;
  onClickSubmit: () => void;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  emailCheck: boolean;
  passwordCheck: boolean;
  isActive: boolean;
}
