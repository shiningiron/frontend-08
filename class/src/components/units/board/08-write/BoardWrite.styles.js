import styled from "@emotion/styled"

export const RedInput = styled.input`
    border-color : red;
`
export const RedButton = styled.button`
    border-color: red;
    background-color: ${(props) => props.color ? "yellow" : "default"};
`
