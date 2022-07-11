// import * as s from "./BoardWrite.styles"
import sss, {RedInput, RedButton} from "./BoardWrite.styles"
export default function BoardWriteUI(props){

    return (
        <>
            작성자: <s.RedButton type="text" onChange={props.onChangeWriter}/><br/>
            제목: <input type="text" onChange={props.onChangeTitle}/><br/>
            내용: <input type="text" onChange={props.onChangeContents}/><br/>
            <RedButton onClick={props.onClickGraphqlAPI}>GRAPHQL-API 요청하기</RedButton>
        </>
    )

}