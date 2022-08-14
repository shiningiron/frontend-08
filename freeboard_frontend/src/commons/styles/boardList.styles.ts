import styled from "@emotion/styled";
import { ITextTokenProps } from "../../components/commons/pagination/pagination.types";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListBox = styled.div`
  width: 60rem;
  padding: 10px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  margin-bottom: 1rem;
  font-size: 25px;
`;
export const Title = styled.div`
  margin-right: 50px;
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 50px;
`;
export const ListInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
`;
export const Writer = styled.div`
  font-size: 20px;
  text-align: end;
  color: #fff;
`;
export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "#0ffe" : "white")};
`;
export const BoardDate = styled.div`
  font-size: 20px;
  text-align: end;
  color: #fff;
`;
export const NewBoardButton = styled.button`
  position: fixed;
  top: 95%;
  left: 95%;
`;
export const Footer = styled.div`
  display: flex;
  padding: 50px;
  justify-content: center;
  align-items: center;
`;
