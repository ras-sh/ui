import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Example - @ras-sh/ui",
  description: "Next.js example using @ras-sh/ui library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
