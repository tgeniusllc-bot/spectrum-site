import React, { useRef } from "react";
import { siteSettings as defaultSiteSettings } from "@settings/site-settings";
import HeaderMenu from "@components/layout/header/header-menu";
import { useUI } from "@contexts/ui.context";
import { addActiveScroll } from "@utils/add-active-scroll";
import DarkLogo from "./dark-logo";
import LightLogo from "./logo";
import ThemeToggle from "@components/ui/dark-mode/toggle-theme";
import ZocdocBookButton from "@components/ui/zocdoc-book-button";
import { ThemeContext } from "@contexts/theme-context";

type DivElementRef = React.MutableRefObject<HTMLDivElement>;

const { site_header } = defaultSiteSettings;

/** Logo shape from site settings (primary source: /assets/images/logo.png) */
function getNavLogo() {
	const logo = defaultSiteSettings.logo;
	return {
		image: { node: { sourceUrl: logo.url } },
		logoSettings: {
			link: logo.href,
			altText: logo.alt,
			width: logo.width,
			height: logo.height,
		},
	};
}

interface HeaderProps {
    siteSettings?: any; // Site settings passed from Layout
}

const Header: React.FC<HeaderProps> = ({ siteSettings }) => {
    const { openSidebar, setDrawerView } = useUI();
    const { theme } = React.useContext(ThemeContext);
    const siteHeaderRef = useRef() as DivElementRef;
    addActiveScroll(siteHeaderRef);

    function handleMobileMenu() {
        setDrawerView("MOBILE_MENU");
        return openSidebar();
    }

    // Use logo from site settings as primary source (/assets/images/logo.png)
    const lightModeLogo = getNavLogo();
    const darkModeLogo = getNavLogo();

    return (
        <header
            id="siteHeader"
            ref={siteHeaderRef}
            className="w-full h-16 sm:h-20 lg:h-24 relative z-50"
        >
            <div className="innerSticky theme-navbar-text bg-theme transition-ease-effect body-font fixed w-full h-16 sm:h-20 lg:h-24 z-20 px-4 md:px-8 lg:px-6">
                <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
                    {theme === "dark" ? (
                        <DarkLogo darkModeLogo={darkModeLogo} />
                    ) : (
                        <LightLogo lightModeLogo={lightModeLogo} />
                    )}

                    <HeaderMenu
                        data={site_header.menu}
                        className="hidden lg:flex md:ms-6 xl:ms-10 lg:justify-center"
                    />

                    <div className="flex-shrink-0 ms-auto lg:me-5 xl:me-8 2xl:me-10">
                        <div className="lg:flex lg:flex-1 lg:justify-end">
                            <div className="flex items-center justify-center gap-x-6">
                                <span className="hidden lg:inline-flex">
                                    <ThemeToggle />
                                </span>
                                <ZocdocBookButton />
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 lg:hidden lg:me-5 xl:me-8 2xl:me-10 ">
                        <button
                            aria-label="Menu"
                            className="menuBtn  outline-none focus:outline-none h-full flex-shrink-0 flex-col items-center justify-center p-5 px-5 md:flex lg:hidden 2xl:px-7"
                            onClick={handleMobileMenu}
                        >
                            <span className="menuIcon">
                                <span className="bar" />
                                <span className="bar" />
                                <span className="bar" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
