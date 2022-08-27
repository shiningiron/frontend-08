import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CmtListUI from "./cmtList.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./cmtList.queries";

export default function CmtListContainer() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });
  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestions)
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };

        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return <CmtListUI data={data} onFetchMore={onFetchMore} />;
}
