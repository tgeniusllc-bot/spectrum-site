interface Props {
    data: any;
}

const HomeHeroSectionWithBg: React.FC<Props> = ({ data }) => {
    const { homeHeroTitle, homeHeroDescription, homeHeroBackgroudImage } =
        data?.nodeByUri?.homeHero;

    return (
        <div
            className="flex justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover"
            style={{
                backgroundImage: `url(${homeHeroBackgroudImage.homeHeroBackgroudImageUrl.node.sourceUrl})`,
            }}
        >
            <div className="absolute top-0 start-0 bg-black/20 w-full h-full" />

            <main className="relative z-10">
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
                        <h1 className="text-4xl font-bold tracking-tight theme-text-heading-with-image-bg sm:text-6xl">
                            {homeHeroTitle}
                        </h1>

                        <p className="mt-6 text-lg leading-8 theme-text-description-with-image-bg">
                            {homeHeroDescription}
                        </p>

                        <div style={{ marginTop: "40px", textAlign: "center" }}>
                            <a
                                href="/contact"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "14px 32px",
                                    borderRadius: "9999px",
                                    backgroundColor: "#2f6f73",
                                    textDecoration: "none",
                                    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                                    minWidth: "160px",
                                    minHeight: "50px",
                                    position: "relative",
                                    zIndex: 9999,
                                }}
                            >
                                <span
                                    style={{
                                        color: "#ffffff",
                                        fontSize: "16px",
                                        fontWeight: 700,
                                        lineHeight: "1",
                                        display: "block",
                                        opacity: 1,
                                        visibility: "visible",
                                    }}
                                >
                                    Learn More
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomeHeroSectionWithBg;