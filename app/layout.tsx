import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "TermLink — Chat That Never Touches the Internet",
  description: "Private, end-to-end encrypted terminal chat over Bluetooth Low Energy. No internet, server, account, database, or permanent message history.",
  applicationName: "TermLink",
  category: "technology",
  keywords: ["offline chat", "Bluetooth Low Energy", "terminal chat", "private messaging", "Rust"],
  authors: [{ name: "TermLink contributors", url: "https://github.com/anbv29/termlink" }],
  creator: "TermLink contributors",
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f7fbff",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
