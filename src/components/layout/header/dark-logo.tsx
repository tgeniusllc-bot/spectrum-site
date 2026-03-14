import Image from "next/image";
import Link from "@components/ui/link";
import cn from "classnames";

interface Props {
    darkModeLogo: any;
}

const DarkLogo: React.FC<Props> = ({ darkModeLogo }) => {
    if (!darkModeLogo?.image?.node?.sourceUrl) return null;
    const src = darkModeLogo.image.node.sourceUrl;
    const link = darkModeLogo.logoSettings?.link ?? "/";
    const alt = darkModeLogo.logoSettings?.altText ?? "Logo";
    const width = Number(darkModeLogo.logoSettings?.width) || 143;
    const height = Number(darkModeLogo.logoSettings?.height) || 45;
    return (
        <Link href={link} className={cn("inline-flex focus:outline-none")}>
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

export default DarkLogo;
