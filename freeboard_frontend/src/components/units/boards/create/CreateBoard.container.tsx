import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./CreateBoard.queries";
import { useRouter } from "next/router";
import CreateBoardUI from "./CreateBoard.presenter";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import { ICreateBoardProps } from "./CreateBoard.types";

export default function CreateBoardContainer(props: ICreateBoardProps) {
  const [writer, setWriter] = useState("");
  const [writerError, setWriterError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [contents, setContents] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    event.target.value === ""
      ? setWriterError("이름이 비어있습니다. 이름을 적어주세요")
      : setWriterError("");
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    event.target.value === ""
      ? setPasswordError("비밀번호가 비어있습니다. 비밀번호를 적어주세요")
      : setPasswordError("");
  };
  const onChangeSubject = (event: ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
    event.target.value === ""
      ? setSubjectError("제목이 비어있습니다. 제목을 적어주세요")
      : setSubjectError("");
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    event.target.value === ""
      ? setContentsError("내용이 비어있습니다. 내용을 적어주세요")
      : setContentsError("");
  };
  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event?.target.value);
  };
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  // ----------- 주소 라이브러리 동작 ----------------

  const [isModalVisible, setIsModalVisible] = useState(false);
  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  let addr = ""; // 주소 변수
  let extraAddr = ""; // 참고주소 변수

  const onCompletePostcode = (postData: any) => {
    onToggleModal();
    if (postData.userSelectedType === "R") {
      // 사용자가 도로명 주소를 선택했을 경우
      addr = postData.roadAddress;

      // 법정동명이 있을 경우 추가한다. (법정리는 제외)
      // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
      if (postData.bname !== "" && /[동|로|가]$/g.test(postData.bname)) {
        extraAddr += postData.bname;
      }
      // 건물명이 있고, 공동주택일 경우 추가한다.
      if (postData.buildingName !== "" && postData.apartment === "Y") {
        extraAddr +=
          extraAddr !== ""
            ? ", " + postData.buildingName
            : postData.buildingName;
      }
      // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
      if (extraAddr !== "") {
        extraAddr = " (" + extraAddr + ")";
      }
    } else {
      // 사용자가 지번 주소를 선택했을 경우(J)
      addr = postData.jibunAddress;
    }
    setZipcode(postData.zonecode);
    console.log(postData);
    console.log(addr + extraAddr);
    setAddress(addr + extraAddr);
  };

  console.log(zipcode);
  console.log(address);
  console.log(addressDetail);
  // ----------주소 라이브러리 동작---------------------------//

  const onClickSubmitButton = async () => {
    if (!writer) setWriterError("이름이 비어있습니다. 이름을 적어주세요");
    if (!password)
      setPasswordError("비밀번호가 비어있습니다. 비밀번호를 적어주세요");
    if (!subject) setSubjectError("제목이 비어있습니다. 제목을 적어주세요");
    if (!contents) setContentsError("내용이 비어있습니다. 내용을 적어주세요");
    if (writer !== "" && password !== "" && subject !== "" && contents !== "")
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title: subject,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        console.log(result.data);
        alert("게시글이 등록되었습니다.");
        router.push(`/freeboard/${result.data?.createBoard?._id}`);
      } catch (error) {
        console.log(error.message);
        alert("실패했습니다!");
      }
  };

  const onClickUpdate = async () => {
    if (!subject && !contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    const updateBoardInput: IUpdateBoardInput = {};
    if (subject) updateBoardInput.title = subject;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.newBoardId as string,
          password,
          updateBoardInput,
        },
      });

      console.log(router);
      console.log(result);
      router.push(`/freeboard/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (!password) {
        alert("비밀번호를 입력해 주세요.");
      }
      console.log(error.message);
    }
  };

  return (
    <CreateBoardUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeSubject={onChangeSubject}
      onChangeContents={onChangeContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onClickSubmitButton={onClickSubmitButton}
      onClickUpdate={onClickUpdate}
      onCompletePostcode={onCompletePostcode}
      onToggleModal={onToggleModal}
      onChangeAddressDetail={onChangeAddressDetail}
      isModalVisible={isModalVisible}
      writerError={writerError}
      passwordError={passwordError}
      subjectError={subjectError}
      contentsError={contentsError}
      isEdit={props.isEdit}
      zipcode={zipcode}
      address={address}
      data={props.data}
    />
  );
}
