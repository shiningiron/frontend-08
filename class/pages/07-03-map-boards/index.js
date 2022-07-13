
import { useQuery, gql } from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`
const Row = styled.div`
    width: 25%;
    display: flex;
`
const Column = styled.div`
    width: 25%;
`

export default function StaticRoutedBoardPage(){


    const {data} = useQuery(FETCH_BOARDS)



    return(
        <>
        {data?.fetchBoards.map((el, index) => (
            // <Fragment key={el.number}>
            <Row key={el.number}>
                <Column><input type="checkbox" /></Column>
                <Column>{el.number}</Column>
                <Column>{el.writer}</Column>
                <Column>{el.contents}</Column>
                <Column>
                    <button id={el.number} onClick={onClickDelete}>삭제</button>
                </Column>
            </Row>
        ))}
    </>
    )

}
