export default function TokenLetDocPage () {

    let token = function () {
        document.getElementById("tokenNum").innerText = String(Math.floor( Math.random() *1000000)).padStart(6,"0")
    }


    return (
        <>
            <div id="tokenNum">000000</div>
            <button onClick={token}>인증번호 전송</button>
        </>
    )
}