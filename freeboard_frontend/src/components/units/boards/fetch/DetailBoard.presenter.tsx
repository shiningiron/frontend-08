import * as B from '../styles/board.styles'
import {AiOutlineLink} from "react-icons/ai"
import {VscLocation} from "react-icons/vsc"
import { IDetailBoardUIProps } from './DetailBoard.types'

export default function DetailBoardUI (props: IDetailBoardUIProps) {

    return (

        <B.Wrapper>
            <B.HeaderBox>
                <B.WriterInfoBox>
                    <B.Thumb>
                        <B.ImgIcon src="/pizza.png"/>
                    </B.Thumb>
                    <B.ProfileBox>
                       <B.ProfileWriter>
                            {props.data?.fetchBoard?.writer}
                       </B.ProfileWriter>
                       <B.ProfileCreatedTime>
                          DATE: {props.data?.fetchBoard?.createdAt}
                       </B.ProfileCreatedTime>
                    </B.ProfileBox>
                </B.WriterInfoBox>
                <B.HeaderTool>
                    <B.LinkTool>
                        <AiOutlineLink size={40}/>
                    </B.LinkTool>
                    <B.LocationTool>
                        <VscLocation size={40}/>
                    </B.LocationTool>
                </B.HeaderTool>
            </B.HeaderBox>
            <B.ContentsBox>
                <B.ContentsTitle>
                    <B.Title>
                        {props.data?.fetchBoard?.title}
                    </B.Title>
                </B.ContentsTitle>
                <B.ContentsImgBox>
                    <B.ContentsImg src="/pizza.png"/>
                </B.ContentsImgBox>
                <B.FetchContents>
                    <B.DetailContents>
                        {props.data?.fetchBoard?.contents}
                    </B.DetailContents>
                </B.FetchContents>
            </B.ContentsBox>
            <B.SubmitButton onClick={props.onClickMoveToEdit}>수정하기</B.SubmitButton>
        </B.Wrapper>

    )

}