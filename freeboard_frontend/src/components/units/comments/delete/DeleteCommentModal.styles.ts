import { Modal, Button } from "antd";
import { BsTrash2 } from "react-icons/bs";
import styled from "@emotion/styled";

export const ModalButton = styled.button`
  width: 50px;
  height: 30px;
  margin-left: 18px;
  background-color: silver;
  border-radius: 5px;
  color: darkorchid;
  &:hover {
    animation: fade-bg 1s linear 0s infinite alternate;
    -webkit-animation: fade-bg 1s linear 0s infinite alternate;
    @-webkit-keyframes fade-bg {
      0% {
        background: #ccc;
      }
      100% {
        background: #7fff00;
      }
    }

    @keyframes fade-bg {
      0% {
        background: #ccc;
      }
      100% {
        background: #7fff00;
      }
    }
  }
`;
export const ReplModal = styled(Modal)``;
export const IconButton = styled(BsTrash2)`
  margin-right: 30px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  &:hover {
    color: #7fff00;
  }
`;
