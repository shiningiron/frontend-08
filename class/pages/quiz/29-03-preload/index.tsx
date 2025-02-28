import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
    const [imgTag, setImgTag] = useState<HTMLImageElement>();
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const img = new Image();
        img.src =
            "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg";
        img.onload = () => {
            setImgTag(img);
        };
    }, []);

    const onClickPreload = () => {
        if (imgTag) divRef.current?.appendChild(imgTag);
    };

    return (
        <>
            <div ref={divRef}></div>
            <img />
            <button onClick={onClickPreload}>이미지 보여주기</button>
        </>
    );
}
