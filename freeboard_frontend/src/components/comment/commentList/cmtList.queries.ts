import { gql } from "@apollo/client";

export const FETCH_USEDITEM_QUESTIONS = gql`
    query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
        fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
            _id
            contents
            createdAt
            user {
                _id
                name
                picture
            }
        }
    }
`;
export const UPDATE_USEDITEM_QUESTIONS = gql`
    mutation updateUseditemQuestion(
        $useditemQuestionId: ID!
        $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    ) {
        updateUseditemQuestion(
            updateUseditemQuestionInput: $updateUseditemQuestionInput
            useditemQuestionId: $useditemQuestionId
        ) {
            _id
            contents
            user {
                _id
                name
                picture
            }
            createdAt
            updatedAt
        }
    }
`;
export const DELETE_USEDITEM_QUESTION = gql`
    mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
        deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
    }
`;
