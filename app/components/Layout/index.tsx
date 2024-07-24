import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
    enablePageScroll,
    disablePageScroll,
    clearQueueScrollLocks,
} from "scroll-lock";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import '../../public/styles/global.css'

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const [visible, setVisible] = useState<boolean>(false);

    const onOpenSidebar = () => {
        setVisible(true);
        disablePageScroll();
    };

    const onCloseSidebar = () => {
        setVisible(false);
        enablePageScroll();
    };

    const pathname = usePathname();

    useEffect(() => {
        clearQueueScrollLocks();
        enablePageScroll();
    }, [pathname]);

    return (
        <>
            <div className="flex flex-col min-h-screen lg:overflow-hidden">
                <div className="grow">{children}</div>
                <Footer />
            </div>
            <Sidebar
                className={`transition-transform duration-300 ${
                    visible ? "translate-x-0" : "-translate-x-full"
                }`}
                onClick={onCloseSidebar}
            />
            <div
                className={`fixed inset-0 z-20 bg-black/60 transition-all ${
                    visible ? "visible opacity-100" : "invisible opacity-0"
                }`}
                onClick={onCloseSidebar}
            ></div>
        </>
    );
};

export default Layout;
