import Link from "@components/ui/link";

interface Props {
    data: any;
}

const HomeHeroSectionWithBg: React.FC<Props> = ({ data }) => {
    const {
        homeHeroTitle,
        homeHeroDescription,
        homeHeroBackgroudImage,
        homeHeroHeading,
    } = data?.nodeByUri?.homeHero;

    return (
        <div
            className="flex justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover"
            style={{
                backgroundImage: `url(${homeHeroBackgroudImage.homeHeroBackgroudImageUrl.node.sourceUrl})`,
            }}
        >
            <div className="absolute top-0 start-0 bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />

            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full py-1 px-3 text-sm leading-6 theme-text-heading-with-image-bg ring-1 theme-ring-color-with-bg">
                                {homeHeroHeading.homeHeroHeadingTitle}{" "}
                                <Link
                                    href={homeHeroHeading.homeHeroHeadingButtonLink}
                                    className="font-semibold theme-text-heading-with-image-bg"
                                >
                                    <span
                                        className="absolute inset-0"
                                        aria-hidden="true"
                                    />
                                    {homeHeroHeading.homeHeroHeadingButtonName}{" "}
                                    <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>

                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight theme-text-heading-with-image-bg sm:text-6xl">
                                {homeHeroTitle}
                            </h1>
                            <p className="mt-6 text-lg leading-8 theme-text-description-with-image-bg">
                                {homeHeroDescription}
                            </p>
                        </div>
                    </div>

                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"></div>
                </div>
            </main>
        </div>
    );
};

export default HomeHeroSectionWithBg;