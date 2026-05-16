import Head from "next/head";
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

interface SuboxoneTherapyPageProps {
    data: any;
    siteSettings: any;
    contactInformationData: any;
}

export default function Home({
    data,
    siteSettings,
    contactInformationData,
}: SuboxoneTherapyPageProps) {
    if (!data) {
        return <Loader />;
    }

    return (
        <>
            <Head>
                <title>
                    Suboxone Treatment in Irvine, CA | Spectrum Psychiatry
                </title>
                <meta
                    name="description"
                    content="Suboxone treatment in Irvine, CA at Spectrum Psychiatry. Personalized support for opioid dependence with supervised care at 15615 Alton Pkwy Ste 220, Irvine, CA 92618."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <HeroSectionServices query={{ nodeByUri: data }} />
                <AlternatingFeatureSections query={{ nodeByUri: data }} />
                <FeatureSectionThree query={{ nodeByUri: data }} />

                <Container className="bg-theme">
                    <section className="py-12 lg:py-16 xl:max-w-screen-xl mx-auto px-4">
                        <h1 className="text-3xl md:text-4xl font-bold theme-text-heading mb-6">
                            Suboxone Treatment in Irvine, CA
                        </h1>

                        <p className="text-base md:text-lg leading-8 theme-text-description mb-5">
                            Spectrum Psychiatry provides Suboxone treatment in Irvine, CA for individuals seeking professional support with opioid dependence. Our clinic is located at 15615 Alton Pkwy Ste 220, Irvine, CA 92618.
                        </p>

                        <p className="text-base md:text-lg leading-8 theme-text-description mb-5">
                            Suboxone treatment may help reduce cravings and support recovery as part of a structured, supervised care plan. At Spectrum Psychiatry, treatment is personalized based on each patient’s history, symptoms, goals, and ongoing needs.
                        </p>

                        <p className="text-base md:text-lg leading-8 theme-text-description">
                            If you are looking for Suboxone treatment in Irvine, CA, our team can help you understand available options and take the next step toward stability and long-term recovery.
                        </p>
                    </section>
                </Container>

                <Container className="bg-theme">
                    <section className="py-10 lg:py-14 xl:max-w-screen-xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                                <h2 className="text-xl font-bold theme-text-heading mb-3">
                                    Supervised Treatment
                                </h2>
                                <p className="text-base leading-7 theme-text-description">
                                    Care is provided in a professional setting with attention to safety, progress, and each patient’s individual recovery needs.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                                <h2 className="text-xl font-bold theme-text-heading mb-3">
                                    Personalized Recovery Support
                                </h2>
                                <p className="text-base leading-7 theme-text-description">
                                    Treatment plans are tailored to each patient’s goals, medical history, symptoms, and ongoing response to care.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                                <h2 className="text-xl font-bold theme-text-heading mb-3">
                                    Confidential Care
                                </h2>
                                <p className="text-base leading-7 theme-text-description">
                                    Spectrum Psychiatry offers respectful, confidential support for individuals seeking help with opioid dependence.
                                </p>
                            </div>
                        </div>
                    </section>
                </Container>

                <Container>
                    <div className="my-14 lg:my-16 xl:my-20 px-0 pb-2 xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
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
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const filePath = path.join(process.cwd(), "data", "wordpressData.json");
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileContents);

    const suboxoneTherapyData = jsonData?.suboxoneTherapy ?? null;
    const contactInformationData = jsonData?.contactInformation ?? null;
    const siteSettings = jsonData?.nextJsSiteSettings ?? null;

    return {
        props: {
            data: suboxoneTherapyData,
            contactInformationData,
            siteSettings,
            ...(await serverSideTranslations(locale ?? "en", [
                "common",
                "forms",
                "menu",
                "footer",
            ])),
        },
    };
};