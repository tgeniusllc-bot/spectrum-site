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
                <title>About Spectrum Psychiatry | Mental Health Clinic in Irvine, CA</title>
                <meta
                    name="description"
                    content="Learn about Spectrum Psychiatry, a mental health clinic in Irvine, CA offering personalized psychiatric care, ketamine therapy, medication management, and treatment for depression, anxiety, ADHD, and other mental health conditions."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <AboutHero query={{ nodeByUri: data }} />

                <Container className="bg-theme">
                    <section className="py-12 lg:py-16 xl:max-w-screen-xl mx-auto px-4">
                        <h1 className="text-3xl md:text-4xl font-bold theme-text-heading mb-6">
                            Mental Health Care in Irvine, CA
                        </h1>

                        <p className="text-base md:text-lg leading-8 theme-text-description mb-5">
                            Spectrum Psychiatry is a mental health clinic in Irvine, CA dedicated to providing compassionate, evidence-based psychiatric care for individuals seeking support with depression, anxiety, ADHD, mood disorders, and other mental health conditions.
                        </p>

                        <p className="text-base md:text-lg leading-8 theme-text-description mb-5">
                            Our team offers personalized treatment plans designed around each patient’s needs. Services may include psychiatric evaluations, medication management, ketamine therapy, and ongoing mental health support.
                        </p>

                        <p className="text-base md:text-lg leading-8 theme-text-description">
                            We are committed to helping patients in Irvine and the surrounding Orange County area improve their mental health, restore balance, and move toward a better quality of life.
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
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const aboutData = jsonData.about;
    const siteSettings = jsonData?.nextJsSiteSettings || null;

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