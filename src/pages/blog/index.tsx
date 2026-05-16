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
        image:
            "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Signs of Depression",
        excerpt:
            "Understand common symptoms of depression and when it may be time to seek professional mental health support.",
        href: "/blog/signs-of-depression",
        image:
            "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "How to Choose a Psychiatrist in Irvine, CA",
        excerpt:
            "Important things to consider when looking for a psychiatrist or mental health clinic in Irvine, CA.",
        href: "/blog/how-to-choose-a-psychiatrist-in-irvine-ca",
        image:
            "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Medication Management: What to Expect",
        excerpt:
            "Learn what to expect from psychiatric medication management, including evaluations, follow-ups, and personalized treatment plans.",
        href: "/blog/medication-management-what-to-expect",
        image:
            "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Anxiety Symptoms and Treatment",
        excerpt:
            "Understand common anxiety symptoms and explore effective treatment options for long-term mental well-being.",
        href: "/blog/anxiety-symptoms-and-treatment",
        image:
            "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Therapy vs Medication: Which Is Right for You?",
        excerpt:
            "Compare therapy and medication options to find the right mental health treatment approach for your needs.",
        href: "/blog/therapy-vs-medication",
        image:
            "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2070&auto=format&fit=crop",
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
                <section className="relative min-h-[520px] flex items-center justify-center text-center overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2070&auto=format&fit=crop"
                        alt="Mental health blog"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black opacity-40"></div>

                    <div className="relative z-10 px-4 max-w-4xl mx-auto pt-20">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Mental Health Blog
                        </h1>

                        <p className="text-base md:text-xl leading-8 text-white max-w-3xl mx-auto">
                            Helpful articles from Spectrum Psychiatry in Irvine, CA about mental health, psychiatry, ketamine therapy, depression, anxiety, medication management, and emotional wellness.
                        </p>
                    </div>
                </section>

                <Container className="bg-theme">
                    <section className="py-12 lg:py-16 xl:max-w-screen-xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <Link href={post.href} key={post.href}>
                                    <a className="block overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white hover:shadow-md transition">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-48 object-cover"
                                        />

                                        <div className="p-6">
                                            <h2 className="text-2xl font-bold theme-text-heading mb-4">
                                                {post.title}
                                            </h2>

                                            <p className="text-base leading-7 theme-text-description">
                                                {post.excerpt}
                                            </p>

                                            <span className="mt-5 inline-block font-semibold text-spectrumBlue">
                                                Read More →
                                            </span>
                                        </div>
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