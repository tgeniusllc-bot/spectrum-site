import { NextSeo } from "next-seo";
import Header from "@components/layout/header/header";
import { Footer } from "@components/layout/footer/footer-three";
import MobileNavigation from "@components/layout/mobile-navigation/mobile-navigation";

interface LayoutProps {
    children: React.ReactNode;
    siteSettings?: any;
}

export default function Layout({ children, siteSettings }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-theme">
            <NextSeo
                additionalMetaTags={[
                    {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                    },
                ]}
                title="Spectrum Psychiatry"
                description="Built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
                canonical="https://spectrumpsychiatry.us/"
                openGraph={{
                    url: "https://spectrumpsychiatry.us",
                    title: "Spectrum Psychiatry",
                    description:
                        "Built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",
                    images: [
                        {
                            url: "/assets/images/og-image-01.png",
                            width: 800,
                            height: 600,
                            alt: "Og Image Alt",
                        },
                        {
                            url: "/assets/images/og-image-02.png",
                            width: 900,
                            height: 800,
                            alt: "Og Image Alt Second",
                        },
                    ],
                }}
            />

            <Header siteSettings={siteSettings} />

            <main
                className="relative flex-grow"
                style={{
                    minHeight: "-webkit-fill-available",
                    WebkitOverflowScrolling: "touch",
                }}
            >
                {children}
            </main>

            <div className="relative z-[9999] w-full border-t border-zinc-100 py-5 text-center dark:border-zinc-700/40">
                <p className="text-xs lg:text-sm leading-6 theme-text-description">
                    &copy; {new Date().getFullYear()}{" "}
                    <span className="font-semibold">Spectrum Psychiatry.</span>{" "}
                    All rights reserved
                </p>

                <p className="mt-1 text-[12px] opacity-90 theme-text-description">
                    Powered by{" "}
                    <a
                        href="https://www.youtube.com/watch?v=cAe1lVDbLf0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-[9999] font-semibold underline cursor-pointer text-blue-600 transition hover:text-blue-700"
                    >
                        Keremiyo 🎵
                    </a>{" "}
                    <span>🔥</span>
                </p>
            </div>

            <MobileNavigation siteSettings={siteSettings} />
        </div>
    );
}