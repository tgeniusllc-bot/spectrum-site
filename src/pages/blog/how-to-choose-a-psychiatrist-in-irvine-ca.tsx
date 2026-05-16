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
                    content="How to choose a psychiatrist in Irvine, CA. Learn what to look for in psychiatric care, medication management, therapy, communication, and treatment options."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <Container>
                    <article className="py-16 xl:max-w-screen-md mx-auto px-4">
                        <img
                            src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=2070&auto=format&fit=crop"
                            alt="Psychiatrist consultation in Irvine CA"
                            className="rounded-2xl mb-8 w-full h-[300px] object-cover"
                        />

                        <h1 className="text-4xl font-bold theme-text-heading mb-6">
                            How to Choose a Psychiatrist in Irvine, CA
                        </h1>

                        <p className="text-lg leading-8 theme-text-description mb-6">
                            Choosing the right psychiatrist is an important step in your mental health journey. The right provider should listen carefully, understand your concerns, and create a treatment plan based on your individual needs.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Look for Personalized Care
                        </h2>

                        <p className="mb-5">
                            Mental health care is not one-size-fits-all. A strong psychiatric provider takes time to understand your symptoms, medical history, lifestyle, treatment goals, and previous experiences with therapy or medication.
                        </p>

                        <p className="mb-5">
                            Personalized care helps ensure that treatment is not only clinically appropriate, but also realistic and sustainable for your daily life.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Ask About Treatment Options
                        </h2>

                        <p className="mb-5">
                            When choosing a psychiatrist in Irvine, CA, it is helpful to ask what treatment options are available. Some patients may benefit from medication management, while others may need therapy, lifestyle support, or advanced treatment options.
                        </p>

                        <p className="mb-5">
                            Spectrum Psychiatry provides care options that may include psychiatric evaluations, medication management, individual therapy, ketamine treatment, and support for depression, anxiety, ADHD, and other mental health concerns.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Consider Communication and Comfort
                        </h2>

                        <p className="mb-5">
                            You should feel comfortable asking questions about your diagnosis, medications, side effects, treatment timeline, and next steps. Good communication builds trust and helps patients feel more confident in their care.
                        </p>

                        <p className="mb-5">
                            A supportive provider should explain options clearly and work with you to adjust the plan when needed.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Location and Accessibility Matter
                        </h2>

                        <p className="mb-5">
                            Ongoing mental health care often requires follow-up visits, so location can matter. If you are searching for a psychiatrist in Irvine, CA, choosing a convenient and accessible clinic may make it easier to stay consistent with care.
                        </p>

                        <p className="mb-5">
                            Spectrum Psychiatry is located at 15615 Alton Pkwy Ste 220, Irvine, CA 92618.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Psychiatric Care in Irvine, CA
                        </h2>

                        <p className="mb-5">
                            Spectrum Psychiatry provides personalized mental health care in Irvine, CA for individuals seeking help with depression, anxiety, ADHD, mood symptoms, medication concerns, and advanced treatment options such as ketamine therapy.
                        </p>

                        <p className="mb-5">
                            If you are ready to take the next step, working with an experienced mental health provider can help you better understand your options and move toward improved well-being.
                        </p>

                        <div className="mt-10 p-6 rounded-2xl bg-[#f7fbfb] text-center">
                            <h3 className="text-xl font-bold mb-3">
                                Looking for a Psychiatrist in Irvine, CA?
                            </h3>

                            <p className="mb-4">
                                Spectrum Psychiatry offers personalized psychiatric care, medication management, therapy, and advanced mental health treatment options.
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