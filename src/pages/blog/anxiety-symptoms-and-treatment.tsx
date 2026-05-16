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
                    Anxiety Symptoms and Treatment | Irvine, CA | Spectrum Psychiatry
                </title>
                <meta
                    name="description"
                    content="Learn about common anxiety symptoms and treatment options in Irvine, CA. Spectrum Psychiatry provides personalized mental health care for anxiety, stress, and related concerns."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <Container>
                    <article className="py-16 xl:max-w-screen-md mx-auto px-4">
                        <img
                            src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2070&auto=format&fit=crop"
                            alt="Anxiety symptoms and treatment"
                            className="rounded-2xl mb-8 w-full h-[300px] object-cover"
                        />

                        <h1 className="text-4xl font-bold theme-text-heading mb-6">
                            Anxiety Symptoms and Treatment
                        </h1>

                        <p className="text-lg leading-8 theme-text-description mb-6">
                            Anxiety is more than occasional worry. It can affect your thoughts, sleep, relationships, work, and daily routine. When anxiety becomes persistent or difficult to control, professional support can help you better understand your symptoms and find effective treatment options.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Common Symptoms of Anxiety
                        </h2>

                        <p className="mb-5">
                            Anxiety can look different from person to person. Some people mainly experience racing thoughts and worry, while others notice physical symptoms that feel overwhelming.
                        </p>

                        <ul className="list-disc pl-6 mb-6">
                            <li>Excessive worry or fear</li>
                            <li>Restlessness or feeling on edge</li>
                            <li>Difficulty sleeping</li>
                            <li>Racing thoughts</li>
                            <li>Muscle tension</li>
                            <li>Fatigue or trouble concentrating</li>
                            <li>Panic-like symptoms such as rapid heartbeat or shortness of breath</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            When Anxiety Becomes a Problem
                        </h2>

                        <p className="mb-5">
                            It may be time to seek help when anxiety interferes with your daily responsibilities, relationships, sleep, or ability to enjoy life. Avoiding situations, constantly overthinking, or feeling physically tense most days can be signs that additional support is needed.
                        </p>

                        <p className="mb-5">
                            Anxiety is treatable, and many people improve with the right combination of therapy, medication management, lifestyle strategies, and ongoing support.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Treatment Options for Anxiety
                        </h2>

                        <p className="mb-5">
                            Treatment often begins with a careful evaluation. A provider may discuss your symptoms, medical history, stressors, sleep patterns, and previous treatment experiences. From there, a personalized plan can be developed.
                        </p>

                        <p className="mb-5">
                            Anxiety treatment may include individual therapy, psychiatric medication management, coping strategies, and follow-up care to monitor progress. The goal is to reduce symptoms while helping you feel more confident and balanced in everyday life.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Anxiety Treatment in Irvine, CA
                        </h2>

                        <p className="mb-5">
                            Spectrum Psychiatry provides mental health care for anxiety in Irvine, CA at 15615 Alton Pkwy Ste 220. Our team offers personalized support for anxiety, stress, depression, ADHD, and other mental health concerns.
                        </p>

                        <p className="mb-5">
                            If anxiety is affecting your quality of life, speaking with a qualified mental health provider can be an important step toward relief and long-term well-being.
                        </p>

                        <div className="mt-10 p-6 rounded-2xl bg-[#f7fbfb] text-center">
                            <h3 className="text-xl font-bold mb-3">
                                Looking for Anxiety Treatment in Irvine, CA?
                            </h3>

                            <p className="mb-4">
                                Spectrum Psychiatry provides personalized psychiatric care, therapy, and medication management for anxiety and related concerns.
                            </p>

                            <a
                                href="/contact"
                                className="inline-block bg-spectrumBlue text-white px-6 py-3 rounded-full font-semibold"
                            >
                                Book an Appointment
                            </a>
                        </div>
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