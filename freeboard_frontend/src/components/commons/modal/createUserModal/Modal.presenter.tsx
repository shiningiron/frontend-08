import CreateUserUI from "./createUser.presenter";
import { ICreateUserModalUIProps } from "./createUser.types";
import * as Cm from "./modal.styles";

export default function CreateUserModalUI(props: ICreateUserModalUIProps) {
  return (
    <Cm.ModalBox
      title="회원가입"
      visible={props.isModalVisible}
      onOk={props.onToggleModal}
      onCancel={props.onToggleModal}
      destroyOnClose={props.isModalVisible}
      width={560}
      footer={[
        <Cm.FooterButton key="back" onClick={props.onToggleModal}>
          나가기
        </Cm.FooterButton>,
        <Cm.FooterButton
          key="submit"
          type="primary"
          onClick={props.onClickSubmit}
        >
          가입하기
        </Cm.FooterButton>,
      ]}
    >
      <CreateUserUI
        isModalVisible={props.isModalVisible}
        onChangeInputs={props.onChangeInputs}
        emailCheck={props.emailCheck}
        passwordCheck={props.passwordCheck}
        isActive={props.isActive}
      />
    </Cm.ModalBox>
  );
}
