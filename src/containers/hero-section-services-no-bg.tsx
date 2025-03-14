import Link from "@components/ui/link";
import Button from "@components/ui/button";

interface Props {
    data: any;
}

const HeroSectionServicesNoBg: React.FC<Props> = ({ data }) => {
    const {
        servicesHeroTitle,
        servicesHeroDescription,
        servicesHeroBackgroudImage,
        servicesHeroButton,
    } = data?.nodeByUri.servicesHero;

    return (
        <div className="isolate bg-theme">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"></div>

            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <h1 className="text-4xl font-light tracking-tight theme-text-heading sm:text-6xl">
                                {servicesHeroTitle}
                            </h1>
                            <p className="mt-6 text-lg leading-8 theme-text-description">
                                {servicesHeroDescription}
                            </p>

                            {servicesHeroButton.servicesHeroButtonEnabled ===
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

export default HeroSectionServicesNoBg;
