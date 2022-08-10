import CommentModalUI from "./commentModal.presenter";
import { useState } from "react";
import { ICommentModalProps } from "./commentModal.types";

export default function CommentModal(props: ICommentModalProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onToggleModal = () => {
    if (!props.contents) return alert("내용을 작성해주세요");
    setIsModalVisible((prev) => !prev);
  };
  const submitOk = () => {
    props.replyButton();
    setIsModalVisible((prev) => !prev);
  };

  return (
    <CommentModalUI
      onToggleModal={onToggleModal}
      submitOk={submitOk}
      isModalVisible={isModalVisible}
      onChangeWriter={props.onChangeWriter}
      onChangePassword={props.onChangePassword}
    />
  );
}
