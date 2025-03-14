import BannerCarouselBlock from "./banner-carousel-block";
import { promotionBannerTwo as promotionBanners } from "@framework/static/banner";

interface Props {
    query: any;
}

const BannerCarouselSection: React.FC<Props> = ({ query }) => {
    const {
        bannerCarouselBlockDescription,
        bannerCarouselBlockTitle,
        bannerCarouselBlockImagesCarousel,
        bannerCarouselBlockEnabledDisabled,
    } = query?.nodeByUri.bannerCarouselBlock;

    const result = bannerCarouselBlockImagesCarousel?.edges.map(
        (banner: any, i: any) => ({
            id: i,
            title: bannerCarouselBlockTitle,
            slug: "/",
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
        })
    );

    return (
        <>
            {bannerCarouselBlockEnabledDisabled[0] === "Enabled" ? (
                <div className="bg-theme">
                    <div className="py-10 px-6 sm:px-6 sm:py-20 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-4xl font-bold tracking-tight theme-text-heading">
                                {bannerCarouselBlockTitle}
                            </h2>
                            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 theme-text-description">
                                {bannerCarouselBlockDescription}
                            </p>
                            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
                       <a
                           href="#"
                           className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                       >
                           Get started
                       </a>
                       <a
                           href="#"
                           className="text-base font-semibold leading-7 text-gray-900"
                       >
                           Learn more <span aria-hidden="true">→</span>
                       </a>
                   </div> */}
                        </div>
                    </div>
                    <BannerCarouselBlock bannerData={result} />
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default BannerCarouselSection;
