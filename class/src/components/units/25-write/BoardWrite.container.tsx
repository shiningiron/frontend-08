import { useMutation } from '@apollo/client'
import {ChangeEvent, useState} from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { useRouter } from 'next/router'
import { IBoardWriteProps } from './BoardWrite.types'
import { IMyVariables } from './BoardWrite.types'
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs } from '../../../../commons/types/generated/types'




export default function BoardWrite(props: IBoardWriteProps){
    const router = useRouter()
    const [mycolor,setMycolor] = useState(false)
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")    
    const [contents, setContents] = useState("")
    const [createBoard] = useMutation<Pick<IMutation,"createBoard">,IMutationCreateBoardArgs>(CREATE_BOARD)
    const [updateBoard] = useMutation<Pick<IMutation,"updateBoard">,IMutationUpdateBoardArgs>(UPDATE_BOARD)
    
        const onClickCreate = async() => {
            const result = await createBoard({
                variables: {
                    writer: writer,
                    title: title,
                    contents: contents
                }
            })
            
            console.log(result)
            console.log(result.data?.createBoard?.message)
            router.push(`/10-01-typescript-boards/${result.data?.createBoard?.number}`)
        }

        const onClickUpdate = async () => {
            
            const myVariables: IMyVariables = {number: Number(router.query.number)} 
            if(writer) myVariables.writer = writer
            if(title) myVariables.title = title
            if(contents) myVariables.contents = contents

            const result = await updateBoard({
                variables: myVariables
            })
            console.log(router)
            router.push(`/10-01-typescript-boards/${result.data?.updateBoard?.number}`)
            //router.push(`/09-01-boards/${router.query.number}`) --> 이것도 가능@@
        }
        


        const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
            setWriter(event.target.value)
            if(event.target.value && title && contents){
                setMycolor(true)
            } else {
                setMycolor(false)
            }
        }
    
        const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value)
            if(writer && event.target.value && contents){
                setMycolor(true)
            } else {
                setMycolor(false)
            }
        }
    
        const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
            setContents(event.target.value)
            if(writer && title && event.target.value){
                setMycolor(true)
            } else {
                setMycolor(false)
            }
        }

        

        
    
    return (
        <BoardWriteUI
            onClickCreate = {onClickCreate}
            onClickUpdate = {onClickUpdate}
            onChangeWriter = {onChangeWriter}
            onChangeTitle = {onChangeTitle}
            onChangeContents = {onChangeContents}
            mycolor={mycolor}
            isEdit={props.isEdit}
            data={props.data}
        />
    )

}