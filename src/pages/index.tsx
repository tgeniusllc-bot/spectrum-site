// pages/index.tsx
import fs from "fs";
import path from "path";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Divider from "@components/ui/divider";
import HeroSectionOne from "../containers/hero-section-1";
import ContactInfoBlock from "@containers/contact-info";
import FeatureSectionOne from "../containers/feature-section-1";
import ThreeImageDetailsSection from "../containers/three-image-details-section";
import AlternatingFeatureSections from "../containers/alternating-feature-sections";
import ServicesGridSection from "@containers/services-grid-section";
import ContactForm from "@components/common/form/contact-form";
import Loader from "@components/ui/loader/loader";
import CTAWithTiles from "@components/common/cta-section-with-tiles";
import AffiliateSection from "@containers/affiliate-section";

interface HomePageProps {
  data: any;
  siteSettings: any;
  contactInformationData: any;
}

export default function Home({
  data,
  siteSettings,
  contactInformationData,
}: HomePageProps) {
  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Ketamine Treatment in Irvine, CA | Spectrum Psychiatry</title>
        <meta
          name="description"
          content="Spectrum Psychiatry in Irvine, CA offers expert mental health services including ketamine treatment, suboxone therapy, individual therapy, and medication management. Start your journey to better mental health today."
        />
      </Head>

      <Layout siteSettings={siteSettings}>
        <HeroSectionOne query={{ nodeByUri: data }} />
        <AlternatingFeatureSections query={{ nodeByUri: data }} />
        <FeatureSectionOne query={{ nodeByUri: data }} />
        <AffiliateSection query={{ nodeByUri: data }} />
        <ServicesGridSection query={{ nodeByUri: data }} />
        <ThreeImageDetailsSection query={{ nodeByUri: data }} />
        <CTAWithTiles query={{ nodeByUri: data }} />

        <Container className="bg-theme">
          <section className="py-12 lg:py-16 xl:max-w-screen-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold theme-text-heading mb-5">
              Start Ketamine Treatment in Irvine, CA
            </h2>

            <p className="text-base md:text-lg theme-text-body mb-5">
              If you are struggling with depression, and have not found relief
              with traditional treatments, ketamine therapy may offer a new path
              forward.
            </p>

            <p className="text-base md:text-lg theme-text-body mb-5">
              Spectrum Psychiatry provides safe, physician-supervised ketamine
              treatment in Irvine and throughout Orange County, including both
              intramuscular and intranasal options tailored to your needs.
            </p>

            <p className="text-base md:text-lg theme-text-body">
              Call today or request an appointment online to schedule your
              ketamine consultation in Irvine, CA.
            </p>
          </section>
        </Container>

        <Container className="bg-theme">
          <div className="my-14 lg:my-16 xl:my-20 px-0 pb-2 xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full bg-theme">
            <div className="md:w-full lg:w-2/5 2xl:w-2/6 flex flex-col h-full">
              <ContactInfoBlock query={contactInformationData} />
            </div>

            <div className="md:w-full lg:w-3/5 2xl:w-4/6 flex h-full md:ms-7 flex-col lg:ps-7">
              <div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5">
                <h4 className="text-2xl 2xl:text-3xl font-bold theme-text-heading">
                  Get in touch
                </h4>
              </div>

              <ContactForm />
            </div>
          </div>
        </Container>

        <footer className="w-full border-t border-zinc-100 py-5 text-center dark:border-zinc-700/40">
          <p className="text-xs lg:text-sm leading-6 theme-text-description">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold">Spectrum Psychiatry.</span>{" "}
            All rights reserved
          </p>

          <p className="mt-1 text-[12px] opacity-90 theme-text-description">
            Powered by{" "}
            <a
              href="https://www.youtube.com/watch?v=cAe1lVDbLf0"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline cursor-pointer text-blue-600 transition hover:text-blue-700"
            >
              Keremiyo 🎵
            </a>{" "}
            <span>🔥</span>
          </p>
        </footer>

        <Divider className="mb-0" />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const filePath = path.join(process.cwd(), "data", "wordpressData.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const jsonData = JSON.parse(fileContents);

  return {
    props: {
      data: jsonData?.home ?? null,
      contactInformationData: jsonData?.contactInformation ?? null,
      siteSettings: jsonData?.nextJsSiteSettings ?? null,
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "forms",
        "menu",
        "footer",
      ])),
    },
  };
};