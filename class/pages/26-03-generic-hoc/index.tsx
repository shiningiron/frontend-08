import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

// prettier-ignore
export const withAuth = (Component: ComponentType) => <P extends {}>(props: P) => {
    const router = useRouter();
    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            alert("로그인 후 이용 가능합니다!!");
            router.push("/24-03-login-use-apollo-client");
        }
    }, []);
    return <Component {...props} />;
};
