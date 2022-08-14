import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const QuillEditor = styled(ReactQuill)`
  width: 40rem;
  height: 20rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  color: #fff;

  .ql-snow * {
    color: #fff;
  }
  svg * {
    fill: #fff;
  }
  .ql-toolbar.ql-snow {
    border: none;
    border-bottom: 2px solid #fff;
  }
  .ql-toolbar.ql-snow:hover {
    color: #fff;
    outline: #fff;
  }
  .ql-container.ql-snow {
    border: none;
    color: #fff;
  }
  .ql-container.ql-snow:hover {
    color: #fff;
    outline: #fff;
  }
`;

// 상품 상세보기 ----------------------------------------------

export const Wrapper = styled.div`
  display: flex;
  width: 70rem;
  flex-direction: column;
  padding: 2rem;
  /* border: 1px solid #6400ff; */
  border-radius: 1em;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 50px 50px 0px 50px;
`;

export const HeaderBox = styled.div``;
export const ToolBox = styled.div``;
export const DeleteBtn = styled.button``;
export const EditBtn = styled.button``;
export const ListBtn = styled.button``;

export const Title = styled.h1`
  font-size: 3em;
  color: #fff;
`;
export const Line = styled.div`
  height: 1px;
  border: 1px solid #fff;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const ItemInfoBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const Seller = styled.div`
  font-size: 1.5rem;
`;
export const Price = styled.div`
  font-size: 2em;
  color: #ff0000;
`;
export const Remarks = styled.div`
  font-size: 2em;
  color: #fff;
`;
export const ContentsBox = styled.div``;
export const Contents = styled.div``;

// ================ 리스트 =================

// export const ListWrapper = styled.div`
//   display: flex;
//   width: 50rem;
//   flex-direction: column;
//   border: 1px solid #640064;
//   border-radius: 1em;
//   background-color: rgba(0, 0, 0, 0.1);
//   margin: 50px 50px 0px 50px;
// `;
