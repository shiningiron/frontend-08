// 내가 만약 디스코드/카카오톡/ 개발자일때 (미리보기 사용자)

import axios from "axios";

export default function OpengraphPreviewPage() {
    const onclickOpengraph = async () => {
        const result = await axios.get("https://www.naver.com/api.");
        console.log(result.data);
        console.log(
            result.data.split("<meta").filter((el) => el.includes("og:"))
        );
    };
    return (
        <div>
            <h1>사이트 미리보기 구현 연습!!</h1>
            <button onClick={onclickOpengraph}>미리보기 실행</button>
        </div>
    );
}
