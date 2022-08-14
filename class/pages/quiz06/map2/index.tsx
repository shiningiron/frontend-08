import { useRouter } from "next/router";

export default function KakaoMapPage() {
    const router = useRouter();
    const onClickMoveToMap = () => {
        router.push("/quiz06/map1"); // next 기능
    };
    return <button onClick={onClickMoveToMap}>맵으로 이동하기!!</button>;
}
