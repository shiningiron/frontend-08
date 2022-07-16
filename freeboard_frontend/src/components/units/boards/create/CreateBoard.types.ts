
import { ChangeEvent } from "react"
import { IQuery, } from "../../../../commons/types/generated/types"

export interface ICreateBoardUIProps {
    onClickSubmitButton: () => void
    onClickUpdate: () => void
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeSubject: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
    writerError : string
    passwordError : string
    subjectError : string
    contentsError : string
    isEdit : boolean
    data? : Pick<IQuery,"fetchBoard">
}

export interface IMyVariables {
    boardId: string
    password: string
    updateBoardInput: {
        title: string,
        contents: string
    }
}

export interface ICreateBoardProps {
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
    
}

