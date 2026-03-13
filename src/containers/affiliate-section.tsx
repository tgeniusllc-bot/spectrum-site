interface Props {
    query: any;
}

const AffiliateSection: React.FC<Props> = ({ query }) => {
    const {
        affiliateSectionTitle,
        affiliateSectionEnabledDisabled,
        affiliateSectionImages,
    } = query?.nodeByUri?.affiliateSection;
    console.log(affiliateSectionEnabledDisabled);

    return (
        <>
            {affiliateSectionEnabledDisabled[0] === "Enabled" ? (
                <div className="py-24 isolate relative overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-center text-3xl font-semibold text-heading">
                            {affiliateSectionTitle}{" "}
                        </h2>
                        <div className="mx-auto mt-10 flex max-w-lg flex-nowrap items-center justify-center gap-x-4 gap-y-10 sm:max-w-xl sm:flex-wrap sm:gap-x-8">
                            {affiliateSectionImages.map(
                                (image: any, imageIdx: any) => (
                                    <img
                                        alt="Statamic"
                                        src={
                                            image.affiliateSectionImage.node
                                                .sourceUrl
                                        }
                                        width={158}
                                        height={48}
                                        className="max-h-24 sm:max-h-32 w-full object-contain sm:w-auto"
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default AffiliateSection;
