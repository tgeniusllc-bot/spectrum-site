export default function StepBar({ currentStepIndex, steps }: any) {
    return (
        <nav
            className="flex items-center justify-start pb-8"
            aria-label="Progress"
        >
            <p className="text-sm font-medium">
                Step {currentStepIndex + 1} of {steps.length}
            </p>
            <ol role="list" className="ml-8 flex items-center space-x-5">
                {steps.map((step: any, id: any) => (
                    <li key={id}>
                        {id < currentStepIndex ? (
                            <div className="block h-2.5 w-2.5 rounded-full bg-heading hover:bg-indigo-900"></div>
                        ) : currentStepIndex === id ? (
                            <div
                                className="relative flex items-center justify-center"
                                aria-current="step"
                            >
                                <span
                                    className="absolute flex h-5 w-5 p-px"
                                    aria-hidden="true"
                                >
                                    <span className="h-full w-full rounded-full bg-primary animate-ping" />
                                </span>
                                <span
                                    className="relative block h-2.5 w-2.5 rounded-full bg-heading "
                                    aria-hidden="true"
                                />
                            </div>
                        ) : (
                            <div className="block h-2.5 w-2.5 rounded-full bg-gray-500 hover:bg-gray-400"></div>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
