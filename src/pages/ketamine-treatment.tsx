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
import References from "@components/common/references-section";
import fs from "fs";
import path from "path";

interface KetamineTreatmentPageProps {
    data: any;
    siteSettings: any;
    contactInformationData: any;
}

export default function Home({
    data,
    siteSettings,
    contactInformationData,
}: KetamineTreatmentPageProps) {
    if (!data) {
        return <Loader />;
    }

    return (
        <>
            <Head>
                <title>
                    Ketamine Treatment in Irvine, CA | Spectrum Psychiatry
                </title>
                <meta
                    name="description"
                    content="Ketamine treatment in Irvine, CA at Spectrum Psychiatry. Learn about physician-supervised ketamine therapy for treatment-resistant depression and mental health support at 15615 Alton Pkwy Ste 220."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <HeroSectionServices query={{ nodeByUri: data }} />
                <AlternatingFeatureSections query={{ nodeByUri: data }} />
                <FeatureSectionThree query={{ nodeByUri: data }} />

                <Container className="bg-theme">
                    <section className="py-12 lg:py-16 xl:max-w-screen-xl mx-auto px-4">
                        <h1 className="text-3xl md:text-4xl font-bold theme-text-heading mb-6">
                            Ketamine Treatment in Irvine, CA
                        </h1>

                        <p className="text-base md:text-lg leading-8 theme-text-description mb-5">
                            Spectrum Psychiatry provides ketamine treatment in Irvine, CA for individuals who may be struggling with depression, anxiety symptoms, PTSD-related concerns, or treatment-resistant depression. Our clinic is located at 15615 Alton Pkwy Ste 220, Irvine, CA 92618.
                        </p>

                        <p className="text-base md:text-lg leading-8 theme-text-description mb-5">
                            Ketamine therapy may be considered when traditional treatment options have not provided enough relief. At Spectrum Psychiatry, care is personalized and supervised by experienced professionals who focus on safety, comfort, and each patient’s individual mental health needs.
                        </p>

                        <p className="text-base md:text-lg leading-8 theme-text-description">
                            If you are searching for ketamine therapy in Irvine, CA, our team can help you understand whether this treatment option may be appropriate for your situation.
                        </p>
                    </section>
                </Container>

                <Container className="bg-theme">
                    <section className="py-10 lg:py-14 xl:max-w-screen-xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                                <h2 className="text-xl font-bold theme-text-heading mb-3">
                                    What Is Ketamine Therapy?
                                </h2>
                                <p className="text-base leading-7 theme-text-description">
                                    Ketamine therapy is an advanced treatment option that may help some patients experience improvement when standard medications or therapy have not been enough.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                                <h2 className="text-xl font-bold theme-text-heading mb-3">
                                    Who May Benefit?
                                </h2>
                                <p className="text-base leading-7 theme-text-description">
                                    Patients with treatment-resistant depression, persistent mood symptoms, or difficult-to-treat mental health concerns may discuss ketamine treatment with a qualified provider.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                                <h2 className="text-xl font-bold theme-text-heading mb-3">
                                    Why Spectrum Psychiatry?
                                </h2>
                                <p className="text-base leading-7 theme-text-description">
                                    Our Irvine clinic provides personalized psychiatric care, careful evaluation, and physician-supervised treatment planning in a supportive clinical setting.
                                </p>
                            </div>
                        </div>
                    </section>
                </Container>

                <section className="mx-auto max-w-5xl px-6 py-12">
                    <div className="rounded-3xl bg-[#f7fbfb] p-8 ring-1 ring-zinc-100">
                        <h2 className="text-2xl font-bold text-zinc-900">
                            Research on Ketamine Treatment
                        </h2>
                        <p className="mt-4 text-base leading-7 text-zinc-700">
                            Ketamine treatment has shown promising results for individuals living with treatment-resistant depression. Harvard research highlights how ketamine may provide rapid relief for some patients when traditional treatments have not been effective.
                        </p>
                        <a
                            href="https://news.harvard.edu/gazette/story/2023/05/ketamine-found-effective-in-treatment-resistant-depression/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex rounded-xl bg-[#2f6f73] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#24585b]"
                        >
                            Read the Harvard Ketamine Article
                        </a>
                    </div>
                </section>

                <References query={{ nodeByUri: data }} />

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

    const ketamineTreatmentData = jsonData?.ketamineTreatment ?? null;
    const contactInformationData = jsonData?.contactInformation ?? null;
    const siteSettings = jsonData?.nextJsSiteSettings ?? null;

    return {
        props: {
            data: ketamineTreatmentData,
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