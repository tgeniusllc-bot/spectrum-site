import Image from "next/image";
import Link from "@components/ui/link";
import cn from "classnames";

interface Props {
    lightModeLogo: any;
}

const LightLogo: React.FC<Props> = ({ lightModeLogo }) => {
    return (
        <Link
            href={lightModeLogo.logoSettings.link}
            className={cn("inline-flex focus:outline-none")}
        >
            <Image
                src={lightModeLogo.image.node.sourceUrl}
                alt={lightModeLogo.logoSettings.altText}
                height={lightModeLogo.logoSettings.height}
                width={lightModeLogo.logoSettings.width}
                layout="fixed"
                loading="eager"
            />
        </Link>
    );
};

export default LightLogo;
