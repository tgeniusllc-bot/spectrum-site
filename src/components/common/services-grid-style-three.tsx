import { FaHandHoldingHeart, FaPills } from "react-icons/fa";
import { MdOutlineMedication } from "react-icons/md";
import { RiPsychotherapyLine } from "react-icons/ri";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}
export default function ServicesGridStyleThree({ data }: any) {
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
                <div className="mx-auto  mb-10 sm:my-32 max-w-8xl px-6  lg:px-8">
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
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                            {actions.map((feature: any) => (
                                <div
                                    key={feature.title}
                                    className="flex flex-col"
                                >
                                    <dt className="text-base font-semibold leading-7 theme-text-heading">
                                        <div>
                                            <span
                                                className={classNames(
                                                    feature.iconBackground,
                                                    feature.iconForeground,
                                                    "mb-6 inline-flex rounded-lg p-3 ring-1 ring-white dark:ring-gray-800/40"
                                                )}
                                            >
                                                <feature.icon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </div>

                                        {feature.title}
                                    </dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 theme-text-description">
                                        <p className="flex-auto">
                                            {feature.description}
                                        </p>
                                        <p className="mt-6">
                                            <a
                                                href={feature.href}
                                                className="text-sm font-semibold leading-6 theme-text-accent"
                                            >
                                                Learn more{" "}
                                                <span aria-hidden="true">
                                                    →
                                                </span>
                                            </a>
                                        </p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
