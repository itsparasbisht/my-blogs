import React from "react";
import { supabase } from "../utils/supabase";
import { Merriweather } from "next/font/google";
import { formatDate } from "../utils/formatDate";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeExternalLinks from "rehype-external-links";
import { Metadata } from "next";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type Props = {
  params: { title: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let title = decodeURIComponent(params.title);
  title = title.split("-").splice(1).join(" ");

  return {
    title: `${title} - Blogs by Paras`,
  };
}

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export default async function Blog({ params }: { params: { title: string } }) {
  const title = decodeURIComponent(params.title);
  const id = title.split("-")[0];

  const { data: blog, error } = await supabase
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
            rehypePlugins={[
              rehypeRaw,
              [
                rehypeExternalLinks,
                { target: "_blank", rel: "noopener noreferrer" },
              ],
            ]}
            components={{
              img: ({ ...props }) => (
                <Zoom>
                  <img {...props} style={{ maxWidth: "100%" }} />
                </Zoom>
              ),
              video: ({ ...props }) => {
                const { width = "100%", height = "auto", ...rest } = props;
                return (
                  <video
                    {...rest}
                    controls
                    style={{
                      width,
                      height,
                      borderRadius: "8px",
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                );
              },
            }}
          >
            {blog[0].body}
          </ReactMarkdown>
        </article>
      )}
    </section>
  );
}
