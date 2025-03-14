import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Recursive } from "next/font/google";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CasePixel",
  description: "Design your one-of-a-kind phone case today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
