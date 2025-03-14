import Container from "@components/ui/container";
import ServicesGridSectionStyles from "./services-grid-styles";

export default function ServicesGridSection({ query }: any) {
    const { servicesGridCardEnabledDisabled } = query?.nodeByUri.servicesGrid;
    return (
        <>
            {servicesGridCardEnabledDisabled[0] === "Enabled" ? (
                <Container className="bg-theme">
                    <ServicesGridSectionStyles data={query} />
                </Container>
            ) : (
                <></>
            )}
        </>
    );
}
