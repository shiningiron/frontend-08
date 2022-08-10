import { ChangeEvent, useState } from "react";
import * as Cm from "./modal.styles";
import CreateUserModalUI from "./modal.presenter";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./createUser.queries";
import { Modal } from "antd";

const initialInputs = { email: "", password: "", name: "" };

export default function CreateUserModal() {
  const router = useRouter();
  const [inputs, setInputs] = useState(initialInputs);
  const [emailCheck, setEmailCheck] = useState(Boolean);
  const [passwordCheck, setPasswordCheck] = useState(Boolean);
  const [isActive, setIsActive] = useState(false);

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const _inputs = {
      ...inputs,
      [event.target.id]: event.target.value,
    };
    setInputs(_inputs);
    if (event.target.id === "email") {
      const check = /^\w+@\w+\.\w+$/.test(event.target.value);
      setEmailCheck(check);
    }
    if (event.target.id === "password") {
      const check = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
        event.target.value
      );
      setPasswordCheck(check);
    }

    if (Object.values(_inputs).every((el) => el)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onClickSubmit = async () => {
    if (Object.values(inputs).every((el) => el)) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: { ...inputs },
          },
        });
        Modal.success({
          content: `${result.data?.createUser.name}님 환영합니다.`,
        });
        setIsModalVisible((prev) => !prev);
        console.log(result.data);

        router.push(`/`);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  return (
    <>
      <Cm.UserCreate onClick={onToggleModal}>
        <span style={{ color: "#fff", cursor: "pointer" }}>회원가입</span>
      </Cm.UserCreate>
      <CreateUserModalUI
        isModalVisible={isModalVisible}
        onToggleModal={onToggleModal}
        onClickSubmit={onClickSubmit}
        onChangeInputs={onChangeInputs}
        emailCheck={emailCheck}
        passwordCheck={passwordCheck}
        isActive={isActive}
      />
    </>
  );
}
