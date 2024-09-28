import Image from "next/image";
import { Blog, getBlogsDetail, getBlogsAllIds } from "@/hooks/useMicrocms";

export async function generateStaticParams() {
  const postIds = await getBlogsAllIds();

  return postIds.map((id: string) => ({
    news_id: id,
  }));
}

export default async function NewsDetail({
  params,
}: {
  params: { news_id: string };
}) {
  if (!params?.news_id) {
    return <></>;
  }
  const blog = await getBlogsDetail(params?.news_id);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {blog?.publishedAt}
      {blog?.title}
    </div>
  );
}
