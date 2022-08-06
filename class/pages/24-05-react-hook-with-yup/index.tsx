import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import styled from "@emotion/styled";

const schema = yup.object({
    writer: yup.string().required("작성자를 입력해주세요"),
    password: yup.string().required("비밀번호를 입력해주세요"),
    title: yup.string().required("제목을 입력해주세요"),
    contents: yup.string().required("내용을 입력해주세요"),

    // email: yup
    //     .string()
    //     .email("이메일 형식에 적합하지 않습니다.")
    //     .required("이메일은 필수 입니다."),

    // password: yup
    //     .string()
    //     .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    //     .max(15, "비밀번호는 최소 15자리로 입력해주세요")
    //     .required("비밀번호를 입력해주세요"),

    // phone: yup
    //     .string()
    //     .matches(/^\d{3-\d{3,4}-\d{4}$/, "휴대폰 형식에 알맞지 않습니다."),
});

export default function ReactHookFormPage() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onClickButton = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onClickButton)}>
            작성자: <input type="text" {...register("writer")} />
            <div>{formState.errors.writer?.message}</div>
            비밀번호: <input type="password" {...register("password")} />
            <div>{formState.errors.password?.message}</div>
            제목: <input type="text" {...register("title")} />
            <div>{formState.errors.title?.message}</div>
            내용: <input type="text" {...register("contents")} />
            <div>{formState.errors.contents?.message}</div>
            <button
                style={{
                    backgroundColor: formState.isValid ? "yellow" : "",
                }}
            >
                등록하기
            </button>
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
