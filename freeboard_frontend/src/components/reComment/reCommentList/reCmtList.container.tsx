import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { cmtIdState } from "../../../commons/store";
import ReCmtListUI from "./reCmtList.presenter";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "./reCmtList.queries";

export default function ReCmtListContainer(props: any) {
  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.questionId,
    },
  });

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestionAnswers)
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          };

        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };

  return (
    <ReCmtListUI
      data={data}
      onFetchMore={onFetchMore}
      questionId={props.questionId}
    />
  );
}
