import FeatureSectionLayoutA from "./feature-seaction-layout-a";
import FeatureSectionLayoutB from "./feature-seaction-layout-b";

interface Props {
    query: any;
}

const AlternatingFeatureSections: React.FC<Props> = ({ query }) => {
    const { block, alternatingBlockEnabledDisabled } =
        query?.nodeByUri.alternatingBlock;
    return (
        <>
            {alternatingBlockEnabledDisabled[0] === "Enabled" ? (
                <>
                    {block.map((items: any, i: any) => {
                        return items.alternatingBlockLayout[0] ===
                            "Layout A" ? (
                            <FeatureSectionLayoutA key={i} data={items} />
                        ) : (
                            <FeatureSectionLayoutB key={i} data={items} />
                        );
                    })}
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default AlternatingFeatureSections;
