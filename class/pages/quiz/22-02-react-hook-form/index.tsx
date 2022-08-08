import { useForm } from "react-hook-form";

export default function ReactHookFormPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onClickButton = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onClickButton)}>
            작성자:
            <input
                type="text"
                {...register("writer", { required: "이름을 작성해주세요" })}
            />
            <div>{errors.writer?.message}</div>
            제목:
            <input
                type="text"
                {...register("title", { required: "제목을 작성해주세요" })}
            />
            <div>{errors.title?.message}</div>
            내용:
            <input
                type="text"
                {...register("contents", { required: "내용을 작성해주세요" })}
            />
            <div>{errors.contents?.message}</div>
            {/* 주소입력 <input type="text" {...register("boardAddress.addressDetail")}/> */}
            <button>등록하기</button>
        </form>
    );
}
