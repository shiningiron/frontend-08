import * as C from "./UpdateCommentModal.styles";
import { ICommentModalUIProps } from "./UpdateCommentModal.types";

export default function UpdateCommentModalUI(props: ICommentModalUIProps) {
  return (
    <>
      <C.ModalButton onClick={props.onToggleModal}>수정</C.ModalButton>
      {props.isModalVisible && (
        <C.ReplModal
          title="비밀번호 입력"
          visible={true}
          onOk={props.submitOk}
          onCancel={props.onToggleModal}
        >
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
