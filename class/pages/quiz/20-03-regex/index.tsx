import { ChangeEvent, useState } from "react";

export default function RegularExpressions() {
    const [dateCheck, setDateCheck] = useState(Boolean);
    const [numCheck, setNumCheck] = useState(Boolean);
    const [emailCheck, setEmailCheck] = useState(Boolean);
    const onChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
        const check = /^\d{4}\.(0[1-9]|1[012])\.(0[1-9]|[12][0-9]|3[01])$/.test(
            event.target.value
        );
        setDateCheck(check);
        // if (!DateCheck) alert("다시 쓰세요");
    };
    const onChangePhoneNum = (event: ChangeEvent<HTMLInputElement>) => {
        const check = /^\d{3}-\d{3,4}-\d{4}$/.test(event.target.value);
        setNumCheck(check);
        // if (!NumCheck) alert("다시 쓰세요");
    };
    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        const check = /^\w+@\w+\.\w+$/.test(event.target.value);
        setEmailCheck(check);
        // if (!EmailCheck) alert("다시 쓰세요");
    };

    return (
        <>
            날짜 :<input type="text" onChange={onChangeDate}></input>
            <div>{dateCheck ? "o" : "x"}</div>
            전화번호 :<input type="text" onChange={onChangePhoneNum}></input>
            <div>{numCheck ? "o" : "x"}</div>
            이메일: <input type="text" onChange={onChangeEmail}></input>
            <div>{emailCheck ? "o" : "x"}</div>
        </>
    );
}
