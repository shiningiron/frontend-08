import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICreateCommentUIProps {
  replyButton: () => void;
  onChangeComments: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeRating: () => void;
  setRating: any;
  contents: string;
  // rating: number;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface ICommentVariables {
  boardId: string;
  createBoardCommentInput: {
    writer: string;
    password: string;
    contents: string;
    rating: number;
  };
}
