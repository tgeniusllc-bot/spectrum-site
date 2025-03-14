import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function FormSuccess() {
    return (
        <div className="rounded-md bg-green-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <CheckCircleIcon
                        className="h-5 w-5 text-green-400"
                        aria-hidden="true"
                    />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                        Successfully Submitted
                    </h3>
                    <div className="mt-2 text-sm text-green-700">
                        <p>
                            We will review your submission and get back to you
                            within 24 hours. Our specialists will send you and
                            email or text with an estimated quote.
                        </p>
                    </div>
                    <div className="mt-4">
                        <div className="-mx-2 -my-1.5 flex">
                            {/* <button
                                type="button"
                                className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none"
                            >
                                Dismiss
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
