/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

export default function ThreeImageDetailsSection({ query }: any) {
    const {
        homeContentSectionContent,
        homeContentSectionImages,
        homeContentSectionEnabledDisabled,
    } = query?.nodeByUri?.homeContentSection;
    console.log("homeContentSectionImages", homeContentSectionImages);

    return (
        <>
            {homeContentSectionEnabledDisabled[0] === "Enabled" ? (
                <div className="bg-theme">
                    <div className="mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
                            <div>
                                {/* <div className="border-b border-gray-200 pb-10">
                          <h2 className="font-medium text-gray-500">
                              Machined Kettle
                          </h2>
                          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                              Elegant simplicity
                          </p>
                      </div> */}

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
                                            </div>
                                        )
                                    )}
                                </dl>
                            </div>

                            <div>
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100">
                                    <img
                                        src={
                                            homeContentSectionImages.edges[0]
                                                .node.sourceUrl
                                        }
                                        alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
                                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100">
                                        <img
                                            src={
                                                homeContentSectionImages
                                                    .edges[1].node.sourceUrl
                                            }
                                            alt="Detail of temperature setting button on kettle bass with digital degree readout."
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100">
                                        <img
                                            src={
                                                homeContentSectionImages
                                                    .edges[2].node.sourceUrl
                                            }
                                            alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
