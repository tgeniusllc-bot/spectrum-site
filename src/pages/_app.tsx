import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { ManagedUIContext } from "@contexts/ui.context";
import ManagedModal from "@components/common/modal/managed-modal";
import ManagedDrawer from "@components/common/drawer/managed-drawer";
import { useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ToastContainer } from "react-toastify";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "@components/common/default-seo";

import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/satisfy";

import "react-toastify/dist/ReactToastify.css";
import "@styles/scrollbar.css";
import "@styles/react-datetime.css";
import "@styles/swiper-carousel.css";
import "@styles/custom-plugins.css";
import "@styles/tailwind.css";
import "@styles/rc-drawer.css";

import { getDirection } from "@utils/get-direction";
import { FormspreeProvider } from "@formspree/react";
import { ThemeProvider } from "@contexts/theme-context";

function handleExitComplete() {
    if (typeof window !== "undefined") {
        window.scrollTo({ top: 0 });
    }
}

function Noop({ children }: React.PropsWithChildren<{}>) {
    return <>{children}</>;
}

const CustomApp = ({ Component, pageProps }: AppProps) => {
    const queryClientRef = useRef<any>();

    if (!queryClientRef.current) {
        queryClientRef.current = new QueryClient();
    }

    const router = useRouter();
    const dir = getDirection(router.locale);

    useEffect(() => {
        document.documentElement.dir = dir;
    }, [dir]);

    const Layout = (Component as any).Layout || Noop;

    return (
        <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
            <FormspreeProvider project="2394139245947125258">
                <ThemeProvider>
                    <QueryClientProvider client={queryClientRef.current}>
                        {/* @ts-ignore */}
                        <Hydrate state={pageProps.dehydratedState}>
                            {/* @ts-ignore */}
                            <ManagedUIContext>
                                <div
                                    style={{
                                        background: "red",
                                        color: "white",
                                        fontSize: "30px",
                                        textAlign: "center",
                                        padding: "10px",
                                        position: "relative",
                                        zIndex: 99999,
                                    }}
                                >
                                    APP TEST KEREM
                                </div>

                                <Layout
                                    pageProps={pageProps}
                                    siteSettings={pageProps?.siteSettings}
                                >
                                    <DefaultSeo />
                                    <Component
                                        {...pageProps}
                                        key={router.route}
                                    />
                                    <ToastContainer />
                                </Layout>

                                <ManagedModal />
                                <ManagedDrawer />
                            </ManagedUIContext>
                        </Hydrate>
                    </QueryClientProvider>
                </ThemeProvider>
            </FormspreeProvider>
        </AnimatePresence>
    );
};

export default appWithTranslation(CustomApp);