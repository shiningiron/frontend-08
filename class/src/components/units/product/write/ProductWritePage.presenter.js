import * as s from "../../board/08-write/BoardWrite.styles"
// import sss, {RedInput, RedButton} from "./BoardWrite.styles"
export default function ProductPageUI(props){
    
    return (
        <>
            판매자: <s.RedInput type="text" onChange={props.onChangeSeller}/><br/>
            상품이름: <input type="text" onChange={props.onChangeName}/><br/>
            상품내용: <input type="text" onChange={props.onChangeDetail}/><br/>
            가격: <input type="number" onChange={props.onChangePrice}/><bt/>
            <s.RedButton color={props.mycolor} 
            onClick = { props.isEdit ?props.onClickUpdate :props.onClickCreate }
            >
                {props.isEdit ? "수정하기" : "등록하기"}
            </s.RedButton>
        </>
    )

}