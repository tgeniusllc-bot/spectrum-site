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
                    Medication Management: What to Expect | Irvine, CA
                </title>
                <meta
                    name="description"
                    content="Learn what to expect from medication management in Irvine, CA. Spectrum Psychiatry explains psychiatric evaluations, follow-up visits, medication adjustments, and personalized care."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <Container>
                    <article className="py-16 xl:max-w-screen-md mx-auto px-4">
                        <img
                            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2070&auto=format&fit=crop"
                            alt="Medication management and psychiatric care"
                            className="rounded-2xl mb-8 w-full h-[300px] object-cover"
                        />

                        <h1 className="text-4xl font-bold theme-text-heading mb-6">
                            Medication Management: What to Expect
                        </h1>

                        <p className="text-lg leading-8 theme-text-description mb-6">
                            Medication management is an important part of psychiatric care for many people dealing with depression, anxiety, ADHD, mood symptoms, and other mental health concerns. The goal is not simply to prescribe medication, but to create a safe, personalized plan that supports long-term well-being.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            What Is Medication Management?
                        </h2>

                        <p className="mb-5">
                            Medication management involves evaluating symptoms, reviewing medical history, discussing treatment goals, and monitoring how a patient responds to medication over time. It may include starting a new medication, adjusting dosage, changing medication, or combining medication with therapy and other supportive care.
                        </p>

                        <p className="mb-5">
                            A good medication plan should be personalized. Every patient responds differently, so follow-up care is essential for safety, effectiveness, and comfort.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            What Happens During the First Visit?
                        </h2>

                        <p className="mb-5">
                            During an initial appointment, a provider may ask about current symptoms, previous diagnoses, past medications, family history, sleep, stress, lifestyle, and overall health. This information helps guide treatment decisions.
                        </p>

                        <p className="mb-5">
                            Patients are encouraged to ask questions about benefits, possible side effects, how long medication may take to work, and what to expect during follow-up visits.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Why Follow-Up Appointments Matter
                        </h2>

                        <p className="mb-5">
                            Medication management is an ongoing process. Follow-up appointments help track progress, identify side effects, and make adjustments when needed. Sometimes small changes can make a major difference in how a patient feels.
                        </p>

                        <p className="mb-5">
                            Regular monitoring also helps ensure that treatment continues to match the patient’s goals and changing needs.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Medication Management in Irvine, CA
                        </h2>

                        <p className="mb-5">
                            Spectrum Psychiatry provides medication management in Irvine, CA at 15615 Alton Pkwy Ste 220. Our team focuses on thoughtful psychiatric care, clear communication, and individualized treatment planning.
                        </p>

                        <p className="mb-5">
                            If you are considering medication for depression, anxiety, ADHD, mood symptoms, or another mental health concern, professional guidance can help you understand your options and move forward with confidence.
                        </p>

                        <div className="mt-10 p-6 rounded-2xl bg-[#f7fbfb] text-center">
                            <h3 className="text-xl font-bold mb-3">
                                Need Medication Management in Irvine, CA?
                            </h3>

                            <p className="mb-4">
                                Spectrum Psychiatry provides personalized psychiatric care and medication management designed around your needs.
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