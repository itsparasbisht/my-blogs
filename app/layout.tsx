import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs by Paras",
  description:
    "Discover practical programming guides, modern web development insights, and expert software tips at Blogs by Paras—your roadmap to mastering tech. Connect with me on LinkedIn to explore software development trends, uncover best practices in programming, and gain the confidence to build impactful projects.",
  keywords: [
    "how to master React JS",
    "best JavaScript tutorials for beginners",
    "paras bisht",
    "paras bisht blogs",
    "blogs by paras",
    "paras bisht portfolio",
    "frontend developer blogs",
    "react js developer",
    "software developer blogs",
    "frontend developer tutorials",
    "React developer tips",
    "coding tutorials for beginners",
  ],
  authors: [{ name: "Paras Bisht", url: "https://paras-bisht.netlify.app/" }],
  openGraph: {
    title: "Blogs by Paras",
    type: "website",
    description:
      "Discover practical programming guides, modern web development insights, and expert software tips at Blogs by Paras—your roadmap to mastering tech. Connect with me on LinkedIn to explore software development trends, uncover best practices in programming, and gain the confidence to build impactful projects.",
    url: "https://blogs-by-paras.netlify.app/",
    siteName: "Blogs by Paras",
    images: [
      {
        url: "https://i.ibb.co/ZLnPzNG/blogs-by-paras.jpg",
        alt: "Blogs by Paras - Cover Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs by Paras",
    description:
      "Discover practical programming guides, modern web development insights, and expert software tips at Blogs by Paras—your roadmap to mastering tech. Connect with me on LinkedIn to explore software development trends, uncover best practices in programming, and gain the confidence to build impactful projects.",
    images: [
      {
        url: "https://i.ibb.co/ZLnPzNG/blogs-by-paras.jpg",
        alt: "Blogs by Paras - Cover Image",
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
          <Link href="https://paras-bisht.netlify.app" target="_blank">
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
      <footer
        className={`${montserrat.className} px-5 mb-12 max-w-[720px] m-auto`}
      >
        <div className="text-[#D88B4E] flex gap-4 underline">
          <Link href="https://paras-bisht.netlify.app" target="_blank">
            Website
          </Link>
          <Link href="https://www.linkedin.com/in/paras-bisht" target="_blank">
            LinkedIn
          </Link>
          <Link href="https://github.com/itsparasbisht" target="_blank">
            GitHub
          </Link>
        </div>
        <Link href="/">
          <h2 className="text-4xl font-bold text-[#D88B4E] mt-4">
            Blogs <span className="text-lg font-medium self-end">by Paras</span>
          </h2>
        </Link>
      </footer>
    </html>
  );
}
