import styled from "@emotion/styled";
import { ICreateUserUIProps } from "./createUser.types";

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
  color: black;
`;

export default function CreateUserUI(props: ICreateUserUIProps) {
  return (
    <Wrapper>
      <InputBox>
        <EmailInput
          id="email"
          type="text"
          onChange={props.onChangeInputs}
          placeholder="email을 입력해주세요"
          // value={props.isModalVisible ? "" : ""}
        />
        <ErrorMsg>
          {props.emailCheck ? "" : "올바른 email 형식이 아닙니다."}
        </ErrorMsg>
      </InputBox>
      <InputBox>
        <PasswordInput
          id="password"
          type="password"
          onChange={props.onChangeInputs}
          placeholder="비밀번호를 입력해주세요"
          // defaultValue={props.isModalVisible ? "" : ""}
        />
        <ErrorMsg>
          {props.passwordCheck
            ? ""
            : "최소 8 자, 하나 이상의 문자와 하나의 숫자를 입력해주세요"}
        </ErrorMsg>
      </InputBox>
      <InputBox>
        <NameInput
          id="name"
          type="text"
          onChange={props.onChangeInputs}
          placeholder="이름을 입력해주세요"
          // defaultValue={props.isModalVisible ? "" : ""}
        />
      </InputBox>
    </Wrapper>
  );
}
