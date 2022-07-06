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
export const ErrorMassage = styled.span`
    color:red;
`

// 로그인 페이지
export const LoginWrapper = styled.div`
    width: 640px;
    padding: 220px 50px 60px;
    background-color: rgba(48, 43, 43, 0.8) ;
`
export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const LogoText = styled.h1`
    font-weight: 700;
    font-size: 60px;
    color: #FFFFFF;
`
export const LoginRowBetween = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #7D7D7D;
`
export const LoginRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
`
export const LoginCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 20px 0px;
`
export const LoginEmail = styled.input`
    background-color: rgba(255,255,255,0);
    border: none;
    caret-color: white;
    :focus { outline:none;};
    width: 100%;
    font-weight: 400;
    font-size: 24px;
    color: #FFFFFF;
`
export const ClearIcon = styled.div`
    display: flex;
    align-items: center;
    color: gray;
`
export const LoginBtn = styled.button`
    width: 540px;
    height: 76px;
    background: rgba(255, 27, 109, 0.6);
    border: none;
    border-radius: 38px;
    font-weight: 700;
    font-size: 26px;
    color: #ffffff;
    :active{background: rgba(255, 27, 109, 0.4);};
    margin-bottom: 20px;
`
export const KakaoLoginBtn = styled.button`
    width: 540px;
    height: 76px;
    background: rgba(255, 27, 109, 0);
    border: 2px solid #FAE100;
    border-radius: 38px;
    font-weight: 700;
    font-size: 26px;
    color: #ffffff;
    :active{opacity: 1;};
    margin: 20px 0px;
`
export const LoginHelp = styled.div`
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
`
export const Partition = styled.div`
    width: 0px;
    border: 1px solid #9F9F9F
`
export const LoginErrorMassage = styled.span`
    color:red;
`