import Image from "next/image";
import { Blog, getBlogsList } from "@/hooks/useMicrocms";
import Link from "next/link";

export default async function Home() {
  const blogsRes = await getBlogsList();
  const blogs = blogsRes.contents;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {blogs.map((blog:Blog) => {
        return (
          <>
            <Link href={`/news/${blog?.id}`}>
              {blog?.publishedAt}
              {blog?.title}
            </Link>
          </>
        );
      })}
    </div>
  );
}
