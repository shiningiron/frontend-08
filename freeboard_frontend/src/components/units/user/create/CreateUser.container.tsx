import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { extendSchemaImpl } from "graphql/utilities/extendSchema";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import CreateUserUI from "./CreateUser.presenter";
import { CREATE_USER } from "./CreateUser.queries";

const initialInputs = { email: "", password: "", name: "" };

export default function CreateUser() {
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
        console.log(result.data);
        router.push(`/`);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };
  return (
    <CreateUserUI
      onClickSubmit={onClickSubmit}
      onChangeInputs={onChangeInputs}
      emailCheck={emailCheck}
      passwordCheck={passwordCheck}
      isActive={isActive}
    />
  );
}
