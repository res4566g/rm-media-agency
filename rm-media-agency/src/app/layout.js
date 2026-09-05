import "./globals.css";

export const metadata = {
  title: "R&M Media Agency",
  description: "Strategy. Creative. Media. Digital. Experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
