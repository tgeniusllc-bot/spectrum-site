import fs from "fs";
import path from "path";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ErrorInformation from "@components/404/error-information";
import { GetStaticProps } from "next";

interface ErrorPageProps {
    siteSettings: any; // Footer / Site Settings
}

export default function ErrorPage({ siteSettings }: ErrorPageProps) {
    return (
        <Layout siteSettings={siteSettings}>
            <ErrorInformation />
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    // Read site settings from local JSON
    const filePath = path.join(process.cwd(), "data", "wordpressData.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const siteSettings = jsonData?.nextJsSiteSettings || null;

    return {
        props: {
            siteSettings, // Pass to Layout/Footer
            ...(await serverSideTranslations(locale!, [
                "common",
                "forms",
                "menu",
                "footer",
            ])),
        },
    };
};
