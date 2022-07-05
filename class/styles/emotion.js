import styled from '@emotion/styled'

export const Wrapper = styled.div `
    width: 640px;
    height: 100%;
    padding-top: 70px;
`
export const WrapperHeader = styled.div`
    padding: 0px 40px;
`
export const Search = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`
export const RowContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ColContent = styled.div`
    display: flex;
    flex-direction: column;
`
export const BigText = styled.p`
    font-weight: 700;
    font-size: 40px;
    line-height: 58px;
`
export const SmallText = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
`
export const UserInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const UserImg = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid gray;
    margin-right: 19px;
`
export const MenuRow = styled.div`
    display: flex;
    margin-bottom: 50px;
`
export const Menu = styled.div`
    margin-right: 50px;
    /* :hover { border-bottom: 1px solid #FF1B6D; }; */
`
export const MenuDetail = styled.a`
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 30px;
    line-height: 43px;
    color: #CACACA;
    :hover { color: #FF1B6D; text-decoration:underline; text-underline-position: under; text-decoration-color: #FF1B6D;};
    :link {color: #FF1B6D; text-decoration:underline; text-underline-position: under; text-decoration-color: #FF1B6D;};
`
export const WrapperBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-top: 1px solid #DCDCDC;
    border-bottom: 1px solid #DCDCDC;
    width: 100%;
    height: 695px;
    padding: 0px 40px;
`
export const Question = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const QuestionNum = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #ADADAD;
`
export const QuestionTitle = styled.div`
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
`
export const WrapperNav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 14px;
`
export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :hover{ color : #FF1B6D;};
`
export const NavTitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #ADADAD;
    :hover {color: #FF1B6D;};
`