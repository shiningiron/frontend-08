import { ReactNode } from "react";
import LayoutBanner from "../layout/banner";
import LayoutHeader from "../layout/header";
import LayoutFooter from "../layout/footer";
import LayoutNavigation from "../layout/navigation";
import { useRouter } from "next/router";

const HIDDEN_HEADERS = ["/freeboard"];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "100px",
            height: "700px",
            backgroundColor: "purple",
          }}
        >
          사이드바
        </div>

        <div>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
