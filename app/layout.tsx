import type { Metadata } from "next";
import { Nunito } from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/shared";

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Next Pizza",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={nunito.className}
      >
        <main className="min-h-screen">
          <Header></Header>
          {children}
        </main>
      </body>
    </html>
  );
}
