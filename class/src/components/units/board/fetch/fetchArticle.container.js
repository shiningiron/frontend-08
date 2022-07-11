import { useQuery } from '@apollo/client'
import { FETCH_BOARD } from './fetchArticle.query'
import { useRouter } from 'next/router'
import FetchArticleUI from './fetchArticle.presenter'


export default function StaticRoutedBoardPage(){

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD,{
        variables: { number: Number(router.query.ArticleNum) }
    })

    console.log(data)

    return <FetchArticleUI
        ArticleNum = {router.query.ArticleNum}
        data = {data}

    />

}