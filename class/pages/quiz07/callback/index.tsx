import axios from "axios";
import { useState } from "react";

export default function CallbackPromiseAsyncAwaitPage() {
    const [a, b] = useState([]);
    const onClickCallback = () => {
        const aa = new XMLHttpRequest();
        aa.open("get", `http://numbersapi.com/random?min=1&max=200`);
        aa.send();
        aa.addEventListener("load", (res: any) => {
            console.log(res);
            const num = res.target.response.split(" ")[0];

            const bb = new XMLHttpRequest();
            bb.open("get", `http://koreanjson.com/posts/${num}`);
            bb.send();
            bb.addEventListener("load", (res: any) => {
                // console.log(res);
                const userId = JSON.parse(res.target.response).UserId;

                const cc = new XMLHttpRequest();
                cc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
                cc.send();
                cc.addEventListener("load", (res: any) => {
                    console.log(res);
                    b(JSON.parse(res.target.response));
                });
            });
        });
    };

    const onClickPromise = () => {
        axios
            .get("http://numbersapi.com/random?min=1&max=200")
            .then((res: any) => {
                const num = res.data.split(" ")[0];
                return axios.get(`http://koreanjson.com/posts/${num}`);
            })
            .then((res: any) => {
                console.log(res);
                const userId = res.data.UserId;
                return axios.get(
                    `http://koreanjson.com/posts?userId=${userId}`
                );
            })
            .then((res: any) => {
                b(res.data);
            });
    };
    const onClickAsyncAwait = async () => {
        const result1 = await axios.get(
            "http://numbersapi.com/random?min=1&max=200"
        );
        const num = result1.data.split(" ")[0];
        const result2 = await axios.get(`http://koreanjson.com/posts/${num}`);
        const userId = result2.data.UserId;
        const result3 = await axios.get(
            `http://koreanjson.com/posts?userId=${userId}`
        );
        b(result3.data);
    };
    return (
        <>
            <button onClick={onClickCallback}>Callback 요청</button>
            <button onClick={onClickPromise}>Promise 요청</button>
            <button onClick={onClickAsyncAwait}>AsyncAwait 요청</button>
            {a.map((el: any) => (
                <div key={el.id}>{el.title}</div>
            ))}
        </>
    );
}
