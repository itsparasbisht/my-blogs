import { formatDate } from "@/app/utils/formatDate";
import { Merriweather } from "next/font/google";
import Link from "next/link";
import data from "./blogs/data.json";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export default async function Home() {
  const blogs = data;

  return (
    <main className="pb-12">
      {blogs?.map((blog) => (
        <Link key={blog.title} href={`/${blog.id}`}>
          <div className="text-[#D88B4E] py-8 cursor-pointer border-b-[1px] border-[#2a2a2a] hover:border-[#d88c4eea] transition-colors delay-75 ease-out">
            <h1 className="text-2xl font-bold">{blog.title}</h1>
            <p className={`${merriweather.className} text-gray-400 text-base`}>
              {formatDate(blog.created_at)}
            </p>
            <p
              className={`${merriweather.className} text-balance text-base text-gray-200 font-thin mt-2`}
            >
              {blog.teaser}
            </p>
          </div>
        </Link>
      ))}
    </main>
  );
}
