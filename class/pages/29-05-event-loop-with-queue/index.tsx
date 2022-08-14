export default function EventLoopPage() {
    const onClickTimer = () => {
        console.log("========시작합니다=========");

        // 비동기작업(메크로큐에 들어감)
        setTimeout(() => {
            console.log("저는 setTimeout!! 0초 뒤에 실행될 거예요!!");
        }, 0);

        // 비동기작업(마이크로큐에 들어감)
        new Promise((resolve, reject) => {
            resolve("철수");
        }).then((res) => {
            console.log(
                "저는 Promise!! 마이크로큐!! 0초 뒤에 실행될 거예요!!!-1"
            );
        });

        // 비동기작업(매크로큐에 들어감)
        setInterval(() => {
            console.log(
                "저는 setInterval!! 매크로큐!! 0초마다 실행될 거예요!!"
            );
        });

        let sum = 0;
        for (let i = 0; i <= 900000000; i += 1) {
            sum = sum + 1;
        }

        // 비동기작업(마이크로큐에 들어감)
        new Promise((resolve, reject) => {
            resolve("철수");
        }).then((res) => {
            console.log(
                "저는 Promise!! 마이크로큐!! 0초 뒤에 실행될 거예요!!!-2"
            );
        });

        console.log("======== 종료합니다 =========");
    };

    return <button onClick={onClickTimer}>setTimeout 실행시키기!!</button>;
}
