import { ContainerInner, ContainerOuter } from "./Container";

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            className="theme-text-heading hover:text-spectrumBlue dark:hover:text-spectrumOrange transition-colors"
        >
            {children}
        </a>
    );
}

export function Footer({ siteSettings }: { siteSettings: any }) {
    return (
        <footer className="relative z-[9999] w-full">
            <ContainerOuter>
                <div className="border-t border-zinc-100 pb-6 pt-6 dark:border-zinc-700/40">
                    <ContainerInner>
                        <div className="flex flex-col items-center justify-center gap-2 text-center">
                            <div className="flex flex-wrap items-center justify-center gap-6 whitespace-nowrap text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                {siteSettings?.linkList?.map(
                                    (item: any, index: number) => (
                                        <NavLink
                                            key={index}
                                            href={item.links.link}
                                        >
                                            {item.links.title}
                                        </NavLink>
                                    )
                                )}
                            </div>

                            <div className="text-center text-xs lg:text-sm leading-6 theme-text-description">
                                &copy; {new Date().getFullYear()}{" "}
                                <span className="font-semibold">
                                    Spectrum Psychiatry.
                                </span>{" "}
                                All rights reserved
                            </div>

                            <div className="relative z-[9999] text-center text-[12px] opacity-90 theme-text-description">
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
                            </div>
                        </div>
                    </ContainerInner>
                </div>
            </ContainerOuter>
        </footer>
    );
}