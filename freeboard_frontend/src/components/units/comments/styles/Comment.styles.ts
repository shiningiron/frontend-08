import styled from "@emotion/styled";

export const Box = styled.div`
  /* margin-top: 10%; */
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 40px;
  padding-bottom: 20px;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #4b0082;
  border-bottom: 1px solid #4b0082;
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
  justify-content: space-between;
`;
export const DeleteTool = styled.img`
  margin-right: 20px;
  width: 20px;
  height: 20px;
`;
export const LikeTool = styled.div``;
export const EditTool = styled.button`
  background-color: transparent;
  border: none;
`;
export const WriteBox = styled.div`
  display: flex;
`;
export const TextArea = styled.textarea`
  width: 900px;
  border: none;
  resize: none;
  background-color: transparent;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
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

export const CommentContents = styled.div`
  width: 75%;
  border-bottom: 1px solid black;
`;
