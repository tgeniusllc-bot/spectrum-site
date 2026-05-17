import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import PageHeader from "@components/ui/page-header";
import ContactForm from "@components/common/form/contact-form";
import ContactInfoBlock from "@containers/contact-info";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Loader from "@components/ui/loader/loader";

import fs from "fs";
import path from "path";
interface ContactUsPageProps {
    data: any; // ContactUs Page Data
    siteSettings: any; // Footer / Site Settings
    contactInformationData: any;
}

export default function ContactUsPage({
    data,
    siteSettings,
    contactInformationData,
}: ContactUsPageProps) {
    if (!data) {
        return <Loader />;
    }
    console.log(contactInformationData);
    return (
        <Layout siteSettings={siteSettings}>
            <PageHeader query={{ nodeByUri: data }} />
            <Container>
                <div className="my-14 lg:my-16 xl:my-20 px-0 pb-2 lg: xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
                    <div className="md:w-full lg:w-2/5 2xl:w-2/6 flex flex-col h-full">
                        <ContactInfoBlock query={contactInformationData} />
                    </div>
                    <div className="md:w-full lg:w-3/5 2xl:w-4/6 flex h-full md:ms-7 flex-col lg:ps-7">
                        <div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5">
                            <h4 className="text-2xl 2xl:text-3xl font-bold theme-text-heading">
                                Get in Touch
                            </h4>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    // 1) Read the data from the local JSON
    const filePath = path.join(process.cwd(), "data", "wordpressData.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // 2) Extract the "home" portion & site settings
    const contactData = jsonData?.contact || null;
    const contactInformationData = jsonData?.contactInformation || null;
    const siteSettings = jsonData?.nextJsSiteSettings || null;

    // 3) Return as props
    return {
        props: {
            data: contactData,
            siteSettings, // Pass to Layout/Footer
            contactInformationData,
            ...(await serverSideTranslations(locale!, [
                "common",
                "forms",
                "menu",
                "footer",
            ])),
        },
    };
};
