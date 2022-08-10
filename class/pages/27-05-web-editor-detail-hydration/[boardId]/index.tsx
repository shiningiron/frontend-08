import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

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

export default function StaticRoutedBoardPage() {
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });

    console.log(data);

    return (
        <>
            <div style={{ color: "red" }}>
                작성자:{data ? data.fetchBoard.writer : "받아오는 중 입니다"}
            </div>
            <div style={{ color: "green" }}>
                제목:{data ? data.fetchBoard.title : "받아오는 중 입니다"}
            </div>

            {typeof window !== "undefined" ? (
                <div
                    style={{ color: "blue" }}
                    dangerouslySetInnerHTML={{
                        __html: Dompurify.sanitize(data?.fetchBoard.contents),
                    }}
                ></div>
            ) : (
                <div style={{ color: "blue" }} />
            )}
            <div style={{ color: "brown" }}>주소: 구로구</div>
        </>
    );
}

// playground XSS 공격
// <img src='#' onerror='console.log(localStorage.getItem(\"accessToken\"))' />
