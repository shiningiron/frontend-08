import * as A from "./createArticle.styles"

export default function ArticleUI (props) {
    
    return (
        <A.Wrapper>
            <A.InputBox>
                <A.Label>작 성 자&ensp;:</A.Label>
                <A.Input type="text" onChange={props.onChangeWriter}/>
            </A.InputBox>
            <A.InputBox>
                <A.Label>제&ensp;&ensp;&nbsp;목&ensp;: </A.Label>
                <A.Input type="text" onChange={props.onChangeTitle}/>
            </A.InputBox>
            <A.InputBox>
                <A.Label>내&ensp;&ensp;&nbsp;용&ensp;: </A.Label>
                <A.Input type="text" onChange={props.onChangeContents}/>
            </A.InputBox>
            <A.Button onClick={props.onClickGraphqlApi} disabled={props.disabled()} >GRAPHQL-API 요청하기</A.Button>
        </A.Wrapper>
    )
}