import { AiOutlineArrowUp } from "react-icons/ai";
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

const Copyright: React.FC<CopyrightProps> = ({ variant }) => {
    return (
        <div className="w-full border-t border-gray-200 py-5">
            <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center px-4 text-center">
                <p className="text-center text-xs lg:text-sm leading-6 theme-text-description">
                    &copy; {year}{" "}
                    <span className="font-semibold">Spectrum Psychiatry.</span>{" "}
                    All rights reserved
                </p>

                <p className="mt-1 text-center text-[12px] opacity-80 theme-text-description">
                    Powered by{" "}
                    <a
                        href="https://www.youtube.com/watch?v=cAe1lVDbLf0"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            position: "relative",
                            zIndex: 9999,
                            pointerEvents: "auto",
                        }}
                        className="font-semibold underline cursor-pointer transition hover:text-blue-500 hover:opacity-100"
                    >
                        Keremiyo 🎵
                    </a>{" "}
                    <span>🔥</span>
                </p>

                {variant === "contemporary" && (
                    <p className="mt-3 text-sm font-semibold text-[#212121] cursor-pointer">
                        <Link href="#siteHeader">Scroll to top</Link>
                        <AiOutlineArrowUp className="inline ms-3" />
                    </p>
                )}
            </div>
        </div>
    );
};

export default Copyright;