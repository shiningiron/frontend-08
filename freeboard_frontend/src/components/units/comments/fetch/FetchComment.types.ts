
import React from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IFetchCommentUIProps {
    data?: Pick<IQuery,"fetchBoardComments">
    commentDeleteButton: (event: React.MouseEvent<HTMLImageElement>) => void
    
}
