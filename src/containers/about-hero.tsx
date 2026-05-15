interface Props {
    query: any;
}

const AboutHero: React.FC<Props> = ({ query }) => {
    const { aboutHeroHeading, aboutHeroDescription } =
        query.nodeByUri.acfAboutPage.aboutPageBlocks.aboutHero;

    return (
        <main
            className="relative isolate h-screen flex items-center justify-center text-white"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/team.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        {aboutHeroHeading}
                    </h2>

                    <p className="mt-6 text-lg leading-8">
                        {aboutHeroDescription}
                    </p>
                </div>
            </div>
        </main>
    );
};

export default AboutHero;