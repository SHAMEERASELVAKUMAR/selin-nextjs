"use client";
export default function ChatButton() {
  return (
    <div className="fixed right-8 bottom-8 z-50">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9J9P-YN3-_uhEsMDG8iJxWExj6KnX_if8FTol4Fbes85WEQ/viewform" target="_blank" rel="noreferrer">
        <div className="chat-bubble">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="18" height="14" rx="2" />
            <path d="M8 21l4-4h4" />
          </svg>
        </div>
      </a>
    </div>
  );
}

