import CreateUser from "../../../units/user/create/CreateUser.container";
import * as Cm from "./Modal.styles";

export default function CreateUserModalUI(props) {
  return (
    <Cm.ModalBox>
      {props.isModalVisible ? (
        <section>
          <header>
            {props.header}
            <button onClick={props.onToggleModal}></button>
          </header>
          <main>
            <CreateUser />
          </main>
          <footer>
            <button onClick={props.onToggleModal}>close</button>
          </footer>
        </section>
      ) : null}
    </Cm.ModalBox>
  );
}
