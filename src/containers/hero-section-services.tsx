import Link from "@components/ui/link";
import Button from "@components/ui/button";
import HeroSectionServicesWithBg from "./hero-section-services-with-bg";
import HeroSectionServicesNoBg from "./hero-section-services-no-bg";

interface Props {
    query: any;
}

const HeroSectionServices: React.FC<Props> = ({ query }) => {
    const { servicesHeroBackgroudImage } = query?.nodeByUri.servicesHero;

    return (
        <>
            {servicesHeroBackgroudImage.servicesHeroImageEnabledDisabled[0] ===
            "Enabled" ? (
                <HeroSectionServicesWithBg data={query} />
            ) : (
                <HeroSectionServicesNoBg data={query} />
            )}
        </>
    );
};

export default HeroSectionServices;
