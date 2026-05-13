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
                    content="Learn about safe ketamine treatment in Irvine, CA for depression, anxiety, PTSD, and treatment-resistant depression at Spectrum Psychiatry."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <HeroSectionServices query={{ nodeByUri: data }} />
                <AlternatingFeatureSections query={{ nodeByUri: data }} />
                <FeatureSectionThree query={{ nodeByUri: data }} />

                <section className="mx-auto max-w-5xl px-6 py-12">
                    <div className="rounded-3xl bg-[#f7fbfb] p-8 ring-1 ring-zinc-100">
                        <h2 className="text-2xl font-bold text-zinc-900">
                            Research on Ketamine Treatment
                        </h2>
                        <p className="mt-4 text-base leading-7 text-zinc-700">
                            Ketamine treatment has shown promising results for
                            individuals living with treatment-resistant
                            depression. Harvard research highlights how ketamine
                            may provide rapid relief for some patients when
                            traditional treatments have not been effective.
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
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const filePath = path.join(process.cwd(), "data", "wordpressData.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const ketamineTreatmentData = jsonData.ketamineTreatment;
    const contactInformationData = jsonData?.contactInformation || null;
    const siteSettings = jsonData?.nextJsSiteSettings || null;

    return {
        props: {
            data: ketamineTreatmentData,
            contactInformationData,
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