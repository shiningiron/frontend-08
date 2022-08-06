import { PropertySafetyFilled } from "@ant-design/icons";
import { useForm } from "react-hook-form";

export default function ReactHookFormPage() {
    const { register, handleSubmit } = useForm();

    const onClickButton = (data) => {
        console.log(data);
    };

    console.log("리렌더링???");

    return (
        <form onSubmit={handleSubmit(onClickButton)}>
            작성자: <input type="text" {...register("writer")} />
            제목: <input type="text" {...register("title")} />
            내용: <input type="text" {...register("contents")} />
            {/* 주소입력 <input type="text" {...register("boardAddress.addressDetail")}/> */}
            <button>등록하기</button>
        </form>
    );
}
// reactHookForm 은 비제어 컴포넌트라 리렌더링이 안됨 빠름
// 제어 컴포넌트(setState) 리렌더링 돼서 느림

// form 태그 내에서 버튼 타입들
// {/* <button type="submit" onClick={onClickMove}>
//     등록하기
// </button> */}
// {/* <button type="button">등록하기</button> */}
// {/* <button type="reset">등록하기</button> */}
