import Container from "@components/ui/container";
import WidgetLink from "@components/widgets/widget-link";

interface WidgetsProps {
    widgets: {
        id: number;
        widgetTitle?: string;
        lists: any;
        isCompanyIntroduction?: boolean;
        logo?: any;
    }[];

    variant?: "contemporary";
}

const Widgets: React.FC<WidgetsProps> = ({ widgets }) => {
    return (
        <Container>
            <div className="flex items-center justify-center gap-6 pb-8 text-sm theme-text-description">
                {widgets?.map((widget) => (
                    <WidgetLink
                        key={`footer-widget--key${widget.id}`}
                        data={widget}
                        className="flex items-center gap-6"
                        variant="contemporary"
                    />
                ))}
            </div>
        </Container>
    );
};

export default Widgets;