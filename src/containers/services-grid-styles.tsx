import ServicesGridStyleOne from "@components/common/services-grid-style-one";
import ServicesGridStyleThree from "@components/common/services-grid-style-three";
import ServicesGridStyleTwo from "@components/common/services-grid-style-two";

export default function ServicesGridSectionStyles({ data }: any) {
    const { servicesGridCardStyles } = data?.nodeByUri.servicesGrid;

    return (
        <>
            {servicesGridCardStyles[0] === "Style One" ? (
                <ServicesGridStyleOne data={data} />
            ) : (
                <ServicesGridStyleThree data={data} />
            )}
        </>
    );
}
