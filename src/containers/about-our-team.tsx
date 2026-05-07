import { useState } from "react";

interface Props {
    query: any;
}

const ZOCDOC_BOOK_URL =
    "https://www.zocdoc.com/practice/kateryna-koval-171909?lock=true&isNewPatient=false&referrerType=widget";

const AboutOurTeam: React.FC<Props> = ({ query }) => {
    const {
        aboutOurTeamTitle,
        aboutOurTeamDescription,
        teamMember,
        aboutOurTeamEnabledDisabled,
    } = query.nodeByUri.acfAboutPage.aboutPageBlocks.aboutOurTeam;

    const detailMembers =
        query.nodeByUri.acfAboutPage.aboutPageBlocks.aboutJoinOurTeamMembers ||
        [];

    const cuneytCredentials =
        query.nodeByUri.acfAboutPage.aboutPageBlocks.aboutOurValues
            ?.aboutOurValuesList || [];

    const [selectedMember, setSelectedMember] = useState<any>(null);

    return (
        <>
            {aboutOurTeamEnabledDisabled[0] === "Enabled" ? (
                <section className="mx-auto mt-8 mb-20 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex rounded-full bg-[#eaf4f4] px-4 py-2 text-sm font-semibold text-[#2f6f73]">
                            Our Providers
                        </span>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                            {aboutOurTeamTitle}
                        </h2>

                        <p className="mt-4 text-lg leading-8 text-zinc-600">
                            {aboutOurTeamDescription}
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {teamMember.map((member: any, index: number) => {
                            const detail = detailMembers[index];

                            return (
                                <article
                                    key={member.teamMemberName}
                                    onClick={() =>
                                        setSelectedMember({
                                            ...member,
                                            detail,
                                        })
                                    }
                                    className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-zinc-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="relative h-80 overflow-hidden bg-white">
                                        <img
                                            className="h-full w-full object-contain bg-white p-4 transition-transform duration-500 group-hover:scale-105"
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
                                                View Profile
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {selectedMember && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
                            <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-10">
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute right-5 top-5 rounded-full bg-zinc-100 px-3 py-1 text-lg font-bold text-zinc-700 hover:bg-zinc-200"
                                >
                                    ×
                                </button>

                                <div className="grid gap-8 md:grid-cols-[260px_1fr]">
                                    <img
                                        className="h-80 w-full rounded-2xl object-contain bg-white p-4"
                                        src={
                                            selectedMember.teamMemberImage.node
                                                .sourceUrl
                                        }
                                        alt={selectedMember.teamMemberName}
                                    />

                                    <div>
                                        <h3 className="text-3xl font-bold text-zinc-900">
                                            {selectedMember.teamMemberName}
                                        </h3>

                                        <p className="mt-2 text-lg font-semibold text-[#2f6f73]">
                                            {selectedMember.teamMemberRole}
                                        </p>

                                        <p className="mt-3 text-sm text-zinc-500">
                                            {selectedMember.teamMemberLocation}
                                        </p>

                                        <a
                                            href={ZOCDOC_BOOK_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#2f6f73] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#24585b]"
                                        >
                                            Book Appointment
                                        </a>

                                        <div className="mt-6 border-t border-zinc-100 pt-6">
                                            <p className="whitespace-pre-line text-base leading-8 text-zinc-700">
                                                {selectedMember.detail
                                                    ?.joinOurTeamDescription ||
                                                    "Provider details will be added soon."}
                                            </p>
                                        </div>

                                        {selectedMember.teamMemberName
                                            ?.toLowerCase()
                                            .includes("cuneyt") && (
                                            <div className="mt-8 grid gap-4 border-t border-zinc-100 pt-6 sm:grid-cols-2">
                                                {cuneytCredentials.map(
                                                    (item: any) => (
                                                        <div
                                                            key={
                                                                item.aboutOurValuesListTitle
                                                            }
                                                            className="rounded-2xl bg-[#f7fbfb] p-5 ring-1 ring-zinc-100"
                                                        >
                                                            <h4 className="text-sm font-bold text-zinc-900">
                                                                {
                                                                    item.aboutOurValuesListTitle
                                                                }
                                                            </h4>

                                                            <p className="mt-2 whitespace-pre-line text-sm leading-6 text-zinc-600">
                                                                {
                                                                    item.aboutOurValuesListDescription
                                                                }
                                                            </p>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            ) : null}
        </>
    );
};

export default AboutOurTeam;