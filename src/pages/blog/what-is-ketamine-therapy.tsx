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
                    content="What is ketamine therapy? Learn how ketamine treatment works, benefits, safety, and options available at Spectrum Psychiatry in Irvine, CA."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <Container>
                    <article className="py-16 xl:max-w-screen-md mx-auto px-4">

                        {/* 🔥 HERO IMAGE */}
                        <img
                            src="https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=2070&auto=format&fit=crop"
                            alt="Ketamine therapy treatment"
                            className="rounded-2xl mb-8 w-full h-[300px] object-cover"
                        />

                        <h1 className="text-4xl font-bold theme-text-heading mb-6">
                            What Is Ketamine Therapy?
                        </h1>

                        <p className="text-lg leading-8 theme-text-description mb-6">
                            Ketamine therapy is an advanced mental health treatment that has gained attention for its potential to help individuals experiencing treatment-resistant depression, anxiety, and other challenging mental health conditions.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            How Does Ketamine Therapy Work?
                        </h2>

                        <p className="mb-5">
                            Ketamine works differently from traditional antidepressants. While most medications target serotonin or dopamine, ketamine primarily affects glutamate, a neurotransmitter involved in brain communication and neural connections.
                        </p>

                        <p className="mb-5">
                            This mechanism may help the brain form new pathways more quickly, which is why some individuals report faster symptom relief compared to traditional treatments.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Who May Benefit from Ketamine Therapy?
                        </h2>

                        <p className="mb-5">
                            Ketamine therapy may be considered for individuals who have not experienced sufficient improvement with standard treatment approaches. This may include people dealing with:
                        </p>

                        <ul className="list-disc pl-6 mb-6">
                            <li>Treatment-resistant depression</li>
                            <li>Severe or persistent mood symptoms</li>
                            <li>Anxiety disorders</li>
                            <li>PTSD-related concerns</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            What to Expect During Treatment
                        </h2>

                        <p className="mb-5">
                            Ketamine therapy is typically administered in a controlled clinical environment under professional supervision. Patients are evaluated beforehand, and treatment is tailored to their individual needs.
                        </p>

                        <p className="mb-5">
                            During treatment, patients are monitored to ensure safety and comfort. Follow-up care may also be recommended to support long-term mental health improvement.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Is Ketamine Therapy Safe?
                        </h2>

                        <p className="mb-5">
                            When provided in a medical setting, ketamine therapy is carefully supervised. Providers evaluate patient history and monitor each session to reduce risks and ensure appropriate care.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Ketamine Therapy in Irvine, CA
                        </h2>

                        <p className="mb-5">
                            Spectrum Psychiatry offers ketamine therapy in Irvine, CA at 15615 Alton Pkwy Ste 220. Our team provides personalized treatment plans focused on safety, comfort, and long-term results.
                        </p>

                        <p className="mb-5">
                            If you are exploring new options for mental health care, ketamine therapy may be worth discussing with a qualified provider.
                        </p>

                        {/* 🔥 CTA (EN ÖNEMLİ KISIM) */}
                        <div className="mt-10 p-6 rounded-2xl bg-[#f7fbfb] text-center">
                            <h3 className="text-xl font-bold mb-3">
                                Looking for Ketamine Therapy in Irvine, CA?
                            </h3>

                            <p className="mb-4">
                                Spectrum Psychiatry provides professional mental health care including ketamine therapy, medication management, and personalized treatment plans.
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