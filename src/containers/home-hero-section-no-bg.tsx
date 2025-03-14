import Link from "@components/ui/link";
import Button from "@components/ui/button";

interface Props {
    data: any;
}

const HomeHeroSectionWithNoBg: React.FC<Props> = ({ data }) => {
    const {
        homeHeroTitle,
        homeHeroDescription,
        homeHeroHeading,
        homeHeroButton,
    } = data?.nodeByUri?.homeHero;

    return (
        <div className="flex justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover">
            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/40 transition ease-in duration-300">
                                {homeHeroHeading.homeHeroHeadingTitle}{" "}
                                <Link
                                    href={
                                        homeHeroHeading.homeHeroHeadingButtonLink
                                    }
                                    className="font-semibold text-heading"
                                >
                                    <span
                                        className="absolute inset-0"
                                        aria-hidden="true"
                                    />
                                    {homeHeroHeading.homeHeroHeadingButtonName}{" "}
                                    <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                {homeHeroTitle}
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                {homeHeroDescription}
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link href={homeHeroButton.homeHeroButtonLink}>
                                    <Button variant="flat">
                                        {homeHeroButton.homeHeroButtonName}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"></div>
                </div>
            </main>
        </div>
    );
};

export default HomeHeroSectionWithNoBg;
