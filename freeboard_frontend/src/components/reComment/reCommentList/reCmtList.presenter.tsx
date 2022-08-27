import * as C from "../../../commons/styles/useditemReComment.styles";
// import InfiniteScroll from "react-infinite-scroller";
import ReCmtItem from "./reCmtItem";
import { v4 as uuidv4 } from "uuid";
export default function ReCmtListUI(props: any) {
  return (
    <C.ListWrapper id="list">
      {props.data?.fetchUseditemQuestionAnswers.map((el: any) => (
        <ReCmtItem key={uuidv4()} el={el} questionId={props.questionId} />
      )) || <div></div>}
    </C.ListWrapper>
  );
}
