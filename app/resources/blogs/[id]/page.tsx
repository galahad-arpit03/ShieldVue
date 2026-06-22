import BlogArticle from "@/Resources/Blogs/SingleBlog/BlogArticle";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return {
    title: `Blog Post ${resolvedParams.id} | ShieldVUE`,
    description: "Read the latest insights on quality engineering, performance, security, and DevOps.",
  };
}

export default async function SingleBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return (
    <main>
      <BlogArticle id={resolvedParams.id} />
    </main>
  );
}
