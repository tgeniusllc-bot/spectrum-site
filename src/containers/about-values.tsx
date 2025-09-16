import {
    AcademicCapIcon,
    HandRaisedIcon,
    RocketLaunchIcon,
    SparklesIcon,
    SunIcon,
    UserGroupIcon,
} from "@heroicons/react/20/solid";

interface Props {
    query: any;
}

const AboutValues: React.FC<Props> = ({ query }) => {
    const {
        aboutOurValuesTitle,
        aboutOurValuesDescription,
        aboutOurValuesList,
        aboutOurValuesEnabledDisabled,
    } = query.nodeByUri.acfAboutPage.aboutPageBlocks.aboutOurValues;

    console.log("aboutOurValuesList", aboutOurValuesList);

    const values = [
        {
            name: aboutOurValuesList[0].aboutOurValuesListTitle,
            description: aboutOurValuesList[0].aboutOurValuesListDescription,
            icon: RocketLaunchIcon,
        },
        {
            name: aboutOurValuesList[1].aboutOurValuesListTitle,
            description: aboutOurValuesList[1].aboutOurValuesListDescription,
            icon: HandRaisedIcon,
        },
        {
            name: aboutOurValuesList[2].aboutOurValuesListTitle,
            description: aboutOurValuesList[2].aboutOurValuesListDescription,
            icon: UserGroupIcon,
        },
        {
            name: aboutOurValuesList[3].aboutOurValuesListTitle,
            description: aboutOurValuesList[3].aboutOurValuesListDescription,
            icon: AcademicCapIcon,
        },
    ];
    return (
        <>
            {aboutOurValuesEnabledDisabled[0] === "Enabled" ? (
                <>
                    <div className="mx-auto my-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight theme-text-heading sm:text-4xl">
                                {aboutOurValuesTitle}
                            </h2>
                            <p className="mt-6 text-lg leading-8 theme-text-description">
                                {aboutOurValuesDescription}
                            </p>
                        </div>
                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 theme-text-description sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
                            {values.map((value) => (
                                <div key={value.name} className="relative pl-9">
                                    <dt className="inline font-semibold theme-text-heading">
                                        <value.icon
                                            className="absolute left-1 top-1 h-5 w-5 theme-text-accent animate-pulse"
                                            aria-hidden="true"
                                        />
                                        {value.name}
                                    </dt>{" "}
                                    <dd className="inline theme-text-description">
                                        {value.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default AboutValues;

// {aboutOurValuesList?.map((value: any) => (
//     <div
//         key={value.aboutOurValuesListTitle}
//         className="relative pl-9"
//     >
//         <dt className="inline font-semibold theme-text-heading">
//             {/* <value.aboutOurValuesListIcon
//                 className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
//                 aria-hidden="true"
//             /> */}
//             {value.aboutOurValuesListTitle}
//         </dt>{" "}
//         <dd className="inline theme-text-description">
//             {value.aboutOurValuesListDescription}
//         </dd>
//     </div>
// ))}
