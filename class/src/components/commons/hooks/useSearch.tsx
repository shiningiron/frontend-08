import { useState } from "react";

export default function UseSearch() {
    const [keyword, setKeyword] = useState("");
    const onChangeKeyword = (value: string) => {
        setKeyword(value);
    };

    return {
        keyword,
        onChangeKeyword,
    };
}
