import styled from "@emotion/styled";
import { ITextTokenProps } from "../../components/commons/pagination/Pagination.types";

export const ListWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #6600ff;
  margin: 50px 50px 0px 50px;
  /* color: #fff; */
  color: #d8bfd8;
`;

export const ListBox = styled.div`
  width: 100%;
  padding: 10px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #6600ff;
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
`;
export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "#0ffe" : "white")};
`;
export const BoardDate = styled.div`
  font-size: 20px;
  text-align: end;
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
