const ZOCDOC_BOOK_URL =
  "https://www.zocdoc.com/practice/kateryna-koval-171909?lock=true&isNewPatient=false&referrerType=widget";
const ZOCDOC_IMAGE_SRC =
  "https://offsiteSchedule.zocdoc.com/images/remote/zd_bookonline_162x48.png?type=bobjs&monolith_provider_id=171909&practice_id=pt_JgVjipKHYUG1ujfGvbjZXA";

export default function ZocdocBookButton() {
  return (
    <a
      href={ZOCDOC_BOOK_URL}
      className="block shrink-0"
      title="Book with Kateryna Koval"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={ZOCDOC_IMAGE_SRC}
        alt="Book online with Kateryna Koval"
        title="Book online"
        className="h-9 w-auto border-0 sm:h-10"
        width={162}
        height={48}
      />
    </a>
  );
}
