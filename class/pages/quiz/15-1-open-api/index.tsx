import axios from "axios";
import { useState, useEffect } from "react";

export default function openApiquiz() {
    const [urlFetch, setUrlFetch] = useState("");
    useEffect(() => {
        const fetchPictures = async () => {
            const result = await axios.get(
                "https://dog.ceo/api/breeds/image/random"
            );
            setUrlFetch(result.data.message);
        };
        fetchPictures();
    }, []);

    return (
        <>
            <div>나와라 멍멍이</div>
            <img src={urlFetch} />
        </>
    );
}
