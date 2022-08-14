import styled from "@emotion/styled";
import { BsTrash2 } from "react-icons/bs";
import { FiTool } from "react-icons/fi";

export const Box = styled.div`
  /* margin-top: 10%; */
  /* margin-left: 50px;
  margin-right: 50px; */
  margin: 20px 50px 0px 50px;
  /* padding-top: 40px;
  padding-bottom: 20px; */
  padding: 30px 10px 20px 10px;
  /* width: 80rem; */
  width: 70rem;
  display: flex;
  justify-content: space-between;
  /* border-top: 1px solid #6600ff;
  border-bottom: 1px solid #6600ff;
  border: 1px solid #6600ff; */
  /* color: #fff; */
  /* flex-direction: column; */
  /* border: 1px solid #640064; */
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-radius: 1rem 1rem 0.2rem 0.2rem;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 10px 0px rgb(100, 0, 255);
`;
export const ListBox = styled.div`
  margin: 0px 50px 0px 50px;
  padding: 30px 10px 20px 10px;
  width: 70rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.1);
  color: #fff;
`;
export const WriterInfoBox = styled.div`
  display: flex;
`;
export const Thumb = styled.a`
  margin-right: 16px;
  width: 46px;
  height: 46px;
`;
export const ImgIcon = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
`;
export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProfileWriter = styled.div`
  font-weight: 500;
  font-size: 24px;
`;
export const ProfileCreatedTime = styled.div`
  width: 135px;
  text-overflow: inherit;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 400;
  font-size: 16px;
  color: #828282;
`;
export const Tools = styled.div`
  display: flex;
  justify-content: space-around;
`;
// export const DeleteTool = styled(BsTrash2)`
//   margin-right: 5px;
//   width: 20px;
//   height: 20px;
// `;
export const EditTool = styled(FiTool)`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  &:hover {
    color: #ffd700;
  }
`;
export const WriteBox = styled.div`
  display: flex;
  width: auto;
`;
export const CommentInput = styled.input`
  width: 50rem;
  border: none;
  vertical-align: bottom;
  background-color: transparent;
  border-bottom: 1px solid gray;
  transition: 0.4s;
  color: #fff;
  &:focus {
    outline: none;
    border-bottom: 1px solid #6400ff;
  }
`;
export const NonMemberWriter = styled.input``;
export const NonMemberPassword = styled.input``;
export const submitButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
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
// 댓글 목록-----------

export const ListWrapper = styled.div``;

export const CommentContents = styled.div`
  width: 75%;
  color: #fff;
  /* border-bottom: 1px solid black; */
`;
