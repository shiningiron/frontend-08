

import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedBoardPage(){

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD,{
        variables: { number: Number(router.query.c) }
    })

    console.log(data)


    return(
        <>
            <div>{router.query.c}번 게시글 이동이 완료되었습니다.</div>
            <div>작성자: {data ? data.fetchBoard.writer : "받아오는 중 입니다."} </div> 
            <div>제목: {data && data.fetchBoard.title}</div>  
            <div>내용: {data?.fetchBoard.contents }</div>
        </>
    )

}

