import { GetServerSideProps } from "next";

const SITE_URL = "https://spectrumpsychiatry.us";

const pages = [
    "",
    "/about",
    "/contact",
    "/blog",
    "/individual-therapy",
    "/medication-management",
    "/ketamine-treatment",
    "/suboxone-treatment",
    "/blog/what-is-ketamine-therapy",
    "/blog/signs-of-depression",
    "/blog/how-to-choose-a-psychiatrist-in-irvine-ca",
    "/blog/medication-management-what-to-expect",
    "/blog/anxiety-symptoms-and-treatment",
    "/blog/therapy-vs-medication",
];

function generateSitemap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
    .map(
        (page) => `
    <url>
        <loc>${SITE_URL}${page}</loc>
        <changefreq>weekly</changefreq>
        <priority>${page === "" ? "1.0" : "0.8"}</priority>
    </url>`
    )
    .join("")}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    res.setHeader("Content-Type", "text/xml");
    res.write(generateSitemap());
    res.end();

    return {
        props: {},
    };
};

export default function Sitemap() {
    return null;
}