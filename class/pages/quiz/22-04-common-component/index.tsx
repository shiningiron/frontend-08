import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import InputQ from "../../../src/components/commons/inputs/quiz01/inxdex";
import ButtonQ from "../../../src/components/commons/buttons/quiz01";

const schema = yup.object({
    writer: yup
        .string()
        .max(5, "작성자는 5글자 이내 문자열입니다.")
        .required("작성자를 입력해주세요"),
    password: yup
        .string()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8}$/,
            "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열입니다."
        )
        .required("비밀번호를 입력해주세요"),
    title: yup
        .string()
        .max(100, "제목은 100자 이내 문자열입니다.")
        .required("제목을 입력해주세요"),
    contents: yup
        .string()
        .max(1000, "내용은 1000자 이내 문자열입니다.")
        .required("내용을 입력해주세요"),
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
            작성자: <InputQ type="text" register={register("writer")} />
            <div>{formState.errors.writer?.message}</div>
            비밀번호: <InputQ type="password" register={register("password")} />
            <div>{formState.errors.password?.message}</div>
            제목: <InputQ type="text" register={register("title")} />
            <div>{formState.errors.title?.message}</div>
            내용: <InputQ type="text" register={register("contents")} />
            <div>{formState.errors.contents?.message}</div>
            <ButtonQ title="등록하기" isActive={formState.isValid} />
        </form>
    );
}
