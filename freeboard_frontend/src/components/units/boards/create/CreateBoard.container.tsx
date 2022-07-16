import { ChangeEvent, useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_BOARD, UPDATE_BOARD } from './CreateBoard.queries';
import { useRouter } from 'next/router'
import CreateBoardUI from './CreateBoard.presenter';
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs } from '../../../../commons/types/generated/types';
import { ICreateBoardProps, IMyVariables } from './CreateBoard.types';



export default function CreateBoardContainer (props: ICreateBoardProps) {

    const [writer,setWriter] = useState("");
    const [writerError,setWriterError] = useState("");
    const [password,setPassword] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [subject, setSubject] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [contents, setContents] = useState("");
    const [contentsError, setContentsError] = useState("");
    const router = useRouter();
    const [createBoard] = useMutation<Pick<IMutation,"createBoard">,IMutationCreateBoardArgs>(CREATE_BOARD)
    const [updateBoard] = useMutation<Pick<IMutation,"updateBoard">,IMutationUpdateBoardArgs>(UPDATE_BOARD)

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
        (event.target.value) === "" ? setWriterError("이름이 비어있습니다. 이름을 적어주세요") : setWriterError("")
    }
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        (event.target.value) === "" ? setPasswordError("비밀번호가 비어있습니다. 비밀번호를 적어주세요") : setPasswordError("")
    }
    const onChangeSubject = (event: ChangeEvent<HTMLInputElement>) => {
        setSubject(event.target.value);
        (event.target.value) === "" ? setSubjectError("제목이 비어있습니다. 제목을 적어주세요") : setSubjectError("")
    }
    const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContents(event.target.value);
        (event.target.value) === "" ? setContentsError("내용이 비어있습니다. 내용을 적어주세요"): setContentsError("")
    }

    const onClickSubmitButton = async () => {
      if (!writer) setWriterError("이름이 비어있습니다. 이름을 적어주세요")
      if (!password) setPasswordError("비밀번호가 비어있습니다. 비밀번호를 적어주세요")
      if (!subject) setSubjectError("제목이 비어있습니다. 제목을 적어주세요")
      if (!contents) setContentsError("내용이 비어있습니다. 내용을 적어주세요")
      if (writer!=="" && password!=="" && subject!=="" && contents!=="") {
        alert("게시글이 등록되었습니다.")
        try{
          const result = await createBoard({
            variables: { createBoardInput:{
              writer,
              password,
              title: subject,
              contents
  
            }
            }
          })
          console.log(result.data)
          router.push(`/freeboard/${result.data?.createBoard?._id}`)
        }
        catch (error) {
          console.log(error.message)
          alert("실패했습니다!")
        }
      }
  }

  const onClickUpdate = async () => {
    
    const myVariables: IMyVariables = {
      boardId: router.query.newBoardId as string,
      password,
      updateBoardInput: {
        title: subject,
        contents,
      }
    }
    if(subject) myVariables.updateBoardInput.title = subject
    if(contents) myVariables.updateBoardInput.contents = contents
    
    const result = await updateBoard({
        variables: myVariables
    })


    console.log(router)
    router.push(`/freeboard/${result.data?.updateBoard._id}`)

    } 
    




    return <CreateBoardUI
        onChangeWriter = {onChangeWriter}
        onChangePassword = {onChangePassword}
        onChangeSubject = {onChangeSubject}
        onChangeContents = {onChangeContents}
        onClickSubmitButton = {onClickSubmitButton}
        onClickUpdate = {onClickUpdate}
        writerError = {writerError}
        passwordError = {passwordError}
        subjectError = {subjectError}
        contentsError = {contentsError}
        isEdit = {props.isEdit}
    />

}