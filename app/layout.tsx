import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs by Paras",
  description: "Generated by create next app",
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
        <nav className="py-10 text-gray-200 flex justify-between items-center">
          <h2 className="text-3xl font-bold">
            Blogs <span className="text-lg font-medium">by Paras</span>
          </h2>
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
