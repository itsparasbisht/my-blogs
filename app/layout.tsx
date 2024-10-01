import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs by Paras",
  description:
    "I share insights on topics I find interesting and hope they’ll be useful to you too.",
  keywords: [
    "Paras Bisht",
    "software developer blog",
    "frontend developer",
    "interesting blogs",
    "react js developer",
  ],
  authors: [{ name: "Paras Bisht", url: "https://paras-bisht.netlify.app/" }],
  openGraph: {
    title: "Blogs by Paras",
    description:
      "I share insights on topics I find interesting and hope they’ll be useful to you too.",
    url: "https://blogs-by-paras.netlify.app/",
    siteName: "Blogs by Paras",
    images: [
      {
        url: "https://i.ibb.co/ZLnPzNG/blogs-by-paras.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs by Paras",
    description:
      "I share insights on topics I find interesting and hope they’ll be useful to you too.",
    images: [
      {
        url: "https://i.ibb.co/ZLnPzNG/blogs-by-paras.jpg",
      },
    ],
  },
};

const montserrat = Montserrat({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-[#212121] max-w-[720px] m-auto px-5`}
      >
        <nav className="pt-10 pb-7 text-gray-200 flex justify-between items-center">
          <Link href="/">
            <h2 className="text-3xl font-bold">
              Blogs <span className="text-lg font-medium">by Paras</span>
            </h2>
          </Link>
          <Link href="https://www.linkedin.com/in/paras-bisht" target="_blank">
            <Image
              src="/profile.jpg"
              alt="paras profile picture"
              width={70}
              height={70}
              style={{ borderRadius: "50%" }}
            />
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
