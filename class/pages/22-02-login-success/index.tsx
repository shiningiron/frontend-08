import { useQuery, gql } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            email
            name
        }
    }
`;
export default function LoginSuccessPage() {
    const { data } =
        useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
    console.log(data?.fetchUserLoggedIn.name);
    return (
        <div
            style={{
                padding: "30px",
            }}
        >
            {data?.fetchUserLoggedIn.name}님 환영합니다!
        </div>
    );
}
