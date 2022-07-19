import { useQuery, gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { FETCH_COMMENT } from "./FetchComment.queries"
import FetchCommentUI from "./FetchComment.presenter"
import React from "react"
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types"



const DELETE_COMMENT = gql`
    mutation deleteBoardComment($password:String, $boardCommentId:ID!){
  deleteBoardComment(password:$password ,boardCommentId: $boardCommentId)
}

`

export default function FetchCommentsContainer () {
    const router = useRouter()
    const [deleteBoardComment] = useMutation <Pick<IMutation,'deleteBoardComment'>,IMutationDeleteBoardCommentArgs>(DELETE_COMMENT)
 
   
    const { data } = useQuery<Pick<IQuery,"fetchBoardComments">,IQueryFetchBoardCommentsArgs>(FETCH_COMMENT,{
        variables:{ boardId: String(router.query.newBoardId) }
    })
    
    console.log(data)
    const commentDeleteButton = async(event: React.MouseEvent<HTMLImageElement>) => {
        if(!(event.target instanceof HTMLImageElement)) return
        const myPassword = prompt("비밀번호를 입력해주세요")
        try{
            await deleteBoardComment({
                variables: {
                    password: myPassword,
                    boardCommentId: event.currentTarget.id
                },
                refetchQueries: [{query: FETCH_COMMENT, variables:{boardId: router.query.newBoardId}}]
            
            })
        }catch(error){
            console.log(error)
            // console.log(event.currentTarget.id)
            alert(error.message)
           
            
        }
    }
    
    return <FetchCommentUI
        data = {data}
        commentDeleteButton = {commentDeleteButton}
    />

}