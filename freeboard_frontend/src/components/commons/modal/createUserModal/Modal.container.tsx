import { useState } from "react";
import * as Cm from "./Modal.styles";
import CreateUserModalUI from "./Modal.presenter";

export default function CreateUserModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  return (
    <>
      <Cm.UserCreate onClick={onToggleModal}>
        회원가입
        <CreateUserModalUI
          isModalVisible={isModalVisible}
          onToggleModal={onToggleModal}
          header="회원가입"
        />
      </Cm.UserCreate>
    </>
  );
}
