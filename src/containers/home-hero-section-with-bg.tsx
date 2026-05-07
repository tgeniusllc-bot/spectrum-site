import Link from "@components/ui/link";
import Button from "@components/ui/button";

interface Props {
    data: any;
}

const HomeHeroSectionWithBg: React.FC<Props> = ({ data }) => {
    const {
        homeHeroTitle,
        homeHeroDescription,
        homeHeroBackgroudImage,
        homeHeroButton,
    } = data?.nodeByUri?.homeHero;

    return (
        <section
            className="relative overflow-hidden min-h-[720px] flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${homeHeroBackgroudImage.homeHeroBackgroudImageUrl.node.sourceUrl})`,
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

            <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12">
                <div className="max-w-3xl">
                    {/* Small Label */}
                    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 text-sm text-white mb-8">
                        Compassionate Mental Health Care in California
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-white tracking-tight">
                        {homeHeroTitle}
                    </h1>

                    {/* Description */}
                    <p className="mt-8 text-lg md:text-xl leading-8 text-gray-200 max-w-2xl">
                        {homeHeroDescription}
                    </p>

                    {/* Buttons */}
                    <div className="mt-12 flex flex-wrap gap-5">
                        <Link href={homeHeroButton.homeHeroButtonLink}>
                            <Button
                                variant="flat"
                                className="!bg-white !text-black hover:!bg-gray-200 !px-8 !py-4 !rounded-xl !text-base !font-semibold"
                            >
                                {homeHeroButton.homeHeroButtonName}
                            </Button>
                        </Link>

                        <Link href="/services">
                            <button className="border border-white/40 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-white hover:text-black transition-all duration-300">
                                Explore Services
                            </button>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 flex flex-wrap gap-8 text-white/90 text-sm md:text-base">
                        <div>
                            <span className="font-bold text-white text-xl">
                                10+
                            </span>
                            <p>Years Experience</p>
                        </div>

                        <div>
                            <span className="font-bold text-white text-xl">
                                1000+
                            </span>
                            <p>Patients Supported</p>
                        </div>

                        <div>
                            <span className="font-bold text-white text-xl">
                                Telehealth
                            </span>
                            <p>Available Across California</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHeroSectionWithBg;