import * as A from "./ProductWritePage.styles"
export default function ProductPageUI(props){
    
    return (
        <A.Wrapper>  
            {props.isEdit ?"":"판매자" } <A.TextInput type="text" onChange={props.onChangeSeller} disabled={props.isEdit}/>
            상품이름 <A.TextInput type="text" onChange={props.onChangeName} />
            상품내용 <A.TextArea type="text" onChange={props.onChangeDetail}/>
            가격 <A.TextInput type="text" onChange={props.onChangePrice}/>
            <A.Button
                onClick = { props.isEdit ?props.onClickUpdate :props.onClickCreate }
            >
                {props.isEdit ? "수정하기" : "등록하기"}
            </A.Button>
        </A.Wrapper>
    )

}
//판매자 text 조건에 따라 지우려고 옵셔널 체이닝 사용 --> 안됨 ({props.isEdit ?. "판매자:"}) <--식별자가 필요하다고 뜸 // 삼항연상자로 해보니 됨  이유를 모르겠음