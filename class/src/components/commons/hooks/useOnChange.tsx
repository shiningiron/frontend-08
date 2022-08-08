import { ChangeEvent, useState } from "react";

const initialInputs = { writer: "", password: "", title: "", contents: "" };
export default function useOnChangeInputs() {
    const [inputs, setInputs] = useState(initialInputs);

    const onChangeInputs = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const _inputs = {
            ...inputs,
            [event.target.id]: event.target.value,
        };
        setInputs(_inputs);
    };

    return {
        inputs,
        onChangeInputs,
    };
}
