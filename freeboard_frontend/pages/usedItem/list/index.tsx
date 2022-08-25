import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { getDate } from "../../../src/commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../src/commons/types/generated/types";
import BoardListSearch from "../../../src/components/commons/searchbar/boardlistSearch/boardListSearch.container";
import ListItems from "../../../src/components/units/product/list/listItems";
import TodayItemList from "../../../src/components/units/product/list/todayItem";
import { useRecoilState } from "recoil";
import { imageUrlsState } from "../../../src/commons/store";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
      _id
      name
      remarks
      contents
      price
      images
      pickedCount
      seller {
        _id
        name
        email
      }
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TopWrapper = styled.div`
  display: flex;
`;
const BottomWrapper = styled.div`
  display: flex;
`;
const ListWrapper = styled.div`
  width: 50rem;
  height: 33rem;
  overflow: scroll;
  /* -ms-overflow-style: none; */
  margin-right: 30px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BoardList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Today = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 1.3rem;
  width: 11rem;
  height: 31rem;
  padding: 1.1rem;
  border-radius: 1.5rem;
  background-color: rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #fff;
  margin-bottom: 2rem;
`;
const NewUsedItemBtn = styled.button`
  /* position: fixed;
  right: 4rem;
  bottom: 5rem; */
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  font-size: 3rem;
  line-height: 3.3rem;
  cursor: pointer;
`;
const Heart = styled(IoIosHeartEmpty)`
  vertical-align: -9%;
`;
const HeartY = styled(IoIosHeart)`
  vertical-align: -9%;
  color: #6400ff;
`;
export default function UsedItemList() {
  const router = useRouter();
  const [today, setToday] = useState<IUseditem[]>([]);
  const [imageUrls, setImageUrls] = useRecoilState(imageUrlsState);
  const [keyword, setKeyword] = useState("");
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickToNewItem = () => {
    router.push("/usedItem/new");
  };

  const onClickToUsedItem = (data: IUseditem) => () => {
    const todayPicks: IUseditem[] = JSON.parse(
      localStorage.getItem(`${getDate(new Date())}`) || "[]"
    );
    const temp = todayPicks.filter((el) => el._id === data._id);

    if (temp.length === 1) {
      return router.push(`/usedItem/detail/${data._id}`);
    }
    const { __typename, ...newPick } = data;
    todayPicks.push(newPick);
    localStorage.setItem(`${getDate(new Date())}`, JSON.stringify(todayPicks));
    setToday(todayPicks);
    setImageUrls(["", "", ""]);
    router.push(`/usedItem/detail/${data._id}`);
  };
  // const onChangeKeyword = (value: string) => {
  //   setKeyword(value);
  // };

  useEffect(() => {
    const result = JSON.parse(
      localStorage.getItem(`${getDate(new Date())}`) || "[]"
    );
    setToday(result);
  }, []);
  return (
    <Wrapper>
      <TopWrapper>
        <ListWrapper>
          <InfiniteScroll
            pageStart={0}
            loadMore={onFetchMore}
            hasMore={true}
            useWindow={false}
          >
            <BoardList>
              {data?.fetchUseditems.map((el) => (
                <ListItems
                  key={uuidv4()}
                  el={el}
                  onClickToUsedItem={onClickToUsedItem}
                />
              ))}
            </BoardList>
          </InfiniteScroll>
        </ListWrapper>
        <Today>
          <div>{`Today's Viewed List`}</div>
          <TodayItemList today={today} />
        </Today>
      </TopWrapper>
      <BottomWrapper>
        <NewUsedItemBtn onClick={onClickToNewItem}>+</NewUsedItemBtn>
      </BottomWrapper>
    </Wrapper>
  );
}
