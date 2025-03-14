import Button from "@components/ui/button";
import Link from "@components/ui/link";

export default function CTAWithTiles({ query }: any) {
    const { enabledDisabled, content, images } =
        query?.nodeByUri.blockWithImageTiles;

    return (
        <>
            {enabledDisabled[0] === "Enabled" ? (
                <div className="overflow-hidden bg-theme py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                                <h2 className="text-3xl font-bold tracking-tight theme-text-heading sm:text-4xl">
                                    {content.heading}
                                </h2>
                                <p className="mt-6 text-xl leading-8 theme-text-heading">
                                    {content.description}
                                </p>
                                <p className="mt-6 text-base leading-7 theme-text-description">
                                    {content.descriptionTwo}
                                </p>
                                <div className="mt-10 flex">
                                    <Link href={content.button.buttonLink}>
                                        <Button variant="slim">
                                            {content.button.buttonName}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                                    <img
                                        src={images.edges[0].node.sourceUrl}
                                        alt=""
                                        className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>
                                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                                    <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                        <img
                                            src={images.edges[3].node.sourceUrl}
                                            alt=""
                                            className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                        />
                                    </div>
                                    <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                        <img
                                            src={images.edges[1].node.sourceUrl}
                                            alt=""
                                            className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                        />
                                    </div>
                                    <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                        <img
                                            src={images.edges[2].node.sourceUrl}
                                            alt=""
                                            className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
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
