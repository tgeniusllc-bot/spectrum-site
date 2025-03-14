import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Divider from "@components/ui/divider";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import ContactInfoBlock from "@containers/contact-info";
import ContactForm from "@components/common/form/contact-form";
import FeatureSectionThree from "@containers/feature-section-three";
import HeroSectionServices from "../containers/hero-section-services";
import Loader from "@components/ui/loader/loader";
import AlternatingFeatureSections from "@containers/alternating-feature-sections";
import BannerCarouselSection from "@containers/banner-carousel-section";
import fs from "fs";
import path from "path";

interface suboxoneTherapyPageProps {
    data: any; // Or more specific type if you like
    siteSettings: any; // Footer / Site Settings
    contactInformationData: any;
}
export default function Home({
    data,
    siteSettings,
    contactInformationData,
}: suboxoneTherapyPageProps) {
    if (!data) {
        return <Loader />;
    }

    return (
        <Layout siteSettings={siteSettings}>
            <HeroSectionServices query={{ nodeByUri: data }} />
            <AlternatingFeatureSections query={{ nodeByUri: data }} />
            <FeatureSectionThree query={{ nodeByUri: data }} />

            {/* <BannerSliderBlock /> */}
            <Container>
                <div className="my-14 lg:my-16 xl:my-20 px-0 pb-2 lg: xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
                    <div className="md:w-full lg:w-2/5 2xl:w-2/6 flex flex-col h-full">
                        <ContactInfoBlock query={contactInformationData} />
                    </div>
                    <div className="md:w-full lg:w-3/5 2xl:w-4/6 flex h-full md:ms-7 flex-col lg:ps-7">
                        <div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5">
                            <h4 className="text-2xl 2xl:text-3xl font-bold theme-text-heading">
                                Get in touch
                            </h4>
                        </div>
                        <ContactForm />
                    </div>
                </div>
                <BannerCarouselSection query={{ nodeByUri: data }} />
            </Container>
            <Divider className="mb-0" />
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    // 1) Read the data from the local JSON
    const filePath = path.join(process.cwd(), "data", "wordpressData.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // 2) Extract the "home" portion from your JSON
    // This depends on how your JSON is structured
    const suboxoneTherapyData = jsonData.suboxoneTherapy; // or something like jsonData?.home
    const contactInformationData = jsonData?.contactInformation || null;
    const siteSettings = jsonData?.nextJsSiteSettings || null;

    // 3) Return it as props
    return {
        props: {
            data: suboxoneTherapyData,
            contactInformationData,
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
