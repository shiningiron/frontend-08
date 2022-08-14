// #7b68ee

import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { Modal, Button } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { IoMdRocket } from "react-icons/io";

// 라이브러리//----------------// 라이브러리//---------------------------// 라이브러리//----------

// 리엑트 플레이어
export const Player = styled(ReactPlayer)`
  width: 640px;
  height: 480px;
`;

// 주소찾기 모달
export const AddressModal = styled(Modal)``;
export const AddressSearchButton = styled(Button)`
  padding: 0;
  color: #fff;
  border: 2px solid #6600cc;
  border-radius: 5px;
  background-color: #6600ff;
  width: 77px;
  height: 52px;
  &:hover {
    background-color: #6600ff;
    color: #fff;
    border: 3px solid #7b68ee;
  }
`;

export const DaumPostcodeLibrary = styled(DaumPostcodeEmbed)``;

//  등록 페이지------------------등록 페이지------------등록 페이지---------------------등록 페이지--------------------

export const Wrapper = styled.div`
  /* width: 1200px; */
  width: 70em;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 10%;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  margin: 50px 50px 0px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #640064; */
  border: none;
  border-radius: 1em;
  box-shadow: 1px 1px 13px #6400ff;
  /* background-color: rgba(250, 240, 230); */
  background-color: rgba(0, 0, 0, 0.1);
  color: #fff;
`;

export const RowBox = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  background-color: transparent;
`;

export const WriterWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const Writer = styled.input`
  width: 460px;
  height: 52px;
  padding-left: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #6600ff;
  border-radius: 5px;
`;

export const Password = styled.input`
  width: 460px;
  height: 52px;
  padding-left: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #6600ff;
  border-radius: 5px;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #6600ff;
  border-radius: 5px;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #6600ff;
  border-radius: 5px;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  margin-right: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #6600ff;
  border-radius: 5px;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #6600ff;
  border-radius: 5px;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #6600ff;
  border-radius: 5px;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const UploadButton = styled.div`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export const UploadPreview = styled.img`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  background-color: #6600ff;
`;

export const ErrorMessage = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

// //상세 페이지-----------------------상세 페이지----------------------------상세 페이지--------------상세 페이지---------------

export const HeaderBox = styled.div`
  padding-top: 40px;
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #6600ff;
  background-color: transparent;
`;
export const WriterInfoBox = styled.div`
  display: flex;
  background-color: transparent;
`;
export const Thumb = styled.a`
  margin-right: 16px;
  width: 46px;
  height: 46px;
`;
export const ImgIcon = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
`;

export const ProfileBox = styled.div`
  background-color: transparent;
`;

export const ProfileWriter = styled.div`
  font-weight: 500;
  font-size: 24px;
  background-color: transparent;
`;

export const ProfileCreatedTime = styled.div`
  width: auto;
  text-overflow: inherit;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 400;
  font-size: 16px;
  color: #828282;
  background-color: transparent;
`;

export const HeaderTool = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
`;

export const LinkTool = styled.img`
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-color: transparent;
`;

export const LocationTool = styled.img`
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-color: transparent;
`;
export const ContentsBox = styled.div`
  padding-top: 80px;
  width: 100%;
  background-color: transparent;
`;
export const ContentsTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: transparent;
`;
export const ContentsImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56%;
  background-color: transparent;
  /* border: 1px solid gray; */
`;
export const ContentsImg = styled.img`
  width: 320px;
  height: 180px;
`;
export const FetchContents = styled.div``;
export const DetailContents = styled.pre`
  padding-top: 50px;
  white-space: pre-wrap;
  word-break: break-all;
  /* overflow: auto; */
  font-weight: 400;
  font-size: 30px;
  background-color: transparent;
`;
export const PlayerBox = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  background-color: transparent;
`;
export const ButtonBox = styled.div`
  margin: 20px 0px;
  display: flex;
`;
export const LikeDislikeBox = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LikeDislikeBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
export const LikeDislikeCount = styled.div`
  padding-top: 10px;
  color: #ffffff;
  font-size: 24px;
`;
export const LikeRocket = styled(IoMdRocket)`
  width: 70px;
  height: 70px;
  color: #6600ff;
  &:active {
    color: #00ff00;
  }
`;
export const DislikeRocket = styled(IoMdRocket)`
  width: 70px;
  height: 70px;
  transform: rotate(180deg);
  &:active {
    color: #dc143c;
  }
`;
