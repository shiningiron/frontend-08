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

// =============== 이미지 업로드 UI ==================

export const UploadWrapper = styled.div`
  display: flex;
`;
export const UploadPreview = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
export const UploadButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
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

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ToolBox = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  width: 15%;
`;
export const DeleteBtn = styled.button`
  width: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 0.625rem;
  color: #fff;
  cursor: pointer;
`;
export const EditBtn = styled.button`
  width: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 0.625rem;
  color: #fff;
  cursor: pointer;
`;
export const ListBtn = styled.button`
  width: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 0.625rem;
  color: #fff;
  cursor: pointer;
`;

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
  justify-content: flex-end;
`;
export const Seller = styled.div`
  font-weight: 700;
  font-size: 2rem;
  color: #fff;
  -webkit-text-stroke: 0.05rem #64ff;
`;
export const Price = styled.div`
  font-size: 2em;
  color: #ff0000;
  margin-right: 2rem;
`;
export const Buybtn = styled.button`
  width: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 0.625rem;
  color: #fff;
  cursor: pointer;
`;
export const Remarks = styled.div`
  font-size: 2em;
  color: #fff;
`;
export const UserBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 21%;
  margin: 1rem;
`;
export const UserThumb = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  border-radius: 50%;
`;
export const ImgCard = styled.img`
  width: 10rem;
  height: 10rem;
  margin-right: 1rem;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
`;
export const ImgBox = styled.div`
  display: flex;
  width: 40%;
`;
export const ContentsBox = styled.div`
  display: flex;
  width: 100%;
`;
export const Contents = styled.p`
  width: 60%;
  height: fit-content;
  font-weight: 400;
  font-size: 30px;
  color: #fff;
`;

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
