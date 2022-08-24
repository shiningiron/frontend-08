import { gql, useQuery } from "@apollo/client";
import Head from "next/head";

const FETCH_USED_ITEM = gql`
    query fetchUseditem($useditemId: ID!) {
        fetchUseditem(useditemId: $useditemId) {
            _id
            name
            remarks
            images
        }
    }
`;

// 내가 만약 네이버 개발자일때 (미리보기 제공자) - 서버사이드 렌더링이 필요한 상황!
export default function OpengraphHeadPage() {
    const { data } = useQuery(FETCH_USED_ITEM, {
        variables: { useditemId: "62fd904c03562900296b2eba" },
    });
    return (
        <div>
            <Head>
                <meta property="og:title" content={data?.fetchUseditem.name} />
                <meta
                    property="og:description"
                    content={data?.fetchUseditem.remarks}
                />
                <meta
                    property="og:image"
                    content={data?.fetchUseditem.images[0]}
                />
            </Head>
            <h1>사이트 미리보기 제공 연습</h1>
        </div>
    );
}
