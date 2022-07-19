import * as Cmt from '../styles/Comment.styles'
import {FcLike} from 'react-icons/fc'
import { IFetchCommentUIProps } from './FetchComment.types'



export default function FetchCommentUI (props:IFetchCommentUIProps){

return (
    <>
        {props.data?.fetchBoardComments.map((el) => (
            <Cmt.Box key={el._id}>
                <Cmt.WriterInfoBox>
                    <Cmt.Thumb>
                        <Cmt.ImgIcon src='/pizza.png'/>
                    </Cmt.Thumb>
                    <Cmt.ProfileBox>
                        <Cmt.ProfileWriter>
                            {el.writer}
                        </Cmt.ProfileWriter>
                        <Cmt.ProfileCreatedTime>
                            {el.createdAt}
                        </Cmt.ProfileCreatedTime>
                    </Cmt.ProfileBox>
                </Cmt.WriterInfoBox>
                <Cmt.CommentContents>
                    {el.contents}
                </Cmt.CommentContents>
                <Cmt.Tools>
                    <Cmt.DeleteTool id={el._id} onClick={props.commentDeleteButton} src='/free-icon-font-trash.png'/>
                    <Cmt.LikeTool>
                        <FcLike/>
                    </Cmt.LikeTool>
                    <Cmt.EditTool src='/ic_fluent_signature_regular_icon.png'/>
                </Cmt.Tools>
            </Cmt.Box>

        ))}
    </>
)
}