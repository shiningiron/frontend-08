import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../src/commons/types/generated/types";
import { withAuth } from "../../../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            email
            name
        }
    }
`;
function MainPage() {
    // const router = useRouter();
    const { data } =
        useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
    console.log(data?.fetchUserLoggedIn.name);

    return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div>;
}

export default withAuth(MainPage);
