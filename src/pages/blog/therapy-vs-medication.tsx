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
                    Therapy vs Medication: Which Is Right for You? | Irvine, CA
                </title>
                <meta
                    name="description"
                    content="Therapy vs medication: learn how each option may help with depression, anxiety, ADHD, and mental health concerns. Spectrum Psychiatry provides care in Irvine, CA."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <Container>
                    <article className="py-16 xl:max-w-screen-md mx-auto px-4">
                        <img
                            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2070&auto=format&fit=crop"
                            alt="Therapy and medication mental health care"
                            className="rounded-2xl mb-8 w-full h-[300px] object-cover"
                        />

                        <h1 className="text-4xl font-bold theme-text-heading mb-6">
                            Therapy vs Medication: Which Is Right for You?
                        </h1>

                        <p className="text-lg leading-8 theme-text-description mb-6">
                            When someone begins looking for mental health support, one of the most common questions is whether therapy, medication, or a combination of both may be the best option. The answer depends on symptoms, history, goals, and personal needs.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            What Therapy Can Help With
                        </h2>

                        <p className="mb-5">
                            Therapy provides a confidential space to talk through emotions, stress, relationships, life transitions, and patterns that may be affecting your mental health. It can help people build coping skills, understand triggers, and make meaningful changes over time.
                        </p>

                        <p className="mb-5">
                            Therapy may be especially helpful for anxiety, depression, grief, trauma-related concerns, relationship stress, and major life changes.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            What Medication Management Can Help With
                        </h2>

                        <p className="mb-5">
                            Medication management focuses on evaluating symptoms and considering whether psychiatric medication may support improvement. Medication may help reduce symptoms such as persistent depression, anxiety, mood instability, sleep problems, or difficulty concentrating.
                        </p>

                        <p className="mb-5">
                            A provider may recommend medication when symptoms are moderate to severe, long-lasting, or interfering with daily life. Follow-up visits are important to monitor progress, side effects, and dosage needs.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Can Therapy and Medication Work Together?
                        </h2>

                        <p className="mb-5">
                            Yes. Many patients benefit from a combined approach. Therapy can help with emotional insight and coping strategies, while medication may help reduce symptoms enough for a person to function better and engage more fully in treatment.
                        </p>

                        <p className="mb-5">
                            The best plan is usually personalized. Some people do well with therapy alone, some benefit from medication alone, and others need both.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            How to Decide What Is Right for You
                        </h2>

                        <p className="mb-5">
                            A professional evaluation can help clarify your options. A provider may ask about your symptoms, how long they have been present, how they affect your life, previous treatment experiences, medical history, and personal preferences.
                        </p>

                        <p className="mb-5">
                            You do not need to decide alone. A qualified mental health provider can explain treatment options and help you choose a plan that fits your situation.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4">
                            Mental Health Care in Irvine, CA
                        </h2>

                        <p className="mb-5">
                            Spectrum Psychiatry provides mental health care in Irvine, CA at 15615 Alton Pkwy Ste 220. Services may include individual therapy, medication management, ketamine treatment, and support for depression, anxiety, ADHD, and other mental health concerns.
                        </p>

                        <p className="mb-5">
                            If you are unsure whether therapy, medication, or both may be right for you, our team can help you better understand your options.
                        </p>

                        <div className="mt-10 p-6 rounded-2xl bg-[#f7fbfb] text-center">
                            <h3 className="text-xl font-bold mb-3">
                                Need Help Choosing the Right Treatment?
                            </h3>

                            <p className="mb-4">
                                Spectrum Psychiatry offers personalized mental health care in Irvine, CA, including therapy and medication management.
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