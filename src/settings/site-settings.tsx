export const siteSettings = {
    name: "Spectrum Psychiatry",
    description:
        "Built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",
    author: {
        name: "Spectrum Psychiatry",
        websiteUrl: "/",
        address: "",
    },
    logo: {
        url: "/assets/images/logo_big2.png",
        alt: "Spectrum Psychiatry",
        href: "/",
        width: 142,
        height: 45,
    },
    defaultLanguage: "en",
    currencyCode: "USD",
    site_header: {
        menu: [
            {
                id: 0,
                path: "/",
                label: "Home",
            },
            {
                id: 0,
                path: "/about",
                label: "About",
            },
            {
                id: 1,
                path: "/",
                label: "Services",
                subMenu: [
                    {
                        id: 1,
                        path: "/individual-therapy",
                        label: "Individual Therapy",
                    },
                    {
                        id: 2,
                        path: "/medication-management",
                        label: "Medication Management",
                    },
                    {
                        id: 3,
                        path: "/ketamine-treatment",
                        label: "Ketamine Treatment",
                    },
                    {
                        id: 4,
                        path: "/suboxone-treatment",
                        label: "Suboxone Treatment",
                    },
                ],
            },
            {
                id: 3,
                path: "/contact",
                label: "Contact",
            },
        ],
        mobileMenu: [
            {
                id: 0,
                path: "/",
                label: "Home",
            },
            {
                id: 0,
                path: "/about",
                label: "About",
            },
            {
                id: 1,
                path: "/",
                label: "Services",
                subMenu: [
                    {
                        id: 1,
                        path: "/individual-therapy",
                        label: "Individual Therapy",
                    },
                    {
                        id: 2,
                        path: "/medication-management",
                        label: "Medication Management",
                    },
                    {
                        id: 3,
                        path: "/ketamine-treatment",
                        label: "Ketamine Treatment",
                    },
                    {
                        id: 4,
                        path: "/suboxone-treatment",
                        label: "Suboxone Treatment",
                    },
                ],
            },
            {
                id: 3,
                path: "/contact",
                label: "Contact",
            },
        ],
    },
};
