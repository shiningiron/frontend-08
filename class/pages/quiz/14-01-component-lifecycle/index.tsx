import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Lifecycle() {
    const [isChange, setIsChange] = useState(false);
    const router = useRouter();
    const changeState = () => {
        setIsChange((prev) => !prev);
    };
    const routerPush = () => {
        router.push("/");
    };
    useEffect(() => {
        alert("Rendered!");
        return () => {
            alert("Bye!!");
        };
    }, []);

    useEffect(() => {
        alert("Changed!!");
    }, [isChange]);
    return (
        <>
            <div>{isChange ? "true" : "false"}</div>
            <button onClick={changeState}>변경</button>
            <button onClick={routerPush}>이동</button>
        </>
    );
}
