const ZOCDOC_BOOK_URL =
  "https://www.zocdoc.com/practice/kateryna-koval-171909?lock=true&isNewPatient=false&referrerType=widget";

export default function ZocdocBookButton() {
  return (
    <a
      href={ZOCDOC_BOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0f766e",
        color: "#ffffff",
        padding: "10px 18px",
        borderRadius: "999px",
        fontSize: "14px",
        fontWeight: 700,
        textDecoration: "none",
        whiteSpace: "nowrap",
      }}
      title="Book Appointment"
    >
      Book Appointment
    </a>
  );
}