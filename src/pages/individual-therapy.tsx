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

interface IndividualTherapyPageProps {
    data: any;
    siteSettings: any;
    contactInformationData: any;
}

export default function Home({
    data,
    siteSettings,
    contactInformationData,
}: IndividualTherapyPageProps) {
    if (!data) {
        return <Loader />;
    }

    return (
        <>
            <Head>
                <title>
                    Individual Therapy in Irvine, CA | Spectrum Psychiatry
                </title>
                <meta
                    name="description"
                    content="Individual therapy in Irvine, CA at Spectrum Psychiatry. Personalized mental health support for anxiety, depression, stress, life transitions, and emotional challenges at 15615 Alton Pkwy Ste 220."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <HeroSectionServices query={{ nodeByUri: data }} />
                <AlternatingFeatureSections query={{ nodeByUri: data }} />
                <FeatureSectionThree query={{ nodeByUri: data }} />

                <Container className="bg-theme">
                    <section className="py-12 lg:py-16 xl:max-w-screen-xl mx-auto px-4">
                        <h1 className="text-3xl md:text-4xl font-bold theme-text-heading mb-6">
                            Individual Therapy in Irvine, CA
                        </h1>

                        <p className="text-base md:text-lg leading-8 theme-text-description mb-5">
                            Spectrum Psychiatry provides individual therapy in Irvine, CA for people seeking support with anxiety, depression, stress, emotional challenges, relationship concerns, and life transitions. Our clinic is located at 15615 Alton Pkwy Ste 220, Irvine, CA 92618.
                        </p>

                        <p className="text-base md:text-lg leading-8 theme-text-description mb-5">
                            Individual therapy offers a confidential and supportive space to explore thoughts, emotions, behaviors, and personal goals. Treatment is personalized to each patient’s needs and may help improve coping skills, emotional balance, and overall well-being.
                        </p>

                        <p className="text-base md:text-lg leading-8 theme-text-description">
                            If you are looking for therapy in Irvine, CA, Spectrum Psychiatry can help you take the next step toward better mental health with compassionate and professional care.
                        </p>
                    </section>
                </Container>

                <Container className="bg-theme">
                    <section className="py-10 lg:py-14 xl:max-w-screen-xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                                <h2 className="text-xl font-bold theme-text-heading mb-3">
                                    Support for Anxiety and Depression
                                </h2>
                                <p className="text-base leading-7 theme-text-description">
                                    Therapy can help patients better understand symptoms, build coping strategies, and work toward emotional stability.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                                <h2 className="text-xl font-bold theme-text-heading mb-3">
                                    Personalized Care
                                </h2>
                                <p className="text-base leading-7 theme-text-description">
                                    Each therapy plan is shaped around the patient’s needs, goals, concerns, and mental health history.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                                <h2 className="text-xl font-bold theme-text-heading mb-3">
                                    Confidential Environment
                                </h2>
                                <p className="text-base leading-7 theme-text-description">
                                    Spectrum Psychiatry provides a supportive and respectful setting for personal growth and mental health care.
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

    const individualTherapyData = jsonData?.individualTherapy ?? null;
    const contactInformationData = jsonData?.contactInformation ?? null;
    const siteSettings = jsonData?.nextJsSiteSettings ?? null;

    return {
        props: {
            data: individualTherapyData,
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