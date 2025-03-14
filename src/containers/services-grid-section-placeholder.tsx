import { FaHandHoldingHeart, FaPills } from "react-icons/fa";
import { MdOutlineMedication } from "react-icons/md";
import { RiPsychotherapyLine } from "react-icons/ri";

const actions = [
    {
        title: "Individual Therapy",
        href: "/individual-therapy",
        icon: RiPsychotherapyLine,
        iconForeground: "text-teal-700",
        iconBackground: "bg-teal-50",
    },
    {
        title: "Medication Management",
        href: "/medication-management",
        icon: FaPills,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
    },
    {
        title: "Ketamine Treatment",
        href: "/ketamine-treatment",
        icon: MdOutlineMedication,
        iconForeground: "text-sky-700",
        iconBackground: "bg-sky-50",
    },
    {
        title: "Suboxone Treatment",
        href: "/suboxone-treatment",
        icon: FaHandHoldingHeart,
        iconForeground: "text-yellow-700",
        iconBackground: "bg-yellow-50",
    },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

export default function ServicesGridSectionPlaceholder() {
    return (
        <div className="my-14 lg:my-16 xl:my-20 py-14 lg:py-16 xl:py-20  xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full transition-ease-effect">
            <div className="divide-y divide-gray-900 overflow-hidden rounded-0 sm:rounded-xl bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                {actions.map((action, actionIdx) => (
                    <div
                        key={action.title}
                        className={classNames(
                            actionIdx === 0 ? "   sm:rounded-tr-none" : "",
                            actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                            actionIdx === actions.length - 2
                                ? "sm:rounded-bl-lg"
                                : "",
                            actionIdx === actions.length - 1
                                ? " sm:rounded-bl-none"
                                : "",
                            "group relative bg-white/5 dark:bg-gray-900/90 dark:bg-opacity-70 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
                        )}
                    >
                        <div>
                            <span
                                className={classNames(
                                    action.iconBackground,
                                    action.iconForeground,
                                    "inline-flex rounded-lg p-3 ring-1 ring-white dark:ring-gray-800/40"
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
                                Doloribus dolores nostrum quia qui natus officia
                                quod et dolorem. Sit repellendus qui ut at
                                blanditiis et quo et molestiae. Doloribus
                                dolores nostrum quia qui natus officia quod et
                                dolorem. Sit repellendus qui ut at blanditiis et
                                quo et molestiae.
                            </p>
                        </div>
                        <span
                            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400 transition-ease-effect"
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
    );
}
