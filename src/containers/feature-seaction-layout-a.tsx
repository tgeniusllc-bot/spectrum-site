import Link from "@components/ui/link";

interface Props {
    data: any;
}

const FeatureSectionLayoutA: React.FC<Props> = ({ data }) => {
    const {
        alternatingBlockHeading,
        alternatingBlockContent,
        alternatingBlockButton,
        alternatingBlockImage,
    } = data;

    return (
        <div className="relative overflow-hidden py-8 sm:py-16 bg-theme">
            <div aria-hidden="true" />
            <div>
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                        <div className="mt-6">
                            <h2 className="mb-14 text-3xl font-light tracking-tight theme-text-heading">
                                {alternatingBlockHeading}
                            </h2>

                            <dl className="mt-10 space-y-10">
                                {alternatingBlockContent?.map((feature: any) => (
                                    <div key={feature.alternatingBlockContentTitle}>
                                        <dt className="text-xl font-semibold tracking-tight theme-text-heading">
                                            {feature.alternatingBlockContentTitle}
                                        </dt>
                                        <dd className="mt-4 text-lg theme-text-description">
                                            {feature.alternatingBlockContentDescription}
                                        </dd>
                                    </div>
                                ))}
                            </dl>

                            {alternatingBlockButton?.alternatingBlockButtonEnabled[0] ===
                                "Enabled" && (
                                <div className="mt-6">
                                    <Link
                                        href={
                                            alternatingBlockButton?.alternatingBlockButtonLink as string
                                        }
                                        className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                        <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                            <img
                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                src={alternatingBlockImage?.node?.sourceUrl as string}
                                alt={alternatingBlockHeading as string}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSectionLayoutA;