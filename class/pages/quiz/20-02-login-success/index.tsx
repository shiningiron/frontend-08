import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";
import { IQuery } from "../../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            email
            name
        }
    }
`;

export default function LoginSuccessPage(props: any) {
    const router = useRouter();
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

    const { data } =
        useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
    console.log(data?.fetchUserLoggedIn.name);

    useEffect(() => {
        if (!accessToken) {
            alert("로그인을 먼저 해주세요");
            router.push("/quiz/20-01-login");
        }
    }, []);

    return <div>{data?.fetchUserLoggedIn.name}님 로그인 되었습니다.</div>;
}
