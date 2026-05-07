import type { FC } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Logo from "@components/ui/logo";

interface Props {
    className?: string;
    data: {
        widgetTitle?: string;
        lists: {
            id: string;
            path?: string;
            title: string;
            icon?: any;
        }[];
        logo?: any;
        description?: string;
        isCompanyIntroduction?: boolean;
    };
    variant?: "contemporary";
}

const WidgetLink: FC<Props> = ({ className, data }) => {
    const { lists, description } = data;
    const { t } = useTranslation("footer");

    return (
        <div className={`${className || ""} ${data?.isCompanyIntroduction ? "col-span-2" : ""}`}>
            {!data?.isCompanyIntroduction ? (
                <ul className="flex flex-row items-center justify-center gap-5 text-xs lg:text-sm text-body">
                    {lists.map((list) => (
                        <li key={`widget-list--key${list.id}`} className="flex items-center">
                            {list.icon && (
                                <span className="me-2 text-sm lg:text-base">
                                    {list.icon}
                                </span>
                            )}
                            <Link href={list.path ? list.path : "#!"}>
                                <a className="transition-colors duration-200 hover:text-black">
                                    {t(`${list.title}`)}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="me-4 flex flex-col space-y-7 lg:space-y-7.5">
                    <Logo className="" />
                    <p className="text-sm font-normal text-[#1D1E1F] leading-6 max-w-[334px]">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
};

export default WidgetLink;