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
                    What Is Ketamine Therapy? | Irvine, CA | Spectrum Psychiatry
                </title>
                <meta
                    name="description"
                    content="What is ketamine therapy? Learn how ketamine treatment works, who it may help, and how Spectrum Psychiatry in Irvine, CA provides professional mental health care."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <Container className="bg-theme">
                    <article className="py-16 xl:max-w-screen-md mx-auto px-4">
                        <h1 className="text-4xl font-bold theme-text-heading mb-6">
                            What Is Ketamine Therapy?
                        </h1>

                        <p className="text-lg leading-8 theme-text-description mb-6">
                            Ketamine therapy is an innovative mental health treatment that has gained attention for its potential to help individuals experiencing treatment-resistant depression and other challenging mental health conditions.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            How Does Ketamine Therapy Work?
                        </h2>

                        <p className="text-base leading-7 mb-5">
                            Ketamine works differently from traditional antidepressants. Instead of focusing only on serotonin or dopamine, it affects glutamate, a neurotransmitter involved in brain function and neural connections.
                        </p>

                        <p className="text-base leading-7 mb-5">
                            This may help the brain form new connections and improve mood more rapidly than conventional treatments in some individuals.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Who May Benefit from Ketamine Therapy?
                        </h2>

                        <p className="text-base leading-7 mb-5">
                            Ketamine therapy may be considered for individuals who have not experienced enough improvement with traditional treatments. This may include people dealing with:
                        </p>

                        <ul className="list-disc pl-6 mb-6">
                            <li>Treatment-resistant depression</li>
                            <li>Severe mood symptoms</li>
                            <li>Anxiety-related concerns</li>
                            <li>PTSD-related symptoms</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Is Ketamine Therapy Safe?
                        </h2>

                        <p className="text-base leading-7 mb-5">
                            When provided in a clinical setting under professional supervision, ketamine therapy is carefully monitored to ensure patient safety. Treatment plans are personalized, and patients are evaluated before starting therapy.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Ketamine Therapy in Irvine, CA
                        </h2>

                        <p className="text-base leading-7 mb-5">
                            Spectrum Psychiatry offers ketamine therapy in Irvine, CA at 15615 Alton Pkwy Ste 220. Our team provides individualized care focused on patient comfort, safety, and long-term mental health improvement.
                        </p>

                        <p className="text-base leading-7">
                            If you are exploring new treatment options, ketamine therapy may be worth discussing with a qualified mental health provider.
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