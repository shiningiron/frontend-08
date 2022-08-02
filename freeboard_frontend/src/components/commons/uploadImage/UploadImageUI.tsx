import * as U from "../../../commons/styles/board.styles";
// import styled from "@emotion/styled";

// const Wrapper = styled.div`
//   display: flex;
// `;

export default function UploadImageUI(props: any) {
  return (
    <>
      {props.imageUrl ? (
        <U.UploadPreview
          onClick={props.onClickImage}
          src={`https://storage.googleapis.com/${props.imageUrl}`}
        />
      ) : (
        <U.UploadButton onClick={props.onClickImage}>+</U.UploadButton>
      )}
      <input
        style={{ display: "none" }}
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
        // accept="image/jpeg"
      />
    </>
  );
}
