import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Use Inter as the primary clean, modern UI font and a mono for code areas
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const jetMono = JetBrains_Mono({
  variable: "--font-jet-mono",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
  preload: true,
  fallback: ['ui-monospace', 'monospace'],
});

export const metadata: Metadata = {
  title: "Qasly Labs | Security Research & Vulnerability Detection",
  description: "Professional security research lab. Find vulnerabilities in vibe-coded apps and get alerted about potential security issues.",
  icons: {
    icon: '/qasly-logo.svg',
    apple: '/qasly-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetMono.variable} antialiased bg-black text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
