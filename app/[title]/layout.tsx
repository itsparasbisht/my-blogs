import Link from "next/link";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>{children}</main>
      <footer>
        <Link href="/">
          <h2 className="text-4xl font-bold text-[#D88B4E] flex justify-center gap-2 mt-12 mb-12">
            Blogs <span className="text-lg font-medium self-end">by Paras</span>
          </h2>
        </Link>
      </footer>
    </>
  );
}
