import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";
import styled from "@emotion/styled";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            _id
            writer
            title
            contents
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    width: 31em;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5em;
    border: 1px solid #c305e0;
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.1);
`;
const Writer = styled.div`
    font-size: 25px;
    color: white;
`;
const Title = styled.div`
    font-weight: 700;
    font-size: 30px;
    margin-top: 1em;
    color: white;
`;
const Contents = styled.div`
    padding: 1em;
    width: 10em;
    height: 10em;
    color: white;
    font-size: 30px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    margin-top: 1em;
`;
const Line = styled.div`
    border: 1px solid #fff;
    width: 100%;
    height: 1px;
    margin-top: 1em;
`;
export default function StaticRoutedBoardPage() {
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.id },
    });

    console.log(data);

    return (
        <Wrapper>
            <Writer>{data?.fetchBoard.writer}</Writer>
            <Line />
            <Title>{data?.fetchBoard.title}</Title>

            {typeof window !== "undefined" ? (
                <Contents
                    dangerouslySetInnerHTML={{
                        __html: Dompurify.sanitize(data?.fetchBoard.contents),
                    }}
                ></Contents>
            ) : (
                <Contents />
            )}
        </Wrapper>
    );
}
