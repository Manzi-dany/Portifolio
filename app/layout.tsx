import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manzi Dany | Biotechnologist & Data Scientist",
  description: "Professional portfolio of Manzi Dany - Biotechnologist, Certified Data Analyst, and Junior Data Scientist specializing in public health, healthcare analytics, and biotech innovation.",
  keywords: ["Manzi Dany", "Biotechnologist", "Data Scientist", "Public Health", "Rwanda", "Data Analytics", "Biotech"],
  authors: [{ name: "Manzi Dany" }],
  openGraph: {
    title: "Manzi Dany | Biotechnologist & Data Scientist",
    description: "Professional portfolio showcasing expertise in biotechnology, data science, and public health innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
