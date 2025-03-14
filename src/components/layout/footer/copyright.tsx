import Container from "@components/ui/container";
import { siteSettings } from "@settings/site-settings";
import { useTranslation } from "next-i18next";
import { AiOutlineArrowUp } from "react-icons/ai";
import cn from "classnames";
import Link from "@components/ui/link";

interface CopyrightProps {
    payment?: {
        id: string | number;
        path?: string;
        name: string;
        image: string;
        width: number;
        height: number;
    }[];
    variant?: "contemporary";
}
const year = new Date().getFullYear();
const Copyright: React.FC<CopyrightProps> = ({ payment, variant }) => {
    const { t } = useTranslation("footer");
    return (
        <div className="  transition-ease-effect  ">
            <Container
                className={cn(
                    "flex flex-col-reverse md:flex-row text-center md:justify-between",
                    {
                        "items-center": variant === "contemporary",
                    }
                )}
            >
                <p
                    className={cn(
                        "theme-text-description text-xs lg:text-sm leading-6",
                        {
                            "p-0 m-0": variant === "contemporary",
                        }
                    )}
                >
                    &copy; {year}&nbsp;
                    <a
                        className="font-semibold theme-text-heading hover:text-spectrumBlue dark:hover:text-spectrumOrange"
                        href={siteSettings.author.websiteUrl}
                    >
                        {siteSettings.author.name}
                        {"."}
                    </a>
                    &nbsp;{t("text-all-rights-reserved")}
                </p>

                {variant === "contemporary" && (
                    <p className="text-sm font-semibold leading-[19px] text-[#212121] cursor-pointer">
                        <Link href="#siteHeader">Scroll to top</Link>

                        <AiOutlineArrowUp className="inline ms-3" />
                    </p>
                )}
            </Container>
        </div>
    );
};

export default Copyright;
