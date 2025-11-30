import "../styles/globals.css";

export const metadata = {
  title: "Selin Ventures",
  description: "Gemini-style UI built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}

