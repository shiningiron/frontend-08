import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICreateBoardUIProps {
  onClickSubmitButton: () => void;
  onClickUpdate: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSubject: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeImageUrls: (imageUrl: string, index: number) => void;
  onCompletePostcode: (postData: any) => void;
  onToggleModal: () => void;
  isModalVisible: boolean;
  writerError: string;
  passwordError: string;
  subjectError: string;
  contentsError: string;
  isEdit: boolean;
  // addressDetail: string;
  address: string;
  zipcode: string;
  imageUrls: string[];
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IMyVariables {
  updateBoardInput: {
    title: string;
    contents: string;
    youtubeUrl: string;
    images?: string[];
  };
}

export interface ICreateBoardProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  postData: any;
  address: string;
  zipcode: string;
  boardAddress: string;
}
