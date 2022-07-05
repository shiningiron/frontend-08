import { Wrapper, RowContent, UserImg, SmallText, BigText, UserInfo, Header, Search, Menu, MenuDetail, WrapperBody, MenuRow, WrapperHeader, Question, QuestionNum, QuestionTitle, WrapperNav, Nav, NavTitle } from '../../../styles/emotion'
import {FaSearch} from'react-icons/fa'
import {MdArrowForwardIos} from'react-icons/md'
import{MdKeyboardArrowDown} from'react-icons/md'
import{AiOutlineHome} from'react-icons/ai'
import{RiMapPin2Line} from'react-icons/ri'
import{AiOutlineHeart} from'react-icons/ai'
import{BsPerson} from 'react-icons/bs'
export default function FaqPage() {

    //  여기는 자바스크립트 쓰는곳

    return (
        <Wrapper>
            <WrapperHeader>
                <Search>
                    <FaSearch size='20'/>
                </Search>
                <Header>
                    <BigText>마이</BigText>
                    <UserInfo>
                        <UserImg></UserImg>
                        <SmallText>임정아</SmallText>
                        <MdArrowForwardIos size='20'/>
                    </UserInfo>
                </Header>
                <MenuRow>
                    <Menu>
                        <MenuDetail>공지사항</MenuDetail>
                    </Menu>
                    <Menu>
                        <MenuDetail>이벤트</MenuDetail>
                    </Menu>
                    <Menu>
                        <MenuDetail>FAQ</MenuDetail>
                    </Menu>
                    <Menu>
                        <MenuDetail>Q&amp;A</MenuDetail>
                    </Menu>
                </MenuRow>
            </WrapperHeader>
            <WrapperBody>
                <RowContent>
                    <Question>
                        <QuestionNum>Q.01</QuestionNum>
                        <QuestionTitle>리뷰 작성은 어떻게  하나요?</QuestionTitle>
                    </Question>
                    <MdKeyboardArrowDown size='40'/>
                </RowContent>
                <RowContent>
                        <Question>
                            <QuestionNum>Q.02</QuestionNum>
                            <QuestionTitle>리뷰 수정/삭제는 어떻게 하나요?</QuestionTitle>
                        </Question>
                        <MdKeyboardArrowDown size='40'/>
                </RowContent>
                <RowContent>
                        <Question>
                            <QuestionNum>Q.03</QuestionNum>
                            <QuestionTitle>아이디/비밀번호를 잊어버렸어요</QuestionTitle>
                        </Question>
                        <MdKeyboardArrowDown size='40'/>
                </RowContent>
                <RowContent>
                    <Question>
                        <QuestionNum>Q.04</QuestionNum>
                        <QuestionTitle>회원탈퇴를 하고싶어요.</QuestionTitle>
                    </Question>
                    <MdKeyboardArrowDown size='40'/>
                </RowContent>
                <RowContent>
                    <Question>
                        <QuestionNum>Q.05</QuestionNum>
                        <QuestionTitle>출발지 설정은 어떻게 하나요?</QuestionTitle>
                    </Question>
                    <MdKeyboardArrowDown size='40'/>
                </RowContent>
                <RowContent>
                    <Question>
                        <QuestionNum>Q.06</QuestionNum>
                        <QuestionTitle>비밀번호를 변경하고 싶어요.</QuestionTitle>
                    </Question>
                    <MdKeyboardArrowDown size='40'/>
                </RowContent>
            </WrapperBody>
            <WrapperNav>
                <Nav>
                    <AiOutlineHome size='40'/>
                    <NavTitle>홈</NavTitle>
                </Nav>
                <Nav>
                    <RiMapPin2Line size='40'/>
                    <NavTitle>잇츠로드</NavTitle>
                </Nav>
                <Nav>
                    <AiOutlineHeart size='40'/>
                    <NavTitle>마이룸</NavTitle>
                </Nav>
                <Nav>
                    <BsPerson size='40'/>
                    <NavTitle>마이</NavTitle>
                </Nav>
            </WrapperNav>

        </Wrapper>

    )
}