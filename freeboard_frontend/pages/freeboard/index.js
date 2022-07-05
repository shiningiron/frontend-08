import { Wrapper, Title, ContentRow, ContentCol, SmallTitle, Input, ContentBox, SearchBtn, UploadBtn, UserName, Password, UserInfo, PostNum, Radio, RadioBtn, RadioBtnLabel, Join, JoinBtn } from '../../styles/boardStyled'
export default function freeboard() {

    //  여기는 자바스크립트 쓰는곳

    return (
        <Wrapper>
            <Title>게시물 등록</Title>
            <UserInfo>
                <ContentCol>
                    <SmallTitle>작성자</SmallTitle>
                    <UserName type='text' placeholder='이름을 적주세요'/>
                </ContentCol>
                <ContentCol>
                    <SmallTitle>비밀번호</SmallTitle>
                    <Password type='text' placeholder='비밀번호를 입력해주세요'/>
                </ContentCol>
            </UserInfo>
            <ContentCol>
                <SmallTitle>제목</SmallTitle>
                <Input type='text' placeholder=''/>
            </ContentCol>
            <ContentCol>
                <SmallTitle>내용</SmallTitle>
                <ContentBox type='text' placeholder='내용을 작성해주세요'/>
            </ContentCol>
            <ContentCol>
                <SmallTitle>주소</SmallTitle>
                <ContentRow>
                    <PostNum type='number'/>
                    <SearchBtn>우편번호 검색</SearchBtn>
                </ContentRow>
                <Input type='text'/>
                <Input type='text'/>
                <SmallTitle>유튜브</SmallTitle>
                <Input type='url' placeholder='링크를 복사해주세요'/>
            </ContentCol>
            <ContentCol>
                <SmallTitle>사진 첨부</SmallTitle>
                <ContentRow>
                    <UploadBtn>+<br/>upload</UploadBtn>
                    <UploadBtn>+<br/>upload</UploadBtn>
                    <UploadBtn>+<br/>upload</UploadBtn>
                </ContentRow>
            </ContentCol>
            <ContentCol>
                <SmallTitle>메인 설정</SmallTitle>
                <ContentRow>
                    <Radio>
                        <RadioBtn type='radio' name='radio'/>
                        <RadioBtnLabel/> 유튜브
                    </Radio>
                    <Radio>
                        <RadioBtn type='radio' name='radio'/>
                        <RadioBtnLabel/> 사진
                    </Radio>
                </ContentRow>
                <Join>
                    <JoinBtn>등록하기</JoinBtn>
                </Join>
                
            </ContentCol>
        </Wrapper>
    
    )
}