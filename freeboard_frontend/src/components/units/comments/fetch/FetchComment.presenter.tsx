import { IFetchCommentUIProps } from "./fetchComment.types";
import CommentsItem from "../edit/commentEdit.container";
import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  overflow: scroll;
  width: 100%;
  height: 600px;
`;

export default function FetchCommentUI(props: IFetchCommentUIProps) {
  console.log(props.data?.fetchBoardComments);
  return (
    <Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onFetchMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchBoardComments.map((el) => (
          <CommentsItem key={el._id} el={el} data={props.data} />
        )) || <div></div>}
      </InfiniteScroll>
    </Wrapper>
  );
}
