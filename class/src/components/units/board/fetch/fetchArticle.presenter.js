// import * as 
export default function FetchArticleUI(props) {
    

    return(
        <>
            <div>{props.ArticleNum}번 게시글 이동이 완료되었습니다.</div>
            <div>작성자: {props.data ? props.data.fetchBoard.writer : "받아오는 중 입니다."} </div> 
            <div>제목: {props.data && props.data.fetchBoard.title}</div>  
            <div>내용: {props.data?.fetchBoard.contents }</div>
        </>
    )
}