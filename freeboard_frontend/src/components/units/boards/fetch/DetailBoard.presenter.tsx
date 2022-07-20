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
            <B.ImgIcon src="/pizza.png" />
          </B.Thumb>
          <B.ProfileBox>
            <B.ProfileWriter>{props.data?.fetchBoard?.writer}</B.ProfileWriter>
            <B.ProfileCreatedTime>
              DATE: {getDate(props.data?.fetchBoard?.createdAt)},
            </B.ProfileCreatedTime>
          </B.ProfileBox>
        </B.WriterInfoBox>
        <B.HeaderTool>
          <B.LinkTool src="/free-icon-font-link-3917422.png" />
          <B.LocationTool
            src="/free-icon-font-marker.png"
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
          <B.ContentsImg src="/pizza.png" />
        </B.ContentsImgBox>
        <B.FetchContents>
          <B.DetailContents>
            {props.data?.fetchBoard?.contents}
          </B.DetailContents>
        </B.FetchContents>
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
      <B.SubmitButton onClick={props.onClickMoveToEdit}>
        수정하기
      </B.SubmitButton>
    </B.Wrapper>
  );
}
