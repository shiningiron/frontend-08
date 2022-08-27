import styled from "@emotion/styled";
import { BiPencil } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

export const Comment = styled.input`
  width: 100%;
  height: 4rem;
  margin-top: 1.813rem;
  border: none;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  color: #fff;
  outline: none;
  padding: 1rem;
  font-size: 1.5rem;
  resize: none;
`;

export const CommentSubmit = styled.button`
  width: 7.25rem;
  height: 2.625rem;
  border: none;
  border-radius: 1rem;
  align-self: flex-end;
  font-weight: 500;
  font-size: 1.25rem;
  padding: 0.46rem;
  margin-top: 0.688rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  cursor: pointer;
`;
export const CancelBtn = styled.button`
  width: 7.25rem;
  height: 2.625rem;
  border: none;
  align-self: flex-end;
  font-weight: 700;
  font-size: 1.25rem;
  padding: 0.46rem;
  margin-top: 0.688rem;
  margin-right: 0.625rem;
  border: none
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  color: #000000;
  cursor: pointer;
`;
export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  align-items: flex-end;
  overflow: scroll;
  overflow-x: hidden;
  color: #fff;
  margin-top: 3.438rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;
export const UserBox = styled.div`
  display: flex;
`;
export const UserThumb = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  background-color: #c4c4c4;
  margin-right: 1rem;
  object-fit: cover;
`;
export const UserNameBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserName = styled.span`
  font-weight: 400;
  font-size: 1.5rem;
`;
export const CmtDate = styled.span`
  font-weight: 400;
  font-size: 0.938rem;
`;
export const ToolBox = styled.div`
  display: flex;
`;
export const EditBtn = styled(BiPencil)`
  width: 1.125rem;
  height: 1.125rem;
  color: #bdbdbd;
  margin-right: 0.625rem;
  cursor: pointer;
`;
export const DelBtn = styled(IoMdClose)`
  width: 1.125rem;
  height: 1.125rem;
  color: #bdbdbd;
  cursor: pointer;
`;
export const ContentBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const Contents = styled.p`
  width: 22.313rem;
  font-weight: 400;
  font-size: 1.5rem;
  padding-left: 1rem;
`;
export const ReCmtBtn = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 0.72rem;
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  cursor: pointer;
`;
export const BtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
