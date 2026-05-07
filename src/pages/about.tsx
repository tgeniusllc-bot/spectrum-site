import fs from "fs";
import path from "path";
import Layout from "@components/layout/layout";
import Divider from "@components/ui/divider";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Loader from "@components/ui/loader/loader";
import AboutHero from "@containers/about-hero";
import AboutValues from "@containers/about-values";
import AboutOurTeam from "@containers/about-our-team";

interface AboutPageProps {
    data: any;
    siteSettings: any;
}

export default function Home({ data, siteSettings }: AboutPageProps) {
    if (!data) {
        return <Loader />;
    }

    return (
        <Layout siteSettings={siteSettings}>
            <AboutHero query={{ nodeByUri: data }} />
            <AboutValues query={{ nodeByUri: data }} />
            <AboutOurTeam query={{ nodeByUri: data }} />
            <Divider className="mb-0" />
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const filePath = path.join(process.cwd(), "data", "wordpressData.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const aboutData = jsonData.about;
    const siteSettings = jsonData?.nextJsSiteSettings || null;

    return {
        props: {
            data: aboutData,
            siteSettings,
            ...(await serverSideTranslations(locale!, [
                "common",
                "forms",
                "menu",
                "footer",
            ])),
        },
    };
};