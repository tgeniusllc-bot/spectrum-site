interface Props {
    query: any;
}

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
                <section className="mx-auto my-24 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex rounded-full bg-[#eaf4f4] px-4 py-2 text-sm font-semibold text-[#2f6f73]">
                            Our Providers
                        </span>

                        <h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                            {aboutOurTeamTitle}
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-zinc-600">
                            {aboutOurTeamDescription}
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {teamMember.map((member: any) => (
                            <article
                                key={member.teamMemberName}
                                className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-zinc-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="relative h-80 overflow-hidden bg-zinc-100">
                                    <img
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        src={
                                            member.teamMemberImage.node
                                                .sourceUrl
                                        }
                                        alt={member.teamMemberName}
                                    />
                                </div>

                                <div className="p-7">
                                    <h3 className="text-xl font-bold text-zinc-900">
                                        {member.teamMemberName}
                                    </h3>

                                    <p className="mt-2 text-base font-semibold text-[#2f6f73]">
                                        {member.teamMemberRole}
                                    </p>

                                    <p className="mt-4 text-sm leading-6 text-zinc-600">
                                        {member.teamMemberLocation}
                                    </p>

                                    <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-5">
                                        <span className="text-sm font-medium text-zinc-500">
                                            Spectrum Psychiatry
                                        </span>

                                        <span className="rounded-full bg-[#eaf4f4] px-3 py-1 text-xs font-semibold text-[#2f6f73]">
                                            Irvine, CA
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            ) : null}
        </>
    );
};

export default AboutOurTeam;