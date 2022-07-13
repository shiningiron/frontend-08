import styled from "@emotion/styled"

export const TextInput = styled.input`
    width: 30%;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    &:first-of-type{border: ${(props) => props.disabled ? `none` : `1px solid black`};} 
`
//처음에 가상 선택자로 first child 씀 페이지 이동중 잘 변경 되었지만 콘솔창에 
//The pseudo class ":first-child" is potentially unsafe when doing server-side rendering. Try changing it to ":first-of-type" next-dev
//이라고 에러가 뜸 메세지 추천을 따라 바꿔보니 에러가 안뜸 무슨 차이지??

export const TextArea = styled.textarea`
    width: 30%;
    height: 100px;
    border-radius: 5px;
    resize: none;
`
export const InputBox = styled.div`
    display: flex;
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const Button = styled.button`
    width: 30%;
    margin-top: 20px;
`