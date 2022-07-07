import axios from "axios"

export default function RestGetPageQuiz () {

    const onClickRestApi = async () => {
        const result = await axios.get("https://koreanjson.com/users")
        console.log(result)
        console.log(result.data)
        console.log(result.statusText)
    }


    return (
        <button onClick={onClickRestApi}>REST-API 요청하기</button>
    )
}