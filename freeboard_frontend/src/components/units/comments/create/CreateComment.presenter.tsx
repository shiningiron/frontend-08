import * as Cmt from '../styles/Comment.styles'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {FcLike} from 'react-icons/fc'
import {RiEditLine} from 'react-icons/ri'
import { ICreateCommentUIProps } from './CreateComment.types'

export default function CommentUI (props: ICreateCommentUIProps){

return (

    <Cmt.Box>
        <Cmt.WriterInfoBox>
            <Cmt.Thumb>
                <Cmt.ImgIcon src='/pizza.png'/>
            </Cmt.Thumb>
            <Cmt.ProfileBox>
                <Cmt.ProfileWriter>
                    {props.data?.fetchBoard?.writer}
                </Cmt.ProfileWriter>
                <Cmt.ProfileCreatedTime>
                    {props.data?.fetchBoard?.createdAt}
                </Cmt.ProfileCreatedTime>
            </Cmt.ProfileBox>
        </Cmt.WriterInfoBox>
        <Cmt.WriteBox>
            <Cmt.TextArea onChange={props.onChangeComments} defaultValue={""} >
               
            </Cmt.TextArea>
            <Cmt.NonMemberPassword onChange={props.onChangePassword}/>
            <Cmt.submitButton onClick={props.replyButton}>
                등록
            </Cmt.submitButton>
        </Cmt.WriteBox>
    </Cmt.Box>

)
}