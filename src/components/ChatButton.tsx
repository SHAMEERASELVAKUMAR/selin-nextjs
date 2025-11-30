"use client";

export default function ChatButton() {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSe9J9P-YN3-_uhEsMDG8iJxWExj6KnX_if8FTol4Fbes85WEQ/viewform";

  return (
    <a
      href={formUrl}
      target="_blank"
      className="fixed bottom-6 right-6 w-14 h-14 bg-transparent border border-gold text-gold rounded-full flex items-center justify-center"
    >
      💬
    </a>
  );
}
