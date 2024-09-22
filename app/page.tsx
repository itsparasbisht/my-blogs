import { formatDate } from "@/utils/formatDate";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const blogs = [
    {
      title: "What is Unicode and UTF-8?",
      createdAt: 1727002903053,
      summary:
        "Unicode is the global standard for representing text across different languages and symbols.",
    },
    {
      title: "When to Use Git Squash Merge",
      createdAt: 1727002903053,
      summary:
        "By default, a merge will bring over all the individual commits from feature-1 into main.",
    },
    {
      title: "The HTML5 Drag & Drop API",
      createdAt: 1727002903053,
      summary:
        "If you’re interested in trying it out for yourself, check the comments for a link to my GitHub repository and the MDN documentation.",
    },
  ];

  return (
    <main>
      {blogs.map((blog) => (
        <div className="text-[#D88B4E] mb-12">
          <h1 className="text-2xl font-bold">{blog.title}</h1>
          <p className={`${merriweather.className} text-gray-400 text-base`}>
            {formatDate(blog.createdAt)}
          </p>
          <p
            className={`${merriweather.className} text-balance text-base text-gray-200 font-thin mt-2`}
          >
            {blog.summary}
          </p>
        </div>
      ))}
    </main>
  );
}
