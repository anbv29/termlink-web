import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TermLink — Offline Bluetooth Chat",
  description: "A fully offline, private Bluetooth Low Energy chat tool for Windows.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
