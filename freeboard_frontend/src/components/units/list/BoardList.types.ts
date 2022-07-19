import React from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToBoard: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClickNewBoard: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
