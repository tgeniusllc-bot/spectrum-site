import { NextSeo } from "next-seo";
import Header from "@components/layout/header/header";
import { Footer } from "@components/layout/footer/footer-three";
import MobileNavigation from "@components/layout/mobile-navigation/mobile-navigation";

interface LayoutProps {
    children: React.ReactNode;
    siteSettings?: any; // Pass site settings from page
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
            <Footer siteSettings={siteSettings?.footer} />
            <MobileNavigation siteSettings={siteSettings} />
        </div>
    );
}
