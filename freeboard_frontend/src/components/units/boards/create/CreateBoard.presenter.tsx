import * as B from "../../../../commons/styles/board.styles";
import { ICreateBoardUIProps } from "./CreateBoard.types";
import { v4 as uuidv4 } from "uuid";
import UploadImageContainer from "../../../commons/uploadImage/UploadImage.container";

export default function CreateBoardUI(props: ICreateBoardUIProps) {
  return (
    <B.Wrapper>
      <B.Title>{props.isEdit ? "게시글 수정" : "게시글 등록"}</B.Title>
      <B.WriterWrapper>
        <B.InputWrapper>
          <B.Label>작성자</B.Label>
          <B.Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard.writer || ""}
            readOnly={!!props.data?.fetchBoard.writer}
          />
          <B.ErrorMessage>{props.writerError}</B.ErrorMessage>
        </B.InputWrapper>
        <B.InputWrapper>
          <B.Label>비밀번호</B.Label>
          <B.Password
            type="password"
            placeholder="비밀번호를 작성해주세요."
            onChange={props.onChangePassword}
          />
          <B.ErrorMessage>{props.passwordError}</B.ErrorMessage>
        </B.InputWrapper>
      </B.WriterWrapper>
      <B.InputWrapper>
        <B.Label>제목</B.Label>
        <B.Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeSubject}
          defaultValue={props.data?.fetchBoard.title || ""}
        />
        <B.ErrorMessage>{props.subjectError}</B.ErrorMessage>
      </B.InputWrapper>
      <B.InputWrapper>
        <B.Label>내용</B.Label>
        <B.Contents
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents || ""}
        />
        <B.ErrorMessage>{props.contentsError}</B.ErrorMessage>
      </B.InputWrapper>
      <B.InputWrapper>
        <B.Label>주소</B.Label>
        <B.ZipcodeWrapper>
          <B.Zipcode
            placeholder="0000"
            // value={props.zipcode}
            value={
              props.zipcode ||
              props.data?.fetchBoard.boardAddress?.zipcode ||
              ""
            }
            readOnly={!!props.data?.fetchBoard.boardAddress?.zipcode}
          />
          <B.AddressSearchButton onClick={props.onToggleModal}>
            주소검색
          </B.AddressSearchButton>
          {props.isModalVisible && (
            <B.AddressModal
              title="제목"
              visible={true}
              onOk={props.onToggleModal}
              onCancel={props.onToggleModal}
            >
              <B.DaumPostcodeLibrary onComplete={props.onCompletePostcode} />
            </B.AddressModal>
          )}
        </B.ZipcodeWrapper>
        <B.Address
          value={
            props.address || props.data?.fetchBoard.boardAddress?.address || ""
          }
          readOnly={!!props.data?.fetchBoard.boardAddress?.address}
        />
        <B.Address
          placeholder="상세주소를 입력해주세요"
          onChange={props.onChangeAddressDetail}
          defaultValue={
            props.data?.fetchBoard.boardAddress?.addressDetail || ""
          }
        />
      </B.InputWrapper>
      <B.InputWrapper>
        <B.Label>유튜브</B.Label>
        <B.Youtube
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeYoutubeUrl}
          defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
        />
      </B.InputWrapper>
      <B.ImageWrapper>
        <B.Label>사진첨부</B.Label>
        <B.RowBox>
          {props.imageUrls.map((el, index) => (
            <UploadImageContainer
              key={uuidv4()}
              index={index}
              imageUrl={el}
              onChangeImageUrls={props.onChangeImageUrls}
            />
          ))}
        </B.RowBox>
      </B.ImageWrapper>
      <B.OptionWrapper>
        <B.Label>메인설정</B.Label>
        <B.RadioButton type="radio" id="youtube" name="radio-button" />
        <B.RadioLabel htmlFor="youtube">유튜브</B.RadioLabel>
        <B.RadioButton type="radio" id="image" name="radio-button" />
        <B.RadioLabel htmlFor="image">사진</B.RadioLabel>
      </B.OptionWrapper>
      <B.ButtonWrapper>
        <B.SubmitButton
          onClick={
            props.isEdit ? props.onClickUpdate : props.onClickSubmitButton
          }
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </B.SubmitButton>
      </B.ButtonWrapper>
    </B.Wrapper>
  );
}
