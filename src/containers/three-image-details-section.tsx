export default function ThreeImageDetailsSection({ query }: any) {
    const {
        homeContentSectionContent,
        homeContentSectionImages,
        homeContentSectionEnabledDisabled,
    } = query?.nodeByUri?.homeContentSection;

    return (
        <>
            {homeContentSectionEnabledDisabled[0] === "Enabled" ? (
                <div className="bg-theme">
                    <div className="mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
                            
                            {/* SOL TARAF */}
                            <div>
                                <dl className="mt-10 space-y-10">
                                    {homeContentSectionContent?.map(
                                        (feature: any) => (
                                            <div key={feature.contentTitle}>
                                                <dt className="text-md font-bold theme-text-heading">
                                                    {feature.contentTitle}
                                                </dt>

                                                <dd className="mt-3 text-sm theme-text-description">
                                                    {feature.contentDescription}
                                                </dd>

                                                {/* ✅ BUTON EKLENDİ */}
                                                <div className="mt-4">
                                                    <a
                                                        href="/contact"
                                                        className="inline-flex items-center justify-center rounded-md bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition"
                                                    >
                                                        Learn More
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </dl>
                            </div>

                            {/* SAĞ TARAF RESİMLER */}
                            <div>
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100">
                                    <img
                                        src={
                                            homeContentSectionImages.edges[0]
                                                .node.sourceUrl
                                        }
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
                                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100">
                                        <img
                                            src={
                                                homeContentSectionImages.edges[1].node.sourceUrl
                                            }
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100">
                                        <img
                                            src={
                                                homeContentSectionImages.edges[2].node.sourceUrl
                                            }
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}