import { useRecoilState } from "recoil";
import BoardWrite from "../../src/components/units/21-global-state/BoardWrite.container copy";
import { isEditState } from "../../src/commons/store";
import { useEffect } from "react";

export default function GlobalStatePage() {
    const [isEdit, setIsEdit] = useRecoilState(isEditState);
    useEffect(() => {
        setIsEdit(true);
    }, []);
    return <BoardWrite />;
}
