export default function HelpPage() {
    return (
        <div className="max-w-3xl mx-auto py-20 px-6">
            <h1 className="text-3xl font-bold mb-6">
                When to Seek Professional Help
            </h1>

            <p className="mb-4">
                It can be difficult to know when to seek help, but early support can make a big difference.
            </p>

            <ul className="list-disc ml-6 mb-6">
                <li>Persistent sadness or anxiety</li>
                <li>Difficulty functioning in daily life</li>
                <li>Loss of motivation or energy</li>
                <li>Changes in sleep or appetite</li>
            </ul>

            <p className="mb-6">
                If these symptoms continue, reaching out to a mental health professional is an important step.
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