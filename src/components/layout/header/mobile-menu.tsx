import React, { useState } from "react";
import Link from "@components/ui/link";
import Scrollbar from "@components/common/scrollbar";
import { IoIosArrowDown } from "react-icons/io";
import { siteSettings as siteSettingsData } from "@settings/site-settings";
import {
    IoLogoInstagram,
    IoLogoTwitter,
    IoLogoFacebook,
    IoLogoYoutube,
    IoClose,
} from "react-icons/io5";
import { useTranslation } from "next-i18next";
import DarkLogo from "./dark-logo";
import LightLogo from "./logo";
import ThemeToggle from "@components/ui/dark-mode/toggle-theme";
import { ThemeContext } from "@contexts/theme-context";
import { useUI } from "@contexts/ui.context";

interface MobileMenuProps {
    siteSettings?: any; // Site settings passed from Layout
}

export default function MobileMenu({ siteSettings }: MobileMenuProps) {
    const [activeMenus, setActiveMenus] = useState<any>([]);
    const { theme } = React.useContext(ThemeContext);
    const { site_header } = siteSettingsData;
    const { closeSidebar } = useUI();
    const { t } = useTranslation("menu");

    const handleArrowClick = (menuName: string) => {
        let newActiveMenus = [...activeMenus];

        if (newActiveMenus.includes(menuName)) {
            var index = newActiveMenus.indexOf(menuName);
            if (index > -1) {
                newActiveMenus.splice(index, 1);
            }
        } else {
            newActiveMenus.push(menuName);
        }

        setActiveMenus(newActiveMenus);
    };

    // Use logo from site settings as primary source (/assets/images/logo.png)
    const navLogo = {
        image: { node: { sourceUrl: siteSettingsData.logo.url } },
        logoSettings: {
            link: siteSettingsData.logo.href,
            altText: siteSettingsData.logo.alt,
            width: siteSettingsData.logo.width,
            height: siteSettingsData.logo.height,
        },
    };
    const lightModeLogo = navLogo;
    const darkModeLogo = navLogo;

    const ListMenu = ({
        dept,
        data,
        hasSubMenu,
        menuName,
        menuIndex,
        className = "",
    }: any) =>
        data.label && (
            <li className={`mb-0.5 ${className}`}>
                <div className="flex items-center justify-between relative">
                    <Link
                        href={data.path}
                        className="w-full text-[15px] menu-item relative py-3 ps-5 md:ps-6 pe-4 transition duration-300 ease-in-out"
                    >
                        <span className="block w-full" onClick={closeSidebar}>
                            {t(`${data.label}`)}
                        </span>
                    </Link>
                    {hasSubMenu && (
                        <div
                            className="cursor-pointer w-full h-full text-lg flex items-center justify-end absolute start-0 top-0 pe-5"
                            onClick={() => handleArrowClick(menuName)}
                        >
                            <IoIosArrowDown
                                className={`transition duration-200 ease-in-out transform text-heading ${
                                    activeMenus.includes(menuName)
                                        ? "-rotate-180"
                                        : "rotate-0"
                                }`}
                            />
                        </div>
                    )}
                </div>
                {hasSubMenu && (
                    <SubMenu
                        dept={dept}
                        data={data.subMenu}
                        toggle={activeMenus.includes(menuName)}
                        menuIndex={menuIndex}
                    />
                )}
            </li>
        );

    const SubMenu = ({ dept, data, toggle, menuIndex }: any) => {
        if (!toggle) {
            return null;
        }

        dept = dept + 1;

        return (
            <ul className="pt-0.5">
                {data?.map((menu: any, index: number) => {
                    const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

                    return (
                        <ListMenu
                            dept={dept}
                            data={menu}
                            hasSubMenu={menu.subMenu}
                            menuName={menuName}
                            key={menuName}
                            menuIndex={index}
                            className={dept > 1 && "ps-4"}
                        />
                    );
                })}
            </ul>
        );
    };

    return (
        <>
            <div className="flex flex-col justify-between w-full h-full bg-theme">
                <div className="w-full border-b border-theme flex justify-between items-center relative ps-5 md:ps-7 flex-shrink-0 py-0.5">
                    {theme === "dark" ? (
                        <DarkLogo darkModeLogo={darkModeLogo} />
                    ) : (
                        <LightLogo lightModeLogo={lightModeLogo} />
                    )}
                    <button
                        className="flex text-2xl items-center justify-center theme-text-description px-4 md:px-6 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
                        onClick={closeSidebar}
                        aria-label="close"
                    >
                        <IoClose className="theme-text-heading mt-1 md:mt-0.5" />
                    </button>
                </div>

                <Scrollbar className="menu-scrollbar flex-grow mb-auto">
                    <div className="flex flex-col py-7 px-0 lg:px-2 text-heading">
                        <ul className="mobileMenu">
                            {site_header.mobileMenu.map(
                                (menu: any, index: number) => {
                                    const dept: number = 1;
                                    const menuName: string = `sidebar-menu-${dept}-${index}`;

                                    return (
                                        <ListMenu
                                            dept={dept}
                                            data={menu}
                                            hasSubMenu={menu.subMenu}
                                            menuName={menuName}
                                            key={menuName}
                                            menuIndex={index}
                                        />
                                    );
                                }
                            )}
                        </ul>
                    </div>
                </Scrollbar>

                <div className="flex-shrink-0 flex justify-center items-center py-6 border-t border-theme">
                    <ThemeToggle />
                </div>
            </div>
        </>
    );
}
