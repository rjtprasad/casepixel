import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Recursive } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"

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
        <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">{children}</div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
