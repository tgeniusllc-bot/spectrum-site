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

interface MedicationManagementTherapyPageProps {
    data: any;
    siteSettings: any;
    contactInformationData: any;
}

export default function Home({
    data,
    siteSettings,
    contactInformationData,
}: MedicationManagementTherapyPageProps) {
    if (!data) {
        return <Loader />;
    }

    return (
        <>
            <Head>
                <title>
                    Medication Management in Irvine, CA | Spectrum Psychiatry
                </title>
                <meta
                    name="description"
                    content="Medication management in Irvine, CA at Spectrum Psychiatry. Personalized psychiatric medication support for depression, anxiety, ADHD, mood disorders, and mental health care at 15615 Alton Pkwy Ste 220."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <HeroSectionServices query={{ nodeByUri: data }} />
                <AlternatingFeatureSections query={{ nodeByUri: data }} />
                <FeatureSectionThree query={{ nodeByUri: data }} />

                <Container className="bg-theme">
                    <section className="py-12 lg:py-16 xl:max-w-screen-xl mx-auto px-4">
                        <h1 className="text-3xl md:text-4xl font-bold theme-text-heading mb-6">
                            Medication Management in Irvine, CA
                        </h1>

                        <p className="text-base md:text-lg leading-8 theme-text-description mb-5">
                            Spectrum Psychiatry provides medication management in Irvine, CA for individuals seeking professional support with depression, anxiety, ADHD, mood disorders, and other mental health concerns. Our clinic is located at 15615 Alton Pkwy Ste 220, Irvine, CA 92618.
                        </p>

                        <p className="text-base md:text-lg leading-8 theme-text-description mb-5">
                            Psychiatric medication management is designed to help patients find safe, effective, and personalized treatment options. Our team works carefully with each patient to review symptoms, treatment history, medication response, and ongoing progress.
                        </p>

                        <p className="text-base md:text-lg leading-8 theme-text-description">
                            If you are looking for medication management in Irvine, CA, Spectrum Psychiatry can help you better understand your options and create a care plan tailored to your needs.
                        </p>
                    </section>
                </Container>

                <Container className="bg-theme">
                    <section className="py-10 lg:py-14 xl:max-w-screen-xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                                <h2 className="text-xl font-bold theme-text-heading mb-3">
                                    Personalized Treatment Plans
                                </h2>
                                <p className="text-base leading-7 theme-text-description">
                                    Medication decisions are based on each patient’s symptoms, history, goals, and response to treatment.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                                <h2 className="text-xl font-bold theme-text-heading mb-3">
                                    Ongoing Monitoring
                                </h2>
                                <p className="text-base leading-7 theme-text-description">
                                    Follow-up visits help track progress, adjust medication when needed, and support long-term mental health.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                                <h2 className="text-xl font-bold theme-text-heading mb-3">
                                    Supportive Psychiatric Care
                                </h2>
                                <p className="text-base leading-7 theme-text-description">
                                    Our Irvine clinic provides compassionate psychiatric care in a professional and confidential setting.
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

    const medicationManagementTherapyData =
        jsonData?.medicationManagementTherapy ?? null;

    const contactInformationData = jsonData?.contactInformation ?? null;
    const siteSettings = jsonData?.nextJsSiteSettings ?? null;

    return {
        props: {
            data: medicationManagementTherapyData,
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