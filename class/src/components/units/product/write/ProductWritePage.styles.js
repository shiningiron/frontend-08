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
// 찾아보니 first child는 부모 태그 안의 태그들 순서대로 카운트하여 스타일을 먹임 수정으로 태그 순서가 바뀌거나 하면 다른 태그에 스타일이 먹을수 있음
// first of type 은 가상 선택한 태그의 타입만 카운트함 그래서 좀 더 안전적?
// 그래도 합당한 이유같지는 않음 에러 메세지를 다시봄 server-side rendering이 눈에 자꾸 아른거림 mdn으로 찾아가서 둘의 차이점을 봤는데 한눈에 바로 들어오는 차이점이 보임
//!!!!! 브라우저 호환성!!!!  first-child 는 Internet Explorer와 모바일 safari 에서 호완이 안되는 버전이 있음 익스플로어 7 --> 동적으로 추가 될때 스타일 업데이트 안함
//IE8 에서는 링크  클릭하여 요소를 동적으로 넣으면 first-child링크가 포커스를 잃을 때까지 스타일이 적용안됨

//상품가격 무지성으로 막 올려서 적었는데 에러뜸 graphql에서 docs에 price 설명봄 숫자 범위가 있었음 

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