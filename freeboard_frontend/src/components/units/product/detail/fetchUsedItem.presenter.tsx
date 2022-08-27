import * as F from "../../../../commons/styles/usedItem.styles";
// import { IFetchUsedItemUIProps } from "./fetchUsedItem.types";
import Dompurify from "dompurify";
import { useMutation } from "@apollo/client";
import { CREATE_POINT_BUY_AND_SELLING } from "./fetchUsedItem.queries";
import { Modal } from "antd";
import Pick from "../list/picked";
import CmtListContainer from "../../../comment/commentList/cmtList.container";
import CommentContainer from "../../../comment/wirte/comment.container";

export default function FetchUsedItemUI(props: any) {
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_BUY_AND_SELLING
  );
  const onClickBuy = (data: any) => async () => {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: data._id,
        },
      });
      console.log(result);
      Modal.success({ content: "구매완료~" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <F.Wrapper>
      <F.HeaderBox>
        <F.Title>{props.data?.fetchUseditem.name}</F.Title>
        <F.Remarks>{props.data?.fetchUseditem.remarks}</F.Remarks>
        <F.UserBox>
          {props.data?.fetchUseditem.seller?.picture ? (
            // prettier-ignore
            <F.UserThumb src={`https://storage.googleapis.com/${props.data?.fetchUseditem.seller?.picture}`} />
          ) : (
            <F.UserThumb src={"/images/pizza.png"} />
          )}
          <F.Seller>{props.data?.fetchUseditem.seller?.name}</F.Seller>
        </F.UserBox>
        <F.ToolBox>
          <F.DeleteBtn onClick={props.onClickDelete}>삭제</F.DeleteBtn>
          <F.EditBtn onClick={props.onClickMoveToEdit}>수정</F.EditBtn>
          <F.ListBtn onClick={props.onClickMoveToList}>목록</F.ListBtn>
        </F.ToolBox>
      </F.HeaderBox>
      <F.Line />
      <F.ItemInfoBox>
        <F.Price>{props.data?.fetchUseditem.price?.toLocaleString()}원</F.Price>
        <F.Buybtn onClick={onClickBuy(props.data?.fetchUseditem)}>
          구매
        </F.Buybtn>
        <Pick
          onClickPick={props.onClickPick}
          data={props.data}
          isPick={props.isPick}
        />
      </F.ItemInfoBox>
      <F.ContentsBox>
        <F.ImgBox>
          {props.data?.fetchUseditem.images
            ?.filter((el: string) => el !== "")
            .map((el: string) => (
              <F.ImgCard
                key={el}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}
        </F.ImgBox>
        {typeof window !== "undefined" ? (
          <F.Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
            }}
          />
        ) : (
          <F.Contents />
        )}
      </F.ContentsBox>
      <CommentContainer />
      <CmtListContainer />
    </F.Wrapper>
  );
}
