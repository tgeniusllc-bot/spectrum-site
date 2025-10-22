// pages/index.tsx
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Divider from "@components/ui/divider";
import HeroSectionOne from "../containers/hero-section-1";
import ContactInfoBlock from "@containers/contact-info";
import FeatureSectionOne from "../containers/feature-section-1";
import ThreeImageDetailsSection from "../containers/three-image-details-section";
import AlternatingFeatureSections from "../containers/alternating-feature-sections";
import BannerCarouselSection from "@containers/banner-carousel-section";
import ServicesGridSection from "@containers/services-grid-section";
import ContactForm from "@components/common/form/contact-form";
import Loader from "@components/ui/loader/loader";
import CTAWithTiles from "@components/common/cta-section-with-tiles";
import AffiliateSection from "@containers/affiliate-section";

interface HomePageProps {
    data: any; // Home Page Data
    siteSettings: any; // Footer / Site Settings
    contactInformationData: any;
}

export default function Home({
    data,
    siteSettings,
    contactInformationData,
}: HomePageProps) {
    if (!data) {
        return <Loader />;
    }
    console.log(data);

    return (
        <Layout siteSettings={siteSettings}>
            <HeroSectionOne query={{ nodeByUri: data }} />
            <AlternatingFeatureSections query={{ nodeByUri: data }} />
            <FeatureSectionOne query={{ nodeByUri: data }} />
            <AffiliateSection query={{ nodeByUri: data }} />
            <ServicesGridSection query={{ nodeByUri: data }} />
            <ThreeImageDetailsSection query={{ nodeByUri: data }} />
            <CTAWithTiles query={{ nodeByUri: data }} />
            <Container className="bg-theme">
                <div className="my-14 lg:my-16 xl:my-20 px-0 pb-2 lg: xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full bg-theme">
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

    // 2) Extract the "home" portion & site settings
    const homeData = jsonData?.home || null;
    const contactInformationData = jsonData?.contactInformation || null;
    const siteSettings = jsonData?.nextJsSiteSettings || null;

    // 3) Return as props
    return {
        props: {
            data: homeData,
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
