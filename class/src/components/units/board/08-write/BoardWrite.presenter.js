import * as s from "./BoardWrite.styles"
// import sss, {RedInput, RedButton} from "./BoardWrite.styles"
export default function BoardWriteUI(props){
    
    return (
        <>
            작성자: <s.RedInput type="text" onChange={props.onChangeWriter}/><br/>
            제목: <input type="text" onChange={props.onChangeTitle}/><br/>
            내용: <input type="text" onChange={props.onChangeContents}/><br/>
            <s.RedButton qqq={props.mycolor} 
            onClick = { props.isEdit ?props.onClickUpdate :props.onClickCreate }
            >
                {props.isEdit ? "수정하기" : "등록하기"}
            </s.RedButton>
        </>
    )

}