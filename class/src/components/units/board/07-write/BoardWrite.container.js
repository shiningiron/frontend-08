import { useMutation } from '@apollo/client'
import {useState} from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'



export default function BoardWrite(){
    
    const [mycolor,setMycolor] = useState(false)
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")    
    const [contents, setContents] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)
    
        const onClickGraphqlAPI = async() => {
            const result = await createBoard({
                variables: {
                    writer: writer,
                    title: title,
                    contents: contents
                }
            })
            console.log(result)
            console.log(result.data.createBoard.message)
        }
    
        const onChangeWriter = (event) => {
            setWriter(event.target.value)
            if(event.target.value && title && contents){
                setMycolor(true)
            } else {
                setMycolor(false)
            }
        }
    
        const onChangeTitle = (event) => {
            setTitle(event.target.value)
            if(writer && event.target.value && contents){
                setMycolor(true)
            } else {
                setMycolor(false)
            }
        }
    
        const onChangeContents = (event) => {
            setContents(event.target.value)
            if(writer && title && event.target.value){
                setMycolor(true)
            } else {
                setMycolor(false)
            }
        }

        

        
    
    return (
        <BoardWriteUI
            onClickGraphqlAPI = {onClickGraphqlAPI}
            onChangeWriter = {onChangeWriter}
            onChangeTitle = {onChangeTitle}
            onChangeContents = {onChangeContents}
            mycolor={mycolor}
        />
    )

}