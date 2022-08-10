import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ICreateUsedItemUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onChangeContents: (value: string) => void;
  onClickButton: (data: any) => Promise<void>;
}
