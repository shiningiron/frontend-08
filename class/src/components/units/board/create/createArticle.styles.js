import styled from "@emotion/styled";


export const Wrapper = styled.div`
    width: 500px;
    margin: 200px;
    padding: 30px;
    background-color: rgba(194,86,174,0.4);
    border-radius: 10px;
    box-shadow: 4px 7px 11px rgba(194,86,174,0.8);
`
export const Label = styled.div`
    width: 25%;
    font-size: 26px;
    padding-right: 10px;
    color: white;
`
export const InputBox = styled.div`
    display: flex;
    width: 100%;
    padding-top: 20px;
`
export const Button = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: 30px;
    font-size: 26px;
    color : white;
    border-radius: 5px;
    border: none;
    background-color: rgba(106,50,232,0.3);
    &:hover{background-color: rgba(106,50,232,0.5);}
    &:active{background-color: rgba(106,50,232,0.8);}
` 

export const Input = styled.input`
    width: 75%;
    padding: 5px;
    font-size: 26px;
    border-radius: 5px;
    border: none;
    &:focus{outline:5px solid rgba(194,86,174,0.8)}
    caret-color: rgba(194,86,174,0.4);
    


`