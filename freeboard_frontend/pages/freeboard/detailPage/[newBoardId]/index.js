import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"
import {
    WriterInfoBox,
    Wrapper,
    HeaderBox,
    Thumb,
    ProfileBox,
    ImgIcon,
    ProfileWriter,
    ProfileCreatedTime,
    HeaderTool,
    LinkTool,
    LocationTool,
    ContentsBox,
    ContentsTitle,
    Title,
    ContentsImgBox,
    FetchContents,
    ContentsImg,
    DetailContents

} from "../../../../styles/boardStyled"
import {AiOutlineLink} from "react-icons/ai"
import {VscLocation} from "react-icons/vsc"


const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
            createdAt
        }
    }
`


export default function DetailPage () {
    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD,{
        variables: {
            boardId: router.query.newBoardId
        }
    })
    console.log(data)

    return (
        
    // <div>{data ?. fetchBoard._id}</div> 
        <Wrapper>
            <HeaderBox>
                <WriterInfoBox>
                    <Thumb>
                        <ImgIcon src="/pizza.png"/>
                    </Thumb>
                    <ProfileBox>
                       <ProfileWriter>
                            {data ?. fetchBoard.writer}
                       </ProfileWriter>
                       <ProfileCreatedTime>
                          DATE: {data ?. fetchBoard.createdAt}
                       </ProfileCreatedTime>
                    </ProfileBox>
                </WriterInfoBox>
                <HeaderTool>
                    <LinkTool>
                        <AiOutlineLink size={40}/>
                    </LinkTool>
                    <LocationTool>
                        <VscLocation size={40}/>
                    </LocationTool>
                </HeaderTool>
            </HeaderBox>
            <ContentsBox>
                <ContentsTitle>
                    <Title>
                        {data ?. fetchBoard.title}
                    </Title>
                </ContentsTitle>
                <ContentsImgBox>
                    <ContentsImg src="/pizza.png"/>
                </ContentsImgBox>
                <FetchContents>
                    <DetailContents>
                        {data ?. fetchBoard.contents}
                    </DetailContents>
                </FetchContents>
            </ContentsBox>
        </Wrapper>
    
    )
}



// query{
//     fetchBoard(boardId:"62c7010dbc5ba3002a70d43f"){
//       title
//       contents
//       likeCount
//       dislikeCount
      
//     }
//   }




// updateBoard(
//     updateBoardInput: UpdateBoardInput!
//     password: String
//     boardId: ID!
//     ): Board!
//     type Board {
//     _id: ID!
//     writer: String
//     title: String!
//     contents: String!
//     youtubeUrl: String
//     likeCount: Int!
//     dislikeCount: Int!
//     images: [String!]
//     boardAddress: BoardAddress
//     user: User
//     createdAt: DateTime!
//     updatedAt: DateTime!
//     deletedAt: DateTime
// }
    