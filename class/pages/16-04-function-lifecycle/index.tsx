import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function functionCounterPage() {
    const [count, setCount] = useState(5);
    const router = useRouter();

    // componentDidMount() {
    //     console.log("그려지고 나서 실행~~");
    // }

    // componentDidUpdate() {
    //     console.log("변경되고 나서 실행~~");
    // }

    // componentWillUnmount() {
    //     console.log("사라질때 실행~");
    //     // 채팅방 나가기 api 요청
    // }

    // useEffect(() => {
    //     console.log("그려지고 나서 실행!!");
    // }, [count]);
    //   , 옆에 [] 배열은   dependency array 의존성 배열이라고 함
    // 처음에 그냥 실행 다음에는 count가 변경되면 실행

    useEffect(() => {
        console.log("그려지고 나서 실행!!");
    }, [count]);
    useEffect(() => {
        console.log("변경되고 나서 실행!!");
    });
    useEffect(() => {
        return () => {
            console.log("사라질때 실행!!");
        };
    }, []);

    // 1. 하나로 합치기 가능
    // useEffect(() => {
    //     console.log("그려지고 나서 실행!!");
    //     return () => {
    //         console.log("사라질때 실행!!");
    //     };
    // }, []);

    // 2. useEffect의 잘못된 사용 예제(1. 추가렌더링, 2. 무한루프)
    // useEffect(() => {
    //     setCount((prev) => prev + 1);
    // }, [count]);

    // const counterUp = () => {
    //     console.log(count);
    //     setCount(1);
    // };

    const onClickMove = () => {
        router.push("/16-02-class-counter");
    };

    return (
        <>
            <div>{count}</div>
            <button onClick={counterUp}>카운트 올리기</button>
            <button onClick={onClickMove}>나가기</button>
        </>
    );
}
