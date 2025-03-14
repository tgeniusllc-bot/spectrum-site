interface Props {
    query: any;
}

const AboutStats: React.FC<Props> = ({ query }) => {
    const { aboutStats, aboutStatsEnabledDisabled } =
        query.nodeByUri.acfAboutPage.aboutPageBlocks.aboutStatsSection;
    console.log(aboutStatsEnabledDisabled);

    return (
        <>
            {aboutStatsEnabledDisabled[0] === "Enabled" ? (
                <main className="relative isolate">
                    {/* Content section */}
                    <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
                                {aboutStats.map((stat: any, statIdx: any) => (
                                    <div
                                        key={statIdx}
                                        className="flex flex-col-reverse gap-y-3 border-l border-black/60 dark:border-white/20 pl-6"
                                    >
                                        <dt className="text-base leading-7 theme-text-heading">
                                            {stat.aboutStatsDescription}
                                        </dt>
                                        <dd className="text-3xl font-semibold tracking-tight theme-text-description">
                                            {stat.aboutStatsTitle}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </main>
            ) : (
                <></>
            )}
        </>
    );
};

export default AboutStats;
