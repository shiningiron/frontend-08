import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import FetchPolicyTest from "../../src/components/units/21-fetchPolicy";

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

export default function GlobalStatePage() {
    const { data } = useQuery(FETCH_BOARDS);
    const [aaa, setAaa] = useState(false);
    const onClickAaa = () => {
        setAaa(true);
    };
    return (
        <>
            <button onClick={onClickAaa}>
                클릭하면 새로운 컴포넌트가 나타납니다!!
            </button>
            <div>{aaa && <FetchPolicyTest />}</div>;
        </>
    );
}
