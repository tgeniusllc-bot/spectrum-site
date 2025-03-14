import Image from "next/image";
import Link from "@components/ui/link";
import cn from "classnames";

interface Props {
    darkModeLogo: any;
}

const LightLogo: React.FC<Props> = ({ darkModeLogo }) => {
    return (
        <Link
            href={darkModeLogo.logoSettings.link}
            className={cn("inline-flex focus:outline-none")}
        >
            <Image
                src={darkModeLogo.image.node.sourceUrl}
                alt={darkModeLogo.logoSettings.altText}
                height={darkModeLogo.logoSettings.height}
                width={darkModeLogo.logoSettings.width}
                layout="fixed"
                loading="eager"
            />
        </Link>
    );
};

export default LightLogo;
