export default function References({ query }: any) {
    const { title, heading, description, enabledDisabled, referenceList } =
        query?.nodeByUri.references;

    return (
        <>
            {enabledDisabled[0] === "Enabled" ? (
                <div className="bg-theme py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div>
                                <h2 className="text-base font-semibold leading-7 text-accent transition-ease-effect">
                                    {title}
                                </h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight theme-text-heading sm:text-4xl">
                                    {heading}
                                </p>
                                <p className="mt-6 text-base leading-7 theme-text-description">
                                    {description}
                                </p>
                            </div>

                            <dl className="col-span-2 grid grid-cols-1 gap-y-12">
                                {referenceList.map((feature: any, i: any) => {
                                    const fullText = feature.reference || "";
                                    const questionMarkIndex = fullText.indexOf("?");

                                    const question =
                                        questionMarkIndex >= 0
                                            ? fullText.slice(0, questionMarkIndex + 1)
                                            : fullText;

                                    const answer =
                                        questionMarkIndex >= 0
                                            ? fullText.slice(questionMarkIndex + 1).trim()
                                            : "";

                                    return (
                                        <div key={i} className="relative sm:pl-9">
                                            <dt className="text-lg font-bold text-black">
                                                {question}
                                            </dt>

                                            {answer && (
                                                <dd className="mt-3 text-base font-normal leading-7 text-black">
                                                    {answer}
                                                </dd>
                                            )}
                                        </div>
                                    );
                                })}
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