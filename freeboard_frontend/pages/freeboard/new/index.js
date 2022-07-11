import {useState} from 'react'
import {useMutation , gql} from '@apollo/client'
import {useRouter} from 'next/router'
import {
    Address,
    ButtonWrapper,
    Contents,
    ErrorMassage,
    ImageWrapper,
    InputWrapper,
    Label,
    OptionWrapper,
    Password,
    RadioButton,
    RadioLabel,
    SearchButton,
    Subject,
    SubmitButton,
    Title,
    UploadButton,
    Wrapper,
    Writer,
    WriterWrapper,
    Youtube,
    Zipcode,
    ZipcodeWrapper
  } from "../../../styles/boardStyled"

  // $writer: String, $password: String, $title: String!, $contents: String!


  const CREATE_BOARD = gql`
    mutation createBoard ($createBoardInput:CreateBoardInput!){createBoard(createBoardInput:$createBoardInput){
    _id
    contents
    title
    # likeCount
    # dislikeCount
    # createdAt
    # updatedAt
  }
}
  `


  
  export default function BoardWriteUI() {

    const [writer,setWriter] = useState("");
    const [writerError,setWriterError] = useState("");
    const [password,setPassword] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [subject, setSubject] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [contents, setContents] = useState("");
    const [contentsError, setContentsError] = useState("");
    const router = useRouter();
    const [createBoard] = useMutation(CREATE_BOARD)

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
        (event.target.value) === "" ? setWriterError("이름이 비어있습니다. 이름을 적어주세요") : setWriterError("")
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value);
        (event.target.value) === "" ? setPasswordError("비밀번호가 비어있습니다. 비밀번호를 적어주세요") : setPasswordError("")
    }
    const onChangeSubject = (event) => {
        setSubject(event.target.value);
        (event.target.value) === "" ? setSubjectError("제목이 비어있습니다. 제목을 적어주세요") : setSubjectError("")
    }
    const onChangeContents = (event) => {
        setContents(event.target.value);
        (event.target.value) === "" ? setContentsError("내용이 비어있습니다. 내용을 적어주세요"): setContentsError("")
    }

    const onClickSubmitButton = async () => {
      if (!writer) setWriterError("이름이 비어있습니다. 이름을 적어주세요")
      if (!password) setPasswordError("비밀번호가 비어있습니다. 비밀번호를 적어주세요")
      if (!subject) setSubjectError("제목이 비어있습니다. 제목을 적어주세요")
      if (!contents) setContentsError("내용이 비어있습니다. 내용을 적어주세요")
      if (writer!=="" && password!=="" && subject!=="" && contents!=="") {
        alert("게시글이 등록되었습니다.")
        try{
          const result = await createBoard({
            variables: { createBoardInput:{
              writer: writer,
              password: password,
              title: subject,
              contents: contents
  
            }
            }
          })
          console.log(result.data)
          router.push(`/freeboard/detailPage/${result.data.createBoard._id}`)
        }
        catch (error) {
          console.log(error.message)
          alert("실패했습니다!")
        }
      }
  }

    return (
      <Wrapper>
        <Title>게시글 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter}/>
            <ErrorMassage>{writerError}</ErrorMassage>
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password type="password" placeholder="비밀번호를 작성해주세요." onChange={onChangePassword}/>
            <ErrorMassage>{passwordError}</ErrorMassage>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject type="text" placeholder="제목을 작성해주세요." onChange={onChangeSubject}/>
          <ErrorMassage>{subjectError}</ErrorMassage>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents placeholder="내용을 작성해주세요." onChange={onChangeContents}/>
          <ErrorMassage>{contentsError}</ErrorMassage>
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode placeholder="07250" />
            <SearchButton>우편번호 검색</SearchButton>
          </ZipcodeWrapper>
          <Address />
          <Address />
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube placeholder="링크를 복사해주세요." />
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
          <SubmitButton onClick={onClickSubmitButton}>등록하기</SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    );
  }