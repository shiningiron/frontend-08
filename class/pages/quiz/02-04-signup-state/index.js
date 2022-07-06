import {useState} from 'react'
import { ErrorMassage } from '../../../styles/emotion'
export default function signupStatePage () {

    const [email, setEmail] = useState("")
    const [pw1, setPw1] = useState("")
    const [pw2, setPw2] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")


    function onChangeEmail (event) {
        setEmail(event.target.value)
    }
    function onChangePw1 (event) {
        setPw1(event.target.value)
    }
    function onChangePw2 (event) {
        setPw2(event.target.value)
    }
    function onClickJoin (){
        if (email.includes("@")===false) {
            setEmailError("옳바르지 않은 유형의 이메일입니다.")
        } else {
            setEmailError("")
        }
        if (pw1 === pw2) {
            setPasswordError("")
        } else {
            setPasswordError("비밀번호를 다시 한번 확인해주세요 비밀번호가 다릅니다")
        }

    }


    return (
        <div>
            <label>이메일</label>
            <input type='email' onChange={onChangeEmail}/><br/>
            <ErrorMassage>{emailError}</ErrorMassage><br/>
            <label>비밀번호</label>
            <input type='password' onChange={onChangePw1}/><br/><br/>
            <label>비밀번호 확인</label>
            <input type='password' onChange={onChangePw2}/><br/>
            <ErrorMassage>{passwordError}</ErrorMassage><br/>
            <button onClick={onClickJoin}>가입하기</button>
        </div>

    )
}