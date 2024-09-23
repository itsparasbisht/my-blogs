import Link from "next/link";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>{children}</main>
      <footer className="mt-12 mb-12">
        <div className="text-[#D88B4E] flex gap-4 underline">
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
    </>
  );
}
