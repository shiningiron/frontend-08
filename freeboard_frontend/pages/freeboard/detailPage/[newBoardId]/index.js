import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"
import {
    WriterInfoBox,
    Wrapper,
    HeaderBox,
    Thumb,
    ProfileBox,
    Img

} from "../../../../styles/boardStyled"


const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
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
    <div>{data ?. fetchBoard._id}</div>
        // <Wrapper>
            
        //     <HeaderBox>
        //         <WriterInfoBox>
        //             <Thumb>
                        
        //             </Thumb>
        //             <ProfileBox>
        //                 <Img/>
        //             </ProfileBox>
        //         </WriterInfoBox>
        //     </HeaderBox>
        // </Wrapper>
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
    