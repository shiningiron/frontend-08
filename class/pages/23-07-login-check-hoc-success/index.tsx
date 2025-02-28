import { useQuery, gql } from "@apollo/client";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
import { IQuery } from "../../src/commons/types/generated/types";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            email
            name
        }
    }
`;
function LoginSuccessPage() {
    // const router = useRouter();
    const { data } =
        useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
    console.log(data?.fetchUserLoggedIn.name);

    // useEffect(() => {
    //     if (!localStorage.getItem("accessToken")) {
    //         alert("로그인 후 이용 가능합니다!!");
    //         router.push("/23-03-login-check");
    //     }
    // }, []);

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

export default withAuth(LoginSuccessPage);
