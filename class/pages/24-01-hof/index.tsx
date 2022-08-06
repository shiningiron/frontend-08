import { useRouter } from "next/router";
import { MouseEvent } from "react";

const FETCH_BOARDS = [
    { _id: "111", writer: "철철", title: "안녕하세요" },
    { _id: "222", writer: "영영", title: "안녕하세요" },
    { _id: "333", writer: "훈훈", title: "안녕하세요" },
    { _id: "444", writer: "맹맹", title: "안녕하세요" },
];

export default function HofPage() {
    const router = useRouter();
    // prettier-ignore
    const onClickMove = (boardId: string) => (event: MouseEvent<HTMLDivElement>) => {
            router.push(`/boards/${boardId}`);
        };

    return (
        <div>
            {FETCH_BOARDS.map((el) => (
                <div key={el._id} onClick={onClickMove(el._id)}>
                    <span>{el.writer}</span>
                    <span>{el.title}</span>
                </div>
            ))}
        </div>
    );
}

// const aaa = (apple) => (banana) => {};
// aaa(10)(20);

// const qqq = (apple) => {};
// qqq(5);
