import React from "react";
import { Merriweather } from "next/font/google";
import { formatDate } from "../utils/formatDate";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeExternalLinks from "rehype-external-links";
import { Metadata } from "next";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import data from "../blogs/data.json";
import path from "path";
import fs from "fs";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = decodeURIComponent(params.id);

  return {
    title: `${id} - Blogs by Paras`,
  };
}

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export default async function Blog({ params }: { params: { id: string } }) {
  const { id } = params;

  // resolve the markdown file path
  const filePath = path.join(process.cwd(), "/app/blogs/", `${id}.md`);
  let blogContent = "";

  try {
    blogContent = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error("error reading file: ", error);
    blogContent = "Content not found";
  }

  const blog = data.filter((blog) => blog.id === id);

  return (
    <section className="text-gray-200">
      {blogContent && (
        <article className="mb-[50px]">
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
              iframe: ({ ...props }) => (
                <span
                  style={{
                    display: "inline-block",
                    position: "relative",
                    width: props.width || "640px",
                    height: props.height || "360px",
                    maxWidth: "100%",
                    margin: "0 auto",
                  }}
                >
                  <iframe
                    {...props}
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "0",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </span>
              ),
            }}
          >
            {blogContent}
          </ReactMarkdown>
        </article>
      )}
    </section>
  );
}
