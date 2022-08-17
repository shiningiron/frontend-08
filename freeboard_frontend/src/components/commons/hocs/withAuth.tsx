import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, logState } from "../../../commons/store";

export const withAuth = (Component) => (props) => {
  const [isLogout] = useRecoilState(logState);
  const [accessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  useEffect(() => {
    if (isLogout) {
      alert("로그인 후 이용 가능합니다!!");
      router.push("/");
    }
  }, []);
  return <Component {...props} />;
};
