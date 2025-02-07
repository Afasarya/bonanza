import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Gudea } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gudea = Gudea({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-gudea',
});

export const metadata: Metadata = {
  title: "Create Next App",
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
        className={`${geistSans.variable} ${geistMono.variable} ${gudea.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
