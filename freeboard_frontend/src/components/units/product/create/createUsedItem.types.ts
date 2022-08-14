import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICreateUsedItemContainerProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}

export interface ICreateUsedItemUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onChangeContents: (value: string) => void;
  onClickButton: (data: any) => Promise<void>;
  onClickUpdate: (data: any) => Promise<void>;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}
