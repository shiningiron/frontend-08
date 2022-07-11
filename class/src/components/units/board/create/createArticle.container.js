import { useMutation} from '@apollo/client'
import { CREATE_BOARD } from './createArticle.queries'
import {useState} from 'react'
import { useRouter } from 'next/router'
import ArticleUI from './createArticle.presenter'

export default function graphqlMutationPage () {

    const router = useRouter()
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")    
    const [contents, setContents] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async() => {
        try{
            const result = await createBoard({
                variables: {
                    writer: writer,
                    title: title,
                    contents: contents
                }
            })
            router.push(`/quiz/06-02-container-presenter-query/${result.data.createBoard.number}`)
            console.log(result.data.createBoard.number)
        } catch (error) {
            console.log(error.message)
            alert("실패했습니다!!")
        }
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return <ArticleUI
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickGraphqlApi={onClickGraphqlApi}
    />
}