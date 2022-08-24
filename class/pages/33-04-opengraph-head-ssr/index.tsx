// 내가 만약 네이버 개발자일때 (미리보기 제공자)

import Head from "next/head";

export default function OpengraphHeadPage() {
    return (
        <div>
            <Head>
                <meta property="og:title" content="중고마켓" />
                <meta
                    property="og:description"
                    content="나의 중고마켓에 오신것을 환영합니다."
                />
                <meta property="og:image" content="" />
            </Head>
            <h1>사이트 미리보기 제공 연습</h1>
        </div>
    );
}
