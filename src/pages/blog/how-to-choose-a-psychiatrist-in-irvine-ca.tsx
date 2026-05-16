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
                    How to Choose a Psychiatrist in Irvine, CA | Spectrum Psychiatry
                </title>
                <meta
                    name="description"
                    content="Learn how to choose a psychiatrist in Irvine, CA. Spectrum Psychiatry explains what to look for in mental health care, medication management, therapy, and treatment options."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <Container className="bg-theme">
                    <article className="py-16 xl:max-w-screen-md mx-auto px-4">
                        <h1 className="text-4xl font-bold theme-text-heading mb-6">
                            How to Choose a Psychiatrist in Irvine, CA
                        </h1>

                        <p className="text-lg leading-8 theme-text-description mb-6">
                            Choosing the right psychiatrist is an important step in your mental health journey. A good psychiatric provider should listen carefully, understand your concerns, and create a treatment plan based on your individual needs.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Look for Personalized Care
                        </h2>

                        <p className="text-base leading-7 mb-5">
                            Mental health care is not one-size-fits-all. When choosing a psychiatrist, look for a clinic that takes time to understand your symptoms, history, goals, and preferences before recommending treatment.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Ask About Treatment Options
                        </h2>

                        <p className="text-base leading-7 mb-5">
                            A strong psychiatric clinic may offer several treatment options, including psychiatric evaluations, medication management, therapy, and advanced treatments such as ketamine therapy when appropriate.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Consider Communication and Comfort
                        </h2>

                        <p className="text-base leading-7 mb-5">
                            You should feel comfortable asking questions about your care. Clear communication, respectful support, and follow-up are important parts of effective mental health treatment.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Location and Accessibility Matter
                        </h2>

                        <p className="text-base leading-7 mb-5">
                            If you are searching for a psychiatrist in Irvine, CA, choosing a convenient location can make ongoing care easier. Spectrum Psychiatry is located at 15615 Alton Pkwy Ste 220, Irvine, CA 92618.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Psychiatric Care in Irvine, CA
                        </h2>

                        <p className="text-base leading-7 mb-5">
                            Spectrum Psychiatry provides mental health care in Irvine, CA, including medication management, individual therapy, ketamine treatment, and support for depression, anxiety, ADHD, and other mental health concerns.
                        </p>

                        <p className="text-base leading-7">
                            If you are ready to take the next step, working with an experienced mental health provider can help you better understand your options and move toward improved well-being.
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