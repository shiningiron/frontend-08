import { gql } from "@apollo/client";

export const UPDATE_COMMENT = gql`
  mutation (
    $boardCommentId: ID!
    $password: String
    $updateBoardCommentInput: UpdateBoardCommentInput!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;
