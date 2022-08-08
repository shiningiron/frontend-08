import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";
// import styled from "@emotion/styled";

const schema = yup.object({
    writer: yup.string().required("작성자를 입력해주세요"),
    password: yup.string().required("비밀번호를 입력해주세요"),
    title: yup.string().required("제목을 입력해주세요"),
    contents: yup.string().required("내용을 입력해주세요"),
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
            작성자: <Input01 type="text" register={register("writer")} />
            <div>{formState.errors.writer?.message}</div>
            비밀번호:
            <Input01 type="password" register={register("password")} />
            <div>{formState.errors.password?.message}</div>
            제목: <Input01 type="text" register={register("title")} />
            <div>{formState.errors.title?.message}</div>
            내용: <Input01 type="text" register={register("contents")} />
            <div>{formState.errors.contents?.message}</div>
            <Button01 title="등록하기" isActive={formState.isValid} />
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

// 공통컴포넌트 장점 모든 태그들을 수정하기 용이하다
