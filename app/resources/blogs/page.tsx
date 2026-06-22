import BlogHero from "@/Resources/Blogs/BlogHero";
import BlogContent from "@/Resources/Blogs/BlogContent";

export const metadata = {
  title: "Blogs & Insights | ShieldVUE",
  description: "Stay ahead of AI-powered testing, quality engineering, and software supply chain security with the latest insights from ShieldVUE.",
};

export default function BlogsPage() {
  return (
    <>
            <main>
        <BlogHero />
        <BlogContent />
      </main>
          </>
  );
}
