import PageHeaderNoBg from "./page-header-no-bg";
import PageHeaderWithBg from "./page-header-with-bg";

interface HeaderProps {
    query: any;
}

const PageHeader: React.FC<HeaderProps> = ({ query }) => {
    const { heroImageEnabledDisabled } =
        query?.nodeByUri.hero.heroBackgroudImageUrl;
    return (
        <>
            {heroImageEnabledDisabled[0] === "Enabled" ? (
                <PageHeaderWithBg data={query} />
            ) : (
                <PageHeaderNoBg data={query} />
            )}
        </>
    );
};
export default PageHeader;
