import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id
            writer
            title
            contents
        }
    }
`;

export default function FetchPolicyTest() {
    const { data } = useQuery(FETCH_BOARDS, {
        fetchPolicy: "network-only",
    });

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>{el.title}</div>
            ))}
        </div>
    );
}
