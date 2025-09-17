import fs from "fs";
import path from "path";
import Layout from "@components/layout/layout";
import Divider from "@components/ui/divider";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Loader from "@components/ui/loader/loader";
import AboutHero from "@containers/about-hero";
import AboutStats from "@containers/about-stats";
import AboutImageSection from "@containers/about-image-section";
import AboutValues from "@containers/about-values";
import AboutOurTeam from "@containers/about-our-team";
import AboutJoinOurTeam from "@containers/about-join-our-team";

interface AboutPageProps {
    data: any; // Or more specific type if you like
    siteSettings: any; // Footer / Site Settings
}
export default function Home({ data, siteSettings }: AboutPageProps) {
    if (!data) {
        return <Loader />;
    }

    const teamMembers =
        data.acfAboutPage.aboutPageBlocks.aboutJoinOurTeamMembers || [];

    return (
        <Layout siteSettings={siteSettings}>
            <AboutHero query={{ nodeByUri: data }} />
            <AboutStats query={{ nodeByUri: data }} />
            {/* <AboutImageSection query={{ nodeByUri: data }} /> */}
            {/* Render first team member */}
            {teamMembers.length > 0 && (
                <AboutJoinOurTeam key={0} teamMemberData={teamMembers[0]} />
            )}
            {/* Render AboutValues after first team member */}
            <AboutValues query={{ nodeByUri: data }} />
            {/* Render remaining team members */}
            {teamMembers.slice(1).map((teamMember: any, index: number) => (
                <AboutJoinOurTeam key={index + 1} teamMemberData={teamMember} />
            ))}
            <AboutOurTeam query={{ nodeByUri: data }} />
            <Divider className="mb-0" />
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    // 1) Read the data from the local JSON
    const filePath = path.join(process.cwd(), "data", "wordpressData.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // 2) Extract the "home" portion from your JSON
    // This depends on how your JSON is structured
    const aboutData = jsonData.about; // or something like jsonData?.home
    const siteSettings = jsonData?.nextJsSiteSettings || null;

    // 3) Return it as props
    return {
        props: {
            data: aboutData,
            siteSettings, // Pass to Layout/Footer
            ...(await serverSideTranslations(locale!, [
                "common",
                "forms",
                "menu",
                "footer",
            ])),
        },
    };
};
