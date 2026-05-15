export default function StressPage() {
    return (
        <div className="max-w-3xl mx-auto py-20 px-6">
            <h1 className="text-3xl font-bold mb-6">
                Coping with Stress in Daily Life
            </h1>

            <p className="mb-4">
                Stress is a normal part of life, but chronic stress can affect your mental and physical health.
            </p>

            <ul className="list-disc ml-6 mb-6">
                <li>Practice mindfulness and breathing exercises</li>
                <li>Stay physically active</li>
                <li>Maintain a healthy sleep routine</li>
                <li>Talk to someone you trust</li>
            </ul>

            <p className="mb-6">
                If stress becomes overwhelming, professional support can help you regain balance.
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