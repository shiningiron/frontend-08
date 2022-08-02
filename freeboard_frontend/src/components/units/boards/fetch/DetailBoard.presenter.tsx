import * as B from "../../../../commons/styles/board.styles";
import { IDetailBoardUIProps } from "./DetailBoard.types";
import { getDate } from "../../../../commons/libraries/utils";
import React from "react";

export default function DetailBoardUI(props: IDetailBoardUIProps) {
  return (
    <B.Wrapper>
      <B.HeaderBox>
        <B.WriterInfoBox>
          <B.Thumb>
            <B.ImgIcon src="/images/purple.jpeg" />
          </B.Thumb>
          <B.ProfileBox>
            <B.ProfileWriter>{props.data?.fetchBoard?.writer}</B.ProfileWriter>
            <B.ProfileCreatedTime>
              DATE: {getDate(props.data?.fetchBoard?.createdAt)},
            </B.ProfileCreatedTime>
          </B.ProfileBox>
        </B.WriterInfoBox>
        <B.HeaderTool>
          <B.LinkTool src="/images/free-icon-font-link-3917422.png" />
          <B.LocationTool
            src="/images/free-icon-font-marker.png"
            onClick={props.onClickLocation}
          />
          {props.boardAddress}
        </B.HeaderTool>
      </B.HeaderBox>
      <B.ContentsBox>
        <B.ContentsTitle>
          <B.Title>{props.data?.fetchBoard?.title}</B.Title>
        </B.ContentsTitle>
        <B.ContentsImgBox>
          {props.data?.fetchBoard.images
            ?.filter((el: string) => el !== "")
            .map((el: string) => (
              <B.ContentsImg
                key={el}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}
        </B.ContentsImgBox>
        <B.DetailContents>{props.data?.fetchBoard?.contents}</B.DetailContents>
        <B.PlayerBox>
          <B.Player
            url={`${props.data?.fetchBoard.youtubeUrl}`}
            muted={true}
            playing={true}
            loop={true}
            controls={true}
          />
        </B.PlayerBox>
      </B.ContentsBox>
      <B.LikeDislikeBox>
        <B.LikeDislikeBack onClick={props.onClickLike}>
          <B.LikeRocket />
          <B.LikeDislikeCount>
            {props.data?.fetchBoard.likeCount}
          </B.LikeDislikeCount>
        </B.LikeDislikeBack>
        <B.LikeDislikeBack onClick={props.onClickDisLike}>
          <B.DislikeRocket />
          <B.LikeDislikeCount>
            {props.data?.fetchBoard.dislikeCount}
          </B.LikeDislikeCount>
        </B.LikeDislikeBack>
      </B.LikeDislikeBox>
      <B.ButtonBox>
        <B.SubmitButton onClick={props.onClickMoveToEdit}>
          수정하기
        </B.SubmitButton>
        <B.SubmitButton onClick={props.onClickMoveToList}>목록</B.SubmitButton>
        <B.SubmitButton onClick={props.onClickDelete}>
          게시글 삭제
        </B.SubmitButton>
      </B.ButtonBox>
    </B.Wrapper>
  );
}
