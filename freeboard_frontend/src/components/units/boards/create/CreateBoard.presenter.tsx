import * as B from '../../../../../styles/board.styles'
import { ICreateBoardUIProps } from './CreateBoard.types'


export default function CreateBoardUI (props: ICreateBoardUIProps) {

    return (

        <B.Wrapper>
        <B.Title>{props.isEdit ? "게시글 수정" : "게시글 등록" }</B.Title>
        <B.WriterWrapper>
          <B.InputWrapper>
            <B.Label>작성자</B.Label>
            <B.Writer type="text" placeholder="이름을 적어주세요." onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer||""} readOnly={!!props.data?.fetchBoard.writer}/>
            <B.ErrorMessage>{props.writerError}</B.ErrorMessage>
          </B.InputWrapper>
          <B.InputWrapper>
            <B.Label>비밀번호</B.Label>
            <B.Password type="password" placeholder="비밀번호를 작성해주세요." onChange={props.onChangePassword}/>
            <B.ErrorMessage>{props.passwordError}</B.ErrorMessage>
          </B.InputWrapper>
        </B.WriterWrapper>
        <B.InputWrapper>
          <B.Label>제목</B.Label>
          <B.Subject type="text" placeholder="제목을 작성해주세요." onChange={props.onChangeSubject} defaultValue={props.data?.fetchBoard.title||""}/>
          <B.ErrorMessage>{props.subjectError}</B.ErrorMessage>
        </B.InputWrapper>
        <B.InputWrapper>
          <B.Label>내용</B.Label>
          <B.Contents placeholder="내용을 작성해주세요." onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents||""}/>
          <B.ErrorMessage>{props.contentsError}</B.ErrorMessage>
        </B.InputWrapper>
        <B.InputWrapper>
          <B.Label>주소</B.Label>
          <B.ZipcodeWrapper>
            <B.Zipcode placeholder="07250" />
            <B.SearchButton>우편번호 검색</B.SearchButton>
          </B.ZipcodeWrapper>
          <B.Address />
          <B.Address />
        </B.InputWrapper>
        <B.InputWrapper>
          <B.Label>유튜브</B.Label>
          <B.Youtube placeholder="링크를 복사해주세요." />
        </B.InputWrapper>
        <B.ImageWrapper>
          <B.Label>사진첨부</B.Label>
          <B.UploadButton>+</B.UploadButton>
          <B.UploadButton>+</B.UploadButton>
          <B.UploadButton>+</B.UploadButton>
        </B.ImageWrapper>
        <B.OptionWrapper>
          <B.Label>메인설정</B.Label>
          <B.RadioButton type="radio" id="youtube" name="radio-button" />
          <B.RadioLabel htmlFor="youtube">유튜브</B.RadioLabel>
          <B.RadioButton type="radio" id="image" name="radio-button" />
          <B.RadioLabel htmlFor="image">사진</B.RadioLabel>
        </B.OptionWrapper>
        <B.ButtonWrapper>
          <B.SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmitButton }>
            {props.isEdit ? "수정하기" : "등록하기" }
          </B.SubmitButton>
        </B.ButtonWrapper>
      </B.Wrapper>

    )

}