interface Props {
    query: any;
}

const team = [
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        location: "Irvine, California",
    },
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        location: "Irvine, California",
    },
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        location: "Irvine, California",
    },
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        location: "Irvine, California",
    },
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        location: "Irvine, California",
    },
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        location: "Irvine, California",
    },
    // More people...
];

const AboutOurTeam: React.FC<Props> = ({ query }) => {
    const {
        aboutOurTeamTitle,
        aboutOurTeamDescription,
        teamMember,
        aboutOurTeamEnabledDisabled,
    } = query.nodeByUri.acfAboutPage.aboutPageBlocks.aboutOurTeam;
    return (
        <>
            {aboutOurTeamEnabledDisabled[0] === "Enabled" ? (
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight theme-text-heading sm:text-4xl">
                            {aboutOurTeamTitle}
                        </h2>
                        <p className="mt-6 text-lg leading-8 theme-text-description">
                            {aboutOurTeamDescription}
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                    >
                        {teamMember.map((member: any) => (
                            <li key={member.teamMemberName}>
                                <img
                                    className="aspect-[14/13] w-full rounded-2xl object-cover"
                                    src={member.teamMemberImage.node.sourceUrl}
                                    alt=""
                                />
                                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight theme-text-heading">
                                    {member.teamMemberName}
                                </h3>
                                <p className="text-base leading-7 theme-text-description">
                                    {member.teamMemberRole}
                                </p>
                                <p className="text-sm leading-2 text-gray-700 dark:text-gray-500 transition-ease-effect">
                                    {member.teamMemberLocation}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default AboutOurTeam;
