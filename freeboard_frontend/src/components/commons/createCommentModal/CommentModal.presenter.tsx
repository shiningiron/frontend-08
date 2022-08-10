import * as C from "./commentModal.styles";
import { ICommentModalUIProps } from "./commentModal.types";

export default function CommentModalUI(props: ICommentModalUIProps) {
  return (
    <>
      <C.ModalButton onClick={props.onToggleModal}>작성</C.ModalButton>
      {props.isModalVisible && (
        <C.ReplModal
          title="비회원 정보입력"
          visible={true}
          onOk={props.submitOk}
          onCancel={props.onToggleModal}
        >
          <input
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
          ></input>
          <input
            type="password"
            placeholder="password"
            onChange={props.onChangePassword}
          ></input>
        </C.ReplModal>
      )}
    </>
  );
}
