import Head from "next/head";
import Layout from "@components/layout/layout";
import Container from "@components/ui/container";
import Divider from "@components/ui/divider";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import fs from "fs";
import path from "path";

interface BlogPostProps {
    siteSettings: any;
}

export default function BlogPost({ siteSettings }: BlogPostProps) {
    return (
        <>
            <Head>
                <title>
                    Signs of Depression | Irvine, CA | Spectrum Psychiatry
                </title>
                <meta
                    name="description"
                    content="Learn the common signs of depression and when to seek help. Spectrum Psychiatry in Irvine, CA provides professional mental health support and treatment options."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <Container className="bg-theme">
                    <article className="py-16 xl:max-w-screen-md mx-auto px-4">
                        <h1 className="text-4xl font-bold theme-text-heading mb-6">
                            Signs of Depression
                        </h1>

                        <p className="text-lg leading-8 theme-text-description mb-6">
                            Depression is a common mental health condition that can affect how you feel, think, and function in daily life. Recognizing the signs early can help you seek the right support and treatment.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Common Emotional Symptoms
                        </h2>

                        <ul className="list-disc pl-6 mb-6">
                            <li>Persistent sadness or low mood</li>
                            <li>Loss of interest in activities</li>
                            <li>Feelings of hopelessness</li>
                            <li>Low self-esteem</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Physical and Behavioral Signs
                        </h2>

                        <ul className="list-disc pl-6 mb-6">
                            <li>Changes in sleep patterns</li>
                            <li>Low energy or fatigue</li>
                            <li>Difficulty concentrating</li>
                            <li>Changes in appetite</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            When to Seek Help
                        </h2>

                        <p className="text-base leading-7 mb-5">
                            If symptoms last more than a couple of weeks or begin to interfere with your daily life, it may be time to seek professional help. Early support can make a significant difference in recovery.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Depression Treatment in Irvine, CA
                        </h2>

                        <p className="text-base leading-7 mb-5">
                            Spectrum Psychiatry provides mental health support in Irvine, CA at 15615 Alton Pkwy Ste 220. Our team offers personalized treatment options including therapy, medication management, and advanced treatments when appropriate.
                        </p>

                        <p className="text-base leading-7">
                            If you are experiencing signs of depression, you are not alone. Professional help is available, and taking the first step can lead to meaningful improvement.
                        </p>
                    </article>
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

    const siteSettings = jsonData?.nextJsSiteSettings ?? null;

    return {
        props: {
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