import UpdateCommentModalUI from "./UpdateCommentModal.presenter";
import { useState } from "react";
import { ICommentModalProps } from "./UpdateCommentModal.types";

export default function UpdateCommentModal(props: ICommentModalProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onToggleModal = () => {
    if (!props.contents) return alert("내용을 작성해주세요");
    setIsModalVisible((prev) => !prev);
  };
  const submitOk = () => {
    if (!props.password) return alert("비밀번호를 입력해주세요");
    props.onClickEditFin();
    setIsModalVisible((prev) => !prev);
    props.setIsEdit(false);
  };

  return (
    <UpdateCommentModalUI
      onToggleModal={onToggleModal}
      submitOk={submitOk}
      isModalVisible={isModalVisible}
      onChangePassword={props.onChangePassword}
    />
  );
}
