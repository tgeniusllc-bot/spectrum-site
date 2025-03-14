import { CheckIcon } from "@heroicons/react/20/solid";

export default function FeatureSectionOne({ query }: any) {
    const {
        featureSectionDescription,
        featureSectionFeatures,
        featureSectionHeading,
        featureSectionTitle,
        featureSectionEnabledDisabled,
    } = query?.nodeByUri?.featureSection;
    return (
        <>
            {featureSectionEnabledDisabled[0] === "Enabled" ? (
                <div className="bg-theme mt-14">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div>
                                <h2 className="text-lg font-semibold leading-8 tracking-tight theme-text-heading">
                                    {featureSectionHeading}
                                </h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight theme-text-heading sm:text-4xl">
                                    {featureSectionTitle}
                                </p>
                                <p className="mt-6 text-base leading-7 theme-text-description">
                                    {featureSectionDescription}
                                </p>
                            </div>
                            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 theme-text-heading sm:grid-cols-2 lg:gap-y-16">
                                {featureSectionFeatures.map((feature: any) => (
                                    <div
                                        key={feature.title}
                                        className="relative pl-9"
                                    >
                                        <dt className="font-semibold theme-text-heading">
                                            <CheckIcon
                                                className="absolute top-1 left-0 h-5 w-5 theme-text-accent animate-pulse"
                                                aria-hidden="true"
                                            />
                                            {feature.featuresTitle}
                                        </dt>
                                        <dd className="mt-2">
                                            {feature.featuresDescription}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
