import * as F from "../../../../commons/styles/usedItem.styles";
import { IFetchUsedItemUIProps } from "./fetchUsedItem.types";
import Dompurify from "dompurify";

export default function FetchUsedItemUI(props: IFetchUsedItemUIProps) {
  return (
    <F.Wrapper>
      <F.HeaderBox>
        <F.Title>{props.data?.fetchUseditem.name}</F.Title>
        <F.ToolBox>
          <F.DeleteBtn onClick={props.onClickDelete}>삭제</F.DeleteBtn>
          <F.EditBtn onClick={props.onClickMoveToEdit}>수정</F.EditBtn>
          <F.ListBtn onClick={props.onClickMoveToList}>목록</F.ListBtn>
        </F.ToolBox>
      </F.HeaderBox>
      <F.Line />
      <F.ItemInfoBox>
        <F.Seller>{props.data?.fetchUseditem.seller.name}</F.Seller>
        <F.Remarks>{props.data?.fetchUseditem.remarks}</F.Remarks>
        <F.Price>{props.data?.fetchUseditem.price}</F.Price>
      </F.ItemInfoBox>
      <F.ContentsBox>
        {typeof window !== "undefined" ? (
          <F.Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
            }}
          ></F.Contents>
        ) : (
          <F.Contents />
        )}
      </F.ContentsBox>
    </F.Wrapper>
  );
}
