interface Props {
    query: any;
}

const AboutImageSection: React.FC<Props> = ({ query }) => {
    const { image, aboutImageEnabledDisabled } =
        query.nodeByUri.acfAboutPage.aboutPageBlocks.aboutImage;
    return (
        <>
            {aboutImageEnabledDisabled[0] === "Enabled" ? (
                <main className="relative isolate">
                    <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                        <img
                            src={image.node.sourceUrl}
                            alt=""
                            className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
                        />
                    </div>
                </main>
            ) : (
                <></>
            )}
        </>
    );
};

export default AboutImageSection;
