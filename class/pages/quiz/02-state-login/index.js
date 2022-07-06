import { useState } from "react";
import { LoginWrapper, LogoText, Logo, LoginRowBetween, LoginEmail, LoginErrorMassage, ClearIcon, LoginCol, LoginBtn, LoginText, LoginRow, LoginHelp, Partition, KakaoLoginBtn } from '../../../styles/emotion'
import {MdOutlinePlace} from'react-icons/md'
import{FaTimesCircle} from'react-icons/fa'


export default function loginPage (){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    function onChangeEmail(event){
        setEmail(event.target.value);
    }
    function onChangePassword(event){
        setPassword(event.target.value);
    }

    function onClickSignup() {
        if ((email.includes("@")===false) || (email === "")) {
            setEmailError("이메일 주소를 다시 확인해주세요")
        } else {
            setEmailError("")
        }
        if (((password.length < 8) || (password.length > 16)) || password === " ") {
            setPasswordError("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
        } else {
            setPasswordError("")
        }
    } 



    return (
        <LoginWrapper>
            <Logo>
                <MdOutlinePlace size='100'/>
                <LogoText>잇츠로드</LogoText>
            </Logo>
            <LoginCol>
                <LoginRowBetween>
                    <LoginEmail type='email' onChange={onChangeEmail}/>
                    <ClearIcon>
                        <FaTimesCircle/>
                    </ClearIcon>
                </LoginRowBetween>
                <LoginErrorMassage>{emailError}</LoginErrorMassage>
            </LoginCol>
            <LoginCol>
                <LoginRowBetween>
                    <LoginEmail type='password' onChange={onChangePassword}/>
                    <ClearIcon>
                        <FaTimesCircle/>
                    </ClearIcon>
                </LoginRowBetween>
                <LoginErrorMassage>{passwordError}</LoginErrorMassage>
            </LoginCol>
            <LoginBtn onClick={onClickSignup}>로그인</LoginBtn>
            <LoginCol>
                <LoginRow>
                    <LoginHelp>이메일 찾기</LoginHelp>
                    <Partition/>
                    <LoginHelp>비밀번호 찾기</LoginHelp>
                    <Partition/>
                    <LoginHelp>회원가입</LoginHelp>
                </LoginRow>
            </LoginCol>
            <KakaoLoginBtn>카카오톡으로 로그인</KakaoLoginBtn>
        </LoginWrapper>

    )
}