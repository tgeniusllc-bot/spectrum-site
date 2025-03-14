import { useUI } from "@contexts/ui.context";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Drawer } from "@components/common/drawer/drawer";
import { getDirection } from "@utils/get-direction";
import motionProps from "@components/common/drawer/motion";

const MobileMenu = dynamic(
    () => import("@components/layout/header/mobile-menu")
);

interface BottomNavigationProps {
    siteSettings?: any; // Accept siteSettings as a prop
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
    siteSettings,
}) => {
    const { closeSidebar, displaySidebar } = useUI();
    const { locale } = useRouter();
    const dir = getDirection(locale);
    const contentWrapperCSS = dir === "ltr" ? { left: 0 } : { right: 0 };

    return (
        <>
            <Drawer
                placement={dir === "rtl" ? "right" : "left"}
                open={displaySidebar}
                onClose={closeSidebar}
                contentWrapperStyle={contentWrapperCSS}
                {...motionProps}
            >
                <MobileMenu siteSettings={siteSettings} />
            </Drawer>
        </>
    );
};

export default BottomNavigation;
