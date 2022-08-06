import styled from "@emotion/styled";
import { ICreateUserUIProps } from "./CreateUser.types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputBox = styled.div`
  display: flex;
`;
const EmailInput = styled.input``;
const PasswordInput = styled.input``;
const NameInput = styled.input``;
const ErrorMsg = styled.div`
  color: aliceblue;
`;
const SubmitButton = styled.div`
  width: 100px;
  border-radius: 10px;
  color: #fff;
  background-color: #6400ff;
`;

export default function CreateUserUI(props: ICreateUserUIProps) {
  return (
    <Wrapper>
      <InputBox>
        <EmailInput id="email" type="text" onChange={props.onChangeInputs} />
        <ErrorMsg>
          {props.emailCheck ? "" : "옳바른 email 형식이 아닙니다."}
        </ErrorMsg>
      </InputBox>
      <InputBox>
        <PasswordInput
          id="password"
          type="password"
          onChange={props.onChangeInputs}
        />
        <ErrorMsg>
          {props.passwordCheck
            ? ""
            : "최소 8 자, 하나 이상의 문자와 하나의 숫자를 입력해주세요"}
        </ErrorMsg>
      </InputBox>
      <InputBox>
        <NameInput id="name" type="text" onChange={props.onChangeInputs} />
      </InputBox>
      <SubmitButton onClick={props.onClickSubmit}>가입하기</SubmitButton>
    </Wrapper>
  );
}
