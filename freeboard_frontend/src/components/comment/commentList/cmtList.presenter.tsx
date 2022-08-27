import * as C from "../../../commons/styles/useditemComment.styles";
// import InfiniteScroll from "react-infinite-scroller";
import CmtItem from "./cmtItem";
import { v4 as uuidv4 } from "uuid";
export default function CmtListUI(props: any) {
  return (
    <C.ListWrapper id="list">
      {props.data?.fetchUseditemQuestions.map((el: any) => (
        <CmtItem key={uuidv4()} el={el} />
      )) || <div></div>}
    </C.ListWrapper>
  );
}
