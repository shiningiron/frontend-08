import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICreateCommentUIProps {
  replyButton: () => void;
  onChangeComments: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
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
