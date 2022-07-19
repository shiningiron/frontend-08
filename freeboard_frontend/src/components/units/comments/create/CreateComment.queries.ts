import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
    mutation createBoardComment($boardId: ID!, $createBoardCommentInput: CreateBoardCommentInput!){
        createBoardComment(
            boardId: $boardId,
            createBoardCommentInput: $createBoardCommentInput
        ){
             _id
            writer
            contents
  	        rating
            createdAt
            updatedAt
            deletedAt
        }
    }
`