interface Props {
    query: any;
}
const AboutHero: React.FC<Props> = ({ query }) => {
    const { aboutHeroHeading, aboutHeroDescription, aboutHeroContentSection } =
        query.nodeByUri.acfAboutPage.aboutPageBlocks.aboutHero;
    console.log(query);
    return (
        <main className="relative isolate bg-theme">
            {/* Background */}
            <div
                className="absolute inset-x-0 top-28 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-spectrumBlue opacity-25"
                    style={{
                        clipPath:
                            "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                    }}
                />
            </div>

            {/* Header section */}
            <div className="px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
                    <h2 className="text-4xl font-bold tracking-tight theme-text-heading sm:text-6xl">
                        {aboutHeroHeading}
                    </h2>
                    <p className="mt-6 text-lg leading-8 theme-text-description">
                        {aboutHeroDescription}
                    </p>
                </div>
            </div>

            {/* Content section */}
            <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 theme-text-description lg:max-w-none lg:grid-cols-2">
                        {aboutHeroContentSection?.map((item: any, i: any) => (
                            <p>{item.aboutHeroContentSectionDescription}</p>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutHero;
