import { gql } from "@apollo/client";

export const DELETE_BOARD = gql`
  mutation ($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
