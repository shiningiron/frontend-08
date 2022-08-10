import { MouseEvent, useState } from "react";
import { IPaginationProps } from "./pagination.types";
import PaginationUI from "./pagination.presenter";

export default function Pagination(props: IPaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const [currentId, setCurrentId] = useState(1);

  // lastPage 변수 선언, 게시글 개수 데이터값 있으면 개수 x에 10 나누고 올림해서 lastPage에 할당 데이터 없으면 1할당  ex) 153 개 --> 16 page
  const lastPage = props.count ? Math.ceil(props.count / 10) : 1;
  // ----------------------------------------------------------

  // Page 번호 누르면 onClickPage 함수 실행
  // HTML span 요소에 event.target 존재하지 않으면 return
  // 클릭한 페이지 refetch 하기
  // currentId state 값에 선택한 페이지 id 저장
  const onClickPage = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event?.target instanceof HTMLDivElement)) return;
    props.refetch({ page: Number(event.target.id) });
    setCurrentId(Number(event.target.id));
    console.log(event.target);
  };
  // ----------------------------------------------------------

  // 이전페이지 이동 클릭하면 onClickPrevPage 실행
  // startPage 1이면 return
  //  startPage, currentId state 에 임시저장된 값 - 10
  // page refetch
  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    setCurrentId(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  // startPage+10 이 lastPage 이하면 아래것들 실행 --> 마지막 페이지 이후 페이지 생성 안하기 위함!!
  // 이전페이지 반대
  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      setCurrentId(startPage + 10);
      props.refetch({ page: startPage + 10 });
    }
  };
  // ----------------------------------------------------------
  return (
    <PaginationUI
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      currentId={currentId}
      lastPage={lastPage}
    />
  );
}
