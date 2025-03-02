import ThemeContextProvider from "@/contexts/theme-context";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/contexts/active-session-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import ThemeSwitch from "@/components/ThemeSwitch";
import { Toaster } from "react-hot-toast";
import Warning from "@/components/Warning";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isaac Marian Dsouza",
  description:
    "Isaac Marian Dsouza is a professional Full Stack web developer and Computer Science with specialization in Artificial Intellignece.",
  icons: {
    icon: "./public/i-high-resolution-logo(1).png",
  },
  keywords: [
    "web developer",
    "web development",
    "frontend",
    "front end",
    "front-end",
    "full stack",
    "react",
    "react.js",
    "javascript",
    "typescript",
    "next.js",
    "programming",
  ],
  authors: [{ name: "Habib Mollah", url: "https://mollah.vercel.app" }],
  creator: "Habib Mollah",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <Warning />
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster
              toastOptions={{
                duration: 5000,
                position: "bottom-center",
                style: {
                  border: "1px solid #15803d",
                  padding: "4px 8px",
                  margin: "0px 0px 64px 0px",
                  color: "#fff",
                  background: "#15803d",
                  fontWeight: 500,
                },
              }}
            />
            {/* <ThemeSwitch /> */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
