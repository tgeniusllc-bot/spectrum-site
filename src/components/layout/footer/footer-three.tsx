import { ContainerInner, ContainerOuter } from "./Container";
import Copyright from "./copyright";

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
            className=" theme-text-heading hover:text-spectrumBlue dark:hover:text-spectrumOrange"
        >
            {children}
        </a>
    );
}

export function Footer({ siteSettings }: { siteSettings: any }) {
    return (
        <footer className="">
            <ContainerOuter>
                <div className="border-t border-zinc-100 pb-6 pt-6 dark:border-zinc-700/40">
                    <ContainerInner>
                        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200  ">
                                {siteSettings?.linkList == null ? (
                                    <></>
                                ) : (
                                    <>
                                        {siteSettings?.linkList?.map(
                                            (item: any) => (
                                                <NavLink href={item.links.link}>
                                                    {item.links.title}
                                                </NavLink>
                                            )
                                        )}
                                    </>
                                )}
                            </div>
                            <Copyright />
                        </div>
                    </ContainerInner>
                </div>
            </ContainerOuter>
        </footer>
    );
}
