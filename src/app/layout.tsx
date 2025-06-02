import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My app",
  description: "This ia a demo app for development practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-white">
      <nav className="flex space-x-4 p-4 bg-amber-50 border-b border-amber-200">
        <Link
          href="/"
          className={cn(
            "px-4 py-2 rounded-md border-2 border-amber-200 text-amber-700 font-medium hover:bg-amber-200 transition"
          )}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="px-4 py-2  rounded-md border-2 border-amber-200 text-amber-700 font-medium hover:bg-amber-200 transition"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="px-4 py-2 rounded-md border-2 border-amber-200 text-amber-700 font-medium hover:bg-amber-200 transition"
        >
          Contact
        </Link>
        <Link
          href="/blogs"
          className="px-4 py-2 rounded-md border-2 border-amber-200 text-amber-700 font-medium hover:bg-amber-200 transition"
        >
          All Blogs
        </Link>
        <Link
          href="/products"
          className="px-4 py-2 rounded-md border-2 border-amber-200 text-amber-700 font-medium hover:bg-amber-200 transition"
        >
          All Products
        </Link>
        <Link href="/secondblogs" className="px-4 py-2 rounded-md border-2 border-amber-200 text-amber-700 font-medium hover:bg-amber-200 transition"> All blogs (2nd)</Link>
      </nav>
      <main>{children}</main>
    </div>
        
        
        
      </body>
    </html>
  );
}
