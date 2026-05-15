export default function DepressionPage() {
    return (
        <div className="max-w-3xl mx-auto py-20 px-6">
            <h1 className="text-3xl font-bold mb-6">Signs of Depression</h1>

            <p className="mb-4">
                Depression is more than just feeling sad. It can affect how you think, feel, and handle daily activities.
            </p>

            <ul className="list-disc ml-6 mb-6">
                <li>Persistent sadness</li>
                <li>Loss of interest in activities</li>
                <li>Fatigue or low energy</li>
                <li>Difficulty concentrating</li>
            </ul>

            <p className="mb-6">
                If these symptoms last more than two weeks, it may be time to seek professional help.
            </p>

            <a
                href="/contact"
                className="inline-block bg-black text-white px-6 py-3 rounded-md"
            >
                Book Appointment
            </a>
        </div>
    );
}