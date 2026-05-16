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
                    content="Learn the signs of depression, symptoms, and when to seek help. Spectrum Psychiatry in Irvine, CA offers professional mental health care and treatment options."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <Container>
                    <article className="py-16 xl:max-w-screen-md mx-auto px-4">

                        {/* 🔥 HERO IMAGE */}
                        <img
                            src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=2070&auto=format&fit=crop"
                            alt="Depression support and mental health"
                            className="rounded-2xl mb-8 w-full h-[300px] object-cover"
                        />

                        <h1 className="text-4xl font-bold theme-text-heading mb-6">
                            Signs of Depression
                        </h1>

                        <p className="text-lg leading-8 theme-text-description mb-6">
                            Depression is a common mental health condition that can affect how you feel, think, and function in daily life. Recognizing the signs early can help you seek the right support and treatment.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Emotional Signs of Depression
                        </h2>

                        <ul className="list-disc pl-6 mb-6">
                            <li>Persistent sadness or low mood</li>
                            <li>Loss of interest in activities once enjoyed</li>
                            <li>Feelings of hopelessness or emptiness</li>
                            <li>Low self-esteem or excessive guilt</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Physical and Behavioral Symptoms
                        </h2>

                        <ul className="list-disc pl-6 mb-6">
                            <li>Changes in sleep patterns (too much or too little)</li>
                            <li>Low energy or constant fatigue</li>
                            <li>Difficulty concentrating or making decisions</li>
                            <li>Changes in appetite or weight</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            When Should You Seek Help?
                        </h2>

                        <p className="mb-5">
                            If symptoms last longer than two weeks or begin to interfere with your work, relationships, or daily life, it may be time to seek professional help. Early support can significantly improve outcomes.
                        </p>

                        <p className="mb-5">
                            Many people delay getting help, but depression is treatable, and support is available.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Depression Treatment in Irvine, CA
                        </h2>

                        <p className="mb-5">
                            Spectrum Psychiatry provides mental health care in Irvine, CA at 15615 Alton Pkwy Ste 220. Our team offers personalized treatment options including therapy, medication management, and advanced treatments when appropriate.
                        </p>

                        <p className="mb-5">
                            Treatment is tailored to each individual and may focus on improving mood, daily functioning, and long-term mental well-being.
                        </p>

                        {/* 🔥 CTA */}
                        <div className="mt-10 p-6 rounded-2xl bg-[#f7fbfb] text-center">
                            <h3 className="text-xl font-bold mb-3">
                                Struggling with Depression?
                            </h3>

                            <p className="mb-4">
                                Spectrum Psychiatry in Irvine, CA provides professional support, therapy, and treatment options to help you feel better.
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