import React from "react";
import { supabase } from "../utils/supabase";
import { Merriweather } from "next/font/google";
import { formatDate } from "../utils/formatDate";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export default async function Blog({ params }: { params: { title: string } }) {
  const title = decodeURIComponent(params.title);
  const id = title.split("-")[0];

  let { data: blog, error } = await supabase
    .from("blogs")
    .select("title, body, created_at")
    .eq("id", id);

  if (error) {
    console.log(error);
  }

  return (
    <section className="text-gray-200">
      {blog && blog.length > 0 && (
        <article>
          <h1 className="text-3xl font-bold text-[#D88B4E]">{blog[0].title}</h1>
          <p className={`${merriweather.className} text-gray-400 text-base`}>
            {formatDate(blog[0].created_at)}
          </p>

          <ReactMarkdown
            className={`${merriweather.className} markdown-container w-full mt-10`}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
          >
            {blog[0].body}
          </ReactMarkdown>
        </article>
      )}
    </section>
  );
}
