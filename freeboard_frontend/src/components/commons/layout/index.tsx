import { ReactNode } from "react";
import LayoutBanner from "../layout/banner";
import LayoutHeader from "../layout/header";
// import LayoutFooter from "../layout/footer";
import LayoutNavigation from "../layout/navigation";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: ReactNode;
}
// const HIDDEN_BANNERS = [
//   "/freeboard",
//   `/freeboard/${router.query.newBoardId}`,
// ];
const SHOW_BANNERS = ["/"];
export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  // const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);
  const isShowBanner = SHOW_BANNERS.includes(router.asPath);

  return (
    <>
      <LayoutHeader />
      <div style={{ display: "flex" }}>
        <LayoutNavigation />
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          {isShowBanner && <LayoutBanner />}
          <div
            style={{
              width: "100%",
            }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}
