import { formatDate } from "@/app/utils/formatDate";
import { Merriweather } from "next/font/google";
import Link from "next/link";
import { supabase } from "./utils/supabase";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export default async function Home() {
  let { data: blogs, error } = await supabase
    .from("blogs")
    .select("id, title, created_at, teaser");

  if (error) {
    console.log(error);
  }

  return (
    <main>
      {blogs?.map((blog) => (
        <Link
          key={blog.title}
          href={`/${blog.id}-${encodeURIComponent(
            blog.title.toLowerCase().split(" ").join("-")
          )}`}
        >
          <div className="text-[#D88B4E] mb-14 cursor-pointer">
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
