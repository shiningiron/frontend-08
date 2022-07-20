import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import LayoutNavigation from "./navigation";
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
                        width: "150px",
                        height: "700px",
                        backgroundColor: "purple",
                    }}
                >
                    SideBar
                </div>

                <div>{props.children}</div>
            </div>
            <LayoutFooter />
        </>
    );
}
