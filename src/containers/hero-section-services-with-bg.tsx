import Link from "@components/ui/link";
import Button from "@components/ui/button";

interface Props {
    data: any;
}

const HeroSectionServicesWithBg: React.FC<Props> = ({ data }) => {
    const {
        servicesHeroTitle,
        servicesHeroDescription,
        servicesHeroBackgroudImage,
        servicesHeroButton,
    } = data?.nodeByUri.servicesHero;

    return (
        <div
            className="flex justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover"
            style={{
                backgroundImage: `url(${servicesHeroBackgroudImage.servicesHeroBackgroudImageUrl.node.sourceUrl})`,
            }}
        >
            <div className="absolute top-0 start-0 bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />

            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <h1 className="text-4xl font-light tracking-tight theme-text-heading-with-image-bg sm:text-6xl">
                                {servicesHeroTitle}
                            </h1>
                            <p className="mt-6 text-lg leading-8 theme-text-description-with-image-bg">
                                {servicesHeroDescription}
                            </p>

                            {servicesHeroButton.servicesHeroButtonEnabled[0] ===
                                "Enabled" && (
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <Link
                                        href={
                                            servicesHeroButton.servicesHeroButtonLink as string
                                        }
                                    >
                                        <Button variant="slim">
                                            {
                                                servicesHeroButton.servicesHeroButtonName as string
                                            }
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"></div>
                </div>
            </main>
        </div>
    );
};

export default HeroSectionServicesWithBg;
