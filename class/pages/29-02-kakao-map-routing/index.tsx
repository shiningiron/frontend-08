// import { useRouter } from "next/router";
import Link from "next/link";

export default function KakaoMapPage() {
    // const router = useRouter();
    // const onClickMoveToMap = () => {
    //     router.push("/29-03-kakao-map-routed"); // next 기능
    // };
    return (
        // <button onClick={onClickMoveToMap}>맵으로 이동하기!!</button>
        // <button>
        //     <a href="/29-03-kakao-map-routed">맵으로 이동하기!!</a>
        // </button>
        <Link href={"/29-03-kakao-map-routed"}>
            <a>맵으로 이동하기!!</a>
        </Link>
    );
}
