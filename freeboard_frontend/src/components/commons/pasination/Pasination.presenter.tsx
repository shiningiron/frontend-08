import { IPaginationUIProps } from "./pasination.types";
import { PageArrow, PageBox, PageNum } from "./Pasination.styles";
export default function PasinationUI(props: IPaginationUIProps) {
  return (
    <PageBox>
      <PageArrow onClick={props.onClickPrevPage}>{`<`}</PageArrow>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <PageNum
              key={props.startPage + index}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
              isActive={props?.currentId === index + props?.startPage}
            >
              {index + props.startPage}
            </PageNum>
          )
      )}
      <PageArrow onClick={props.onClickNextPage}>{`>`}</PageArrow>
    </PageBox>
  );
}
