import { useRouter } from "next/router";

export default function CypressE2ETestRoutingPage() {
    const router = useRouter();
    const onClickMove = () => {
        router.push("/34-05-cypress-e2e-test-routed");
    };
    return <button onClick={onClickMove}>철수랑 놀러가기</button>;
}
