import styled from "@emotion/styled";
import { injectGlobal } from "@emotion/css";

injectGlobal`
    body {
        padding: 10%;
        /* background-color: black; */
    }
`;

export const ListWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  border: 1px solid #4b0082;
  margin-left: 100px;
  margin-top: 100px;
`;

export const ListBox = styled.div`
  width: 100%;
  padding: 10px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #4b0082;
  font-size: 25px;
`;
export const Title = styled.div`
  margin-right: 50px;
`;
export const Img = styled.img`
  margin-right: 50px;
`;
export const ListInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
`;
export const Writer = styled.div`
  font-size: 20px;
  text-align: end;
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
