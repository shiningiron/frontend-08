import { Searchbar, SearchbarInput } from "./boardListSearch.styles";
import { IBoardListSearchUIProps } from "./boardListSearch.types";

export default function BoardListSearchUI(props: IBoardListSearchUIProps) {
  return (
    <Searchbar>
      <SearchbarInput
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}
