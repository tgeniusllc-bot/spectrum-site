import { FaHandHoldingHeart, FaPills } from "react-icons/fa";
import { MdOutlineMedication } from "react-icons/md";
import { RiPsychotherapyLine } from "react-icons/ri";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}
export default function ServicesGridStyleOne({ data }: any) {
    // const Icon = icons[]
    const {
        servicesGridCards,
        gridTitleSection,
        servicesGridCardEnabledDisabled,
    } = data?.nodeByUri.servicesGrid;
    console.log(servicesGridCards);

    const actions = [
        {
            title: servicesGridCards[0].servicesGridCardTitle,
            description: servicesGridCards[0].servicesGridCardDescription,
            href: servicesGridCards[0].servicesGridCardLink,
            icon: RiPsychotherapyLine,
            iconForeground:
                "text-teal-700 dark:text-teal-900 transition-ease-effect",
            iconBackground:
                "bg-teal-50 dark:bg-teal-200 transition-ease-effect",
        },
        {
            title: servicesGridCards[1].servicesGridCardTitle,
            description: servicesGridCards[1].servicesGridCardDescription,
            href: servicesGridCards[1].servicesGridCardLink,
            icon: FaPills,
            iconForeground:
                "text-purple-700 dark:text-purple-900 transition-ease-effect",
            iconBackground:
                "bg-purple-50 dark:bg-purple-200 transition-ease-effect",
        },
        {
            title: servicesGridCards[2].servicesGridCardTitle,
            description: servicesGridCards[2].servicesGridCardDescription,
            href: servicesGridCards[2].servicesGridCardLink,
            icon: MdOutlineMedication,
            iconForeground:
                "text-sky-700 dark:text-sky-900 transition-ease-effect",
            iconBackground: "bg-sky-50 dark:bg-sky-200 transition-ease-effect",
        },
        {
            title: servicesGridCards[3].servicesGridCardTitle,
            description: servicesGridCards[3].servicesGridCardDescription,
            href: servicesGridCards[3].servicesGridCardLink,
            icon: FaHandHoldingHeart,
            iconForeground:
                "text-yellow-700 dark:text-yellow-900 transition-ease-effect",
            iconBackground:
                "bg-yellow-50 dark:bg-yellow-200 transition-ease-effect",
        },
    ];

    return (
        <>
            {servicesGridCardEnabledDisabled[0] === "Enabled" ? (
                <div className="mt-40">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-base font-semibold leading-7 theme-text-accent">
                            {gridTitleSection.gridCardSectionTitle}
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight theme-text-heading sm:text-4xl">
                            {gridTitleSection.gridCardSectionHeading}
                        </p>
                        <p className="mt-6 text-lg leading-8 theme-text-description">
                            {gridTitleSection.gridCardSectionDescription}
                        </p>
                    </div>
                    <div className="my-14 lg:my-16 xl:my-20 py-14 lg:py-4 xl:py-4  xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full transition-ease-effect">
                        <div className="divide-y divide-gray-900 overflow-hidden rounded-lg sm:rounded-xl  bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 transition-ease-effect">
                            {actions.map((action, actionIdx) => (
                                <div
                                    key={action.title}
                                    className={classNames(
                                        actionIdx === 0
                                            ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none transition-opacity dark:hover:opacity-50  hover:opacity-80"
                                            : "",
                                        actionIdx === 1
                                            ? "sm:rounded-tr-lg transition-opacity dark:hover:opacity-50  hover:opacity-80"
                                            : "",
                                        actionIdx === actions.length - 2
                                            ? "sm:rounded-bl-lg"
                                            : "",
                                        actionIdx === actions.length - 1
                                            ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none transition-opacity dark:hover:opacity-90  hover:opacity-80"
                                            : "",
                                        "group relative bg-white/5 dark:bg-gray-900/90 dark:bg-opacity-70 p-6 transition-opacity dark:hover:opacity-90  hover:opacity-80"
                                    )}
                                >
                                    <div>
                                        <span
                                            className={classNames(
                                                action.iconBackground,
                                                action.iconForeground,
                                                "inline-flex rounded-lg p-3 ring-1 theme-ring-color"
                                            )}
                                        >
                                            <action.icon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </div>
                                    <div className="mt-8">
                                        <h3 className="text-base font-semibold leading-6 theme-text-heading">
                                            <a
                                                href={action.href}
                                                className="focus:outline-none"
                                            >
                                                {/* Extend touch target to entire panel */}
                                                <span
                                                    className="absolute inset-0"
                                                    aria-hidden="true"
                                                />
                                                {action.title}
                                            </a>
                                        </h3>

                                        <p className="mt-2 text-sm theme-text-description">
                                            {action.description}
                                        </p>
                                    </div>
                                    <span
                                        className="pointer-events-none absolute right-6 top-6 theme-text-accent group-hover:text-spectrumOrange dark:group-hover:text-spectrumBlue transition-ease-effect"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                        </svg>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
