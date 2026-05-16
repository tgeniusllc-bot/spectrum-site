import Head from "next/head";
import Link from "next/link";
import Layout from "@components/layout/layout";
import Container from "@components/ui/container";
import Divider from "@components/ui/divider";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import fs from "fs";
import path from "path";

interface BlogPageProps {
    siteSettings: any;
}

const posts = [
    {
        title: "What Is Ketamine Therapy?",
        excerpt:
            "Learn how ketamine therapy may help people with treatment-resistant depression and other mental health concerns.",
        href: "/blog/what-is-ketamine-therapy",
    },
    {
        title: "Signs of Depression",
        excerpt:
            "Understand common symptoms of depression and when it may be time to seek professional mental health support.",
        href: "/blog/signs-of-depression",
    },
    {
        title: "How to Choose a Psychiatrist in Irvine, CA",
        excerpt:
            "Important things to consider when looking for a psychiatrist or mental health clinic in Irvine, CA.",
        href: "/blog/how-to-choose-a-psychiatrist-in-irvine-ca",
    },
];

export default function BlogPage({ siteSettings }: BlogPageProps) {
    return (
        <>
            <Head>
                <title>Mental Health Blog | Spectrum Psychiatry Irvine, CA</title>
                <meta
                    name="description"
                    content="Read mental health articles from Spectrum Psychiatry in Irvine, CA about ketamine therapy, depression, anxiety, psychiatry, medication management, and mental health care."
                />
            </Head>

            <Layout siteSettings={siteSettings}>
                <Container className="bg-theme">
                    <section className="py-16 lg:py-24 xl:max-w-screen-xl mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold theme-text-heading mb-6">
                            Mental Health Blog
                        </h1>

                        <p className="text-base md:text-lg leading-8 theme-text-description max-w-3xl mx-auto">
                            Helpful articles from Spectrum Psychiatry in Irvine, CA about mental health, psychiatry, ketamine therapy, depression, anxiety, medication management, and emotional wellness.
                        </p>
                    </section>
                </Container>

                <Container className="bg-theme">
                    <section className="py-10 lg:py-16 xl:max-w-screen-xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <Link href={post.href} key={post.href}>
                                    <a className="block rounded-2xl border border-gray-200 p-6 shadow-sm bg-white hover:shadow-md transition">
                                        <h2 className="text-2xl font-bold theme-text-heading mb-4">
                                            {post.title}
                                        </h2>

                                        <p className="text-base leading-7 theme-text-description">
                                            {post.excerpt}
                                        </p>

                                        <span className="mt-5 inline-block font-semibold text-spectrumBlue">
                                            Read More →
                                        </span>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </section>
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