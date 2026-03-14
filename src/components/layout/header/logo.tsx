import Image from "next/image";
import Link from "@components/ui/link";
import cn from "classnames";

interface Props {
    lightModeLogo: any;
}

const LightLogo: React.FC<Props> = ({ lightModeLogo }) => {
    if (!lightModeLogo?.image?.node?.sourceUrl) return null;
    const src = lightModeLogo.image.node.sourceUrl;
    const link = lightModeLogo.logoSettings?.link ?? "/";
    const alt = lightModeLogo.logoSettings?.altText ?? "Logo";
    const width = Number(lightModeLogo.logoSettings?.width) || 143;
    const height = Number(lightModeLogo.logoSettings?.height) || 45;
    return (
        <Link
            href={link}
            className={cn("inline-flex focus:outline-none")}
        >
            <Image
                src={src}
                alt={alt}
                height={height}
                width={width}
                layout="fixed"
                loading="eager"
            />
        </Link>
    );
};

export default LightLogo;
