export default function AnxietyPage() {
    return (
        <div className="max-w-3xl mx-auto py-20 px-6">
            <h1 className="text-3xl font-bold mb-6">Managing Anxiety</h1>

            <p className="mb-4">
                Anxiety can affect daily life, but there are ways to manage it effectively.
            </p>

            <ul className="list-disc ml-6 mb-6">
                <li>Practice deep breathing</li>
                <li>Maintain a healthy routine</li>
                <li>Limit caffeine intake</li>
                <li>Seek professional support</li>
            </ul>

            <a
                href="/contact"
                className="inline-block bg-black text-white px-6 py-3 rounded-md"
            >
                Book Appointment
            </a>
        </div>
    );
}