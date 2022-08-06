import { ChangeEvent } from "react";

export interface ICreateUserUIProps {
  onClickSubmit: () => void;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  emailCheck: boolean;
  passwordCheck: boolean;
  isActive: boolean;
}
