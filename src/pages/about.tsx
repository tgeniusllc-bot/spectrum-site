import fs from "fs";
import path from "path";
import Head from "next/head";
import Layout from "@components/layout/layout";
import Divider from "@components/ui/divider";
import Container from "@components/ui/container";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Loader from "@components/ui/loader/loader";
import AboutHero from "@containers/about-hero";
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
        <>
            <Head>
                <title>
                    About Spectrum Psychiatry | Mental Health Clinic in Irvine, CA
                </title>

                <meta
                    name="description"
                    content="Learn about Spectrum Psychiatry, a mental health clinic located at 15615 Alton Pkwy Ste 220, Irvine, CA 92618. We provide psychiatric care, medication management, ketamine therapy, and support for depression, anxiety, ADHD, and other mental health conditions."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <AboutHero query={{ nodeByUri: data }} />

                <Container className="bg-theme">
                    <section className="py-12 lg:py-16 xl:max-w-screen-xl mx-auto px-4">
                        <h1 className="text-3xl md:text-4xl font-bold theme-text-heading mb-6">
                            Mental Health Clinic in Irvine, CA
                        </h1>

                        <p className="text-base md:text-lg leading-8 theme-text-description mb-5">
                            Spectrum Psychiatry is a trusted mental health clinic located at 15615 Alton Pkwy Ste 220, Irvine, CA 92618. We provide comprehensive psychiatric care for individuals seeking support with depression, anxiety, ADHD, and other mental health conditions.
                        </p>

                        <p className="text-base md:text-lg leading-8 theme-text-description mb-5">
                            Our experienced team offers personalized treatment plans tailored to each patient’s needs, including medication management, ketamine therapy, and ongoing mental health support.
                        </p>

                        <p className="text-base md:text-lg leading-8 theme-text-description">
                            At Spectrum Psychiatry, our mission is to help individuals in Irvine, CA improve their mental health, restore balance, and achieve a better quality of life through compassionate and evidence-based care.
                        </p>
                    </section>
                </Container>

                <AboutOurTeam query={{ nodeByUri: data }} />

                <Divider className="mb-0" />
            </Layout>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const filePath = path.join(process.cwd(), "data", "wordpressData.json");

    const fileContents = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileContents);

    const aboutData = jsonData?.about ?? null;
    const siteSettings = jsonData?.nextJsSiteSettings ?? null;

    return {
        props: {
            data: aboutData,
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