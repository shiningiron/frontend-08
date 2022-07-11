import * as A from "./createArticle.styles"

export default function ArticleUI (props) {

    return (
        <A.Wrapper>
            <A.InputBox>
                <A.Input type="text" onChange={props.onChangeWriter}/>
            </A.InputBox>
            <A.InputBox>
                <A.Input type="text" onChange={props.onChangeTitle}/>
            </A.InputBox>
            <A.InputBox>
                <A.Input type="text" onChange={props.onChangeContents}/>
            </A.InputBox>
            <A.Button onClick={props.onClickGraphqlApi}>GRAPHQL-API 요청하기</A.Button>
        </A.Wrapper>
    )
}