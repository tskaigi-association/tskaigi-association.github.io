import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GA4 from "./ga4";
import { Head } from "next/document";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "一般社団法人TSKaigi Association",
  description: "一般社団法人TSKaigi Association",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <GA4 />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
