import { CheckIcon } from "@heroicons/react/20/solid";

interface Props {
    query: any;
}

const FeatureSectionThree: React.FC<Props> = ({ query }) => {
    const {
        featureSectionDescription,
        featureSectionFeatures,
        featureSectionHeading,
        featureSectionTitle,
        featureSectionImageUrl,
        numberOfColumns,
    } = query?.nodeByUri.featureSection;

    return (
        <div className="bg-theme pb-24 sm:pb-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight theme-text-heading">
                        {featureSectionHeading}
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight theme-text-heading sm:text-4xl">
                        {featureSectionTitle}
                    </p>
                    <p className="mt-6 text-lg leading-8 theme-text-description">
                        {featureSectionDescription}
                    </p>
                </div>
            </div>
            <div className="relative overflow-hidden pt-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <img
                        src={featureSectionImageUrl.node.sourceUrl as string}
                        alt="App screenshot"
                        className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                        width={2432}
                        height={1442}
                    />
                    <div className="relative" aria-hidden="true">
                        <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%] dark:bg-gradient-to-t dark:from-gray-900 transition-ease-effect" />
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <dl
                    className={`mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-xs sm:text-sm leading-5 sm:leading-7 theme-text-description sm:grid-cols-${numberOfColumns} lg:mx-0 lg:max-w-none  lg:gap-x-8 lg:gap-y-16`}
                >
                    {featureSectionFeatures.map((feature: any) => (
                        <div
                            key={feature.featuresTitle}
                            className="relative pl-9 "
                        >
                            <dt className="inline font-bold theme-text-heading">
                                <CheckIcon
                                    className="absolute top-1 left-1 h-5 w-5 theme-text-heading"
                                    aria-hidden="true"
                                />
                                {feature.featuresTitle}
                            </dt>{" "}
                            <dd className="inline">
                                {feature.featuresDescription}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
};

export default FeatureSectionThree;
