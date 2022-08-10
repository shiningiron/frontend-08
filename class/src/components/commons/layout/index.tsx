import { ReactNode } from "react";
import LayoutBanner from "../layout/banner";
import LayoutHeader from "../layout/header";
import LayoutFooter from "../layout/footer";
import LayoutNavigation from "../layout/navigation";
import { useRouter } from "next/router";

interface ILayoutProps {
    children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
    const router = useRouter();
    const HIDDEN_BANNERS = [
        "/freeboard",
        `/freeboard/${router.query.newBoardId}`,
    ];
    console.log(router);

    // const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);

    return (
        <>
            <LayoutHeader />
            <div style={{ display: "flex" }}>
                <div style={{ width: "10%", marginRight: "1em" }}>
                    <LayoutNavigation />
                </div>

                {/* {!isHiddenBanner && <LayoutBanner />} */}
                <div
                    style={{
                        width: "80%",
                    }}
                >
                    {props.children}
                </div>
            </div>
        </>
    );
}
