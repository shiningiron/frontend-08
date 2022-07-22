import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function Pagination(props) {
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
    : 1;

  const [startPage, setStartPage] = useState(1);
  const [currentId, setCurrentId] = useState("1");
  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event?.target instanceof HTMLSpanElement)) return;
    props.refetch({ page: Number(event.target.id) });
    setCurrentId(event.target.id);
    console.log(event.target);
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    setCurrentId(`${(prev) => prev - 10}`);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      setCurrentId(`${(prev) => prev + 10}`);
      props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <div>
      <span onClick={onClickPrevPage}>&lt;</span>
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= lastPage ? (
          <span
            key={index + startPage}
            id={String(index + startPage)}
            onClick={onClickPage}
            style={{
              padding: "10px",
              color:
                Number(currentId) === Number(index + startPage)
                  ? "midnightblue"
                  : "gray",
              fontSize:
                Number(currentId) === Number(index + startPage)
                  ? "50px"
                  : "30px",
            }}
          >
            {index + startPage}
          </span>
        ) : (
          <span></span>
        )
      )}
      <span onClick={onClickNextPage}>&gt;</span>
    </div>
  );
}
