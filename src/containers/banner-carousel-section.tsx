import BannerCarouselBlock from "./banner-carousel-block";

interface Props {
    query: any;
}

const resources = [
    { title: "Signs of Depression", slug: "/blog/depression" },
    { title: "Managing Anxiety", slug: "/blog/anxiety" },
    { title: "Coping with Stress", slug: "/blog/stress-management" },
    { title: "When to Seek Help", slug: "/blog/when-to-seek-help" },
];

const BannerCarouselSection: React.FC<Props> = ({ query }) => {
    const {
        bannerCarouselBlockImagesCarousel,
        bannerCarouselBlockEnabledDisabled,
    } = query?.nodeByUri.bannerCarouselBlock;

    const result = bannerCarouselBlockImagesCarousel?.edges.map(
        (banner: any, i: any) => {
            const resource = resources[i] || resources[0];

            return {
                id: i,
                title: resource.title,
                slug: resource.slug,
                image: {
                    mobile: {
                        url: banner.node.sourceUrl,
                        width: 580,
                        height: 360,
                    },
                    desktop: {
                        url: banner.node.sourceUrl,
                        width: 580,
                        height: 360,
                    },
                },
            };
        }
    );

    return (
        <>
            {bannerCarouselBlockEnabledDisabled[0] === "Enabled" ? (
                <div className="bg-theme">
                    <div className="py-10 px-6 sm:px-6 sm:py-20 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-4xl font-bold tracking-tight theme-text-heading">
                                Mental Health Resources
                            </h2>
                            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 theme-text-description">
                                Learn more about mental health, treatment options, and ways to improve your well-being.
                            </p>
                        </div>
                    </div>

                    <BannerCarouselBlock bannerData={result} />
                </div>
            ) : null}
        </>
    );
};

export default BannerCarouselSection;