import { IoLocationSharp, IoMail, IoCallSharp } from "react-icons/io5";

interface ContactInfoProps {
    query: any;
}

const ContactInfoBlock: React.FC<ContactInfoProps> = ({ query }) => {
    if (!query) return null;

    const {
        contactInfoHeading,
        contactInfoAddress,
        contactInfoPhone,
        contactInfoEmail,
        contactInfoMap,
    } = query;

    const info = [
        {
            id: 1,
            slug: "/",
            icon: <IoLocationSharp />,
            name: "Location",
            hyper: "http://maps.google.com/?q=",
            target: "_blank",
            description: contactInfoAddress,
        },
        {
            id: 2,
            slug: "/",
            icon: <IoMail />,
            name: "Email",
            hyper: "mailto:",
            target: "_blank",
            description: contactInfoEmail,
        },
        {
            id: 3,
            slug: "/",
            icon: <IoCallSharp />,
            name: "Phone",
            hyper: "tel:",
            target: "_blank",
            description: contactInfoPhone,
        },
    ];

    return (
        <div className="mb-6 lg:border lg:rounded-md border-zinc-900/10 dark:border-white/10 lg:p-7">
            <h4 className="text-2xl md:text-lg font-bold theme-text-heading pb-7 md:pb-10 lg:pb-6 -mt-1">
                {contactInfoHeading}
            </h4>
            {info?.map((item: any) => (
                <div key={`contact--key${item.id}`} className="flex pb-7">
                    <div className="flex flex-shrink-0 theme-text-heading justify-center items-center p-1.5 border rounded-md border-zinc-900/10 dark:border-white/10 w-10 h-10">
                        {item.icon}
                    </div>
                    <div className="flex flex-col ps-3 2xl:ps-4">
                        <h5 className="text-sm font-bold theme-text-heading">
                            {item.name}
                        </h5>
                        <a
                            className="mt-0 text-sm theme-text-heading hover:text-spectrumBlue dark:hover:text-spectrumOrange"
                            target={item.target}
                            href={`${item.hyper}${item.description}`}
                        >
                            {item.description}
                        </a>
                    </div>
                </div>
            ))}
            {contactInfoMap && (
                <div className="mx-auto">
                    <iframe
                        className="group relative flex h-full w-full transform justify-center overflow-hidden rounded-md bg-gray-300 object-cover drop-shadow-md transition-all duration-500 ease-in sm:w-96"
                        src={contactInfoMap}
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default ContactInfoBlock;
