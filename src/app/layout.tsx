import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTopOnReload from "@/components/ScrollToTopOnReload";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sukhvir Singh | Full-Stack Developer - React, Next.js, TypeScript",
  description:
    "Sukhvir Singh is a full-stack developer with expertise in React, Next.js, and TypeScript. Explore modern projects and get in touch.",
  openGraph: {
    title: "Sukhvir Singh | Full-Stack Developer",
    description:
      "Explore projects by Sukhvir Singh, full-stack developer specializing in React, Next.js, and TypeScript.",
    url: "https://sukhvirportfolio.info",
    siteName: "Sukhvir Portfolio",
    images: [
      {
        url: "https://sukhvirportfolio.info/og-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Sukhvir Singh Portfolio OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sukhvir Singh | Full-Stack Developer",
    description:
      "Explore React, Next.js, and TypeScript projects by full-stack developer Sukhvir Singh.",
    images: ["https://sukhvirportfolio.info/og-thumbnail.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-950 relative sm:pt-36`}
      >
        <ScrollToTopOnReload />

        {/* Background blurs */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        {children}

        <ToastContainer
          position="top-right"
          className="!fixed"
          autoClose={4000}
        />
      </body>
    </html>
  );
}
