import "./../styles/globals.css";

export const metadata = {
  title: "Selin Ventures",
  description: "Join the biggest AI startup - Selin Ventures",
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

