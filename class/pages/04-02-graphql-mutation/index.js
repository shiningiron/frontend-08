import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
     mutation{
        createBoard(writer:"다다다", title:"제목입니다~~", contents:"내용이에요!!!"){
            _id
            number
            message
        }
    }
`

export default function graphqlMutationPage () {

    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickGraphqlAPI = async() => {
        const result = await createBoard()
        console.log(result)
        console.log(result.data.createBoard.message)
    }

    return (
        <button onClick={onClickGraphqlAPI}>GRAPHQL-API 요청하기</button>
    )
}