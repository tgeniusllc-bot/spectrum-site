import HomeHeroSectionWithNoBg from "./home-hero-section-no-bg";
import HomeHeroSectionWithBg from "./home-hero-section-with-bg";

export default function HeroSectionOne({ query }: any) {
    const { homeHeroBackgroudImage } = query?.nodeByUri?.homeHero;

    return (
        <>
            {homeHeroBackgroudImage.homeHeroImageEnabledDisabled[0] ===
            "Enabled" ? (
                <HomeHeroSectionWithBg data={query} />
            ) : (
                <HomeHeroSectionWithNoBg data={query} />
            )}
        </>
    );
}
