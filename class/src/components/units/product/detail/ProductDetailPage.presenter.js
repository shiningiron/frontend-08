
export default function ProductDetailUI(props) {
    
    return(
        <>
            <div>{props.ID}번 게시글 이동이 완료되었습니다.</div>
            <div>판매자: {props.data ?.fetchProduct.seller}</div> 
            <div>상품이름: {props.data ?.fetchProduct.name}</div>  
            <div>상품내용: {props.data ?.fetchProduct.detail}</div>
            <div>상품가격: {props.data ?.fetchProduct.price}</div>
            <button onClick={props.onClickMoveToEdit}>수정하러 이동하기</button>
        </>
    )

}