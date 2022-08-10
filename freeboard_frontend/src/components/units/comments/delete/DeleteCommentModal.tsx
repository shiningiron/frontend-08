import * as C from "./deleteCommentModal.styles";
import { FETCH_COMMENT } from "../fetch/fetchComment.queries";
import { useRouter } from "next/router";
import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { IDeleteCommentModalUI } from "./deleteCommentModal.types";

const DELETE_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

export default function DeleteCommentModal(props: IDeleteCommentModalUI) {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_COMMENT);
  const [password, setPassword] = useState("");

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };
  const submitOk = async () => {
    if (!password) return;

    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: props.id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { boardId: router.query.newBoardId },
          },
        ],
      });
    } catch (error) {
      console.log(error);
      // console.log(event.currentTarget.id)
      alert(error.message);
      console.log(props.id);
    }
    setIsModalVisible((prev) => !prev);
  };

  return (
    <>
      <C.IconButton onClick={onToggleModal}>
        <img src={"/free-icon-font-trash.png"} />
      </C.IconButton>
      {isModalVisible && (
        <C.ReplModal
          title="비밀번호 입력"
          visible={true}
          onOk={submitOk}
          onCancel={onToggleModal}
        >
          <input
            type="password"
            placeholder="password"
            onChange={onChangePassword}
          ></input>
        </C.ReplModal>
      )}
    </>
  );
}
