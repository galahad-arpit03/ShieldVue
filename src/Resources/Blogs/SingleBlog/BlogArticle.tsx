"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import { allBlogs } from "../BlogData";
import { notFound } from "next/navigation";

interface BlogArticleProps {
  id: string;
}

export default function BlogArticle({ id }: BlogArticleProps) {
  const blog = allBlogs.find((b) => b.id.toString() === id);

  if (!blog) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen pb-12 md:pb-24">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-12 md:pb-24 flex items-center min-h-[65vh] overflow-hidden border-b border-slate-100 bg-gradient-to-r from-primary/10 via-primary/5 to-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-contain object-right mix-blend-multiply opacity-50"
            priority
          />
          {/* Subtle fade to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8FA]/60 via-[#F8F8FA]/20 to-transparent w-[100%]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8">
          <Link
            href="/resources/blogs"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-10 font-['Inter']"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all articles
          </Link>

          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-6 font-['Manrope'] text-slate-500">
            <span className="text-primary">BLOG POST</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>{blog.readTime}</span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium font-['Clash_Grotesk'] leading-[1.2] tracking-[-0.01em] mb-6 md:mb-12 w-full md:max-w-[80%] lg:max-w-[75%] text-slate-900">
            {blog.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-primary">{blog.title.split(' ').pop()}</span>
          </h1>

          <div className="pt-8 border-t border-slate-200 flex items-center gap-4 font-['Inter'] max-w-4xl">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-lg text-primary">
              {blog.author.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900">{blog.author}</span>
              <span className="text-sm text-slate-500">{blog.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-20">

        {/* Intro / Description with Left Border */}
        <div className="pl-6 border-l-[3px] border-[#8B5CF6] mb-8 md:mb-16">
          <p className="text-base text-slate-700 font-['Inter'] leading-[1.8] font-normal">
            {blog.description}
          </p>
        </div>

        {/* Body Content */}
        <div className="max-w-none text-slate-700 font-['Inter'] leading-loose space-y-6 text-sm">
          {blog.content ? (
            blog.content.split("\n\n").map((rawParagraph, idx) => {
              const paragraph = rawParagraph.trim();
              if (!paragraph) return null;

              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={idx} className="text-2xl md:text-3xl font-medium font-['Manrope'] text-slate-900 mt-12 mb-6 leading-snug">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("> ")) {
                return (
                  <blockquote key={idx} className="border-l-4 border-primary pl-6 py-1 my-8 text-base leading-relaxed text-slate-700 font-normal">
                    {paragraph.replace("> ", "")}
                  </blockquote>
                );
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <ul key={idx} className="list-disc pl-6 my-4 space-y-3 font-normal">
                    {paragraph.split('\n').map((item, i) => {
                      const cleanItem = item.trim();
                      if (!cleanItem) return null;
                      return <li key={i} className="text-slate-700 leading-relaxed text-base">{cleanItem.replace("- ", "")}</li>;
                    })}
                  </ul>
                );
              }
              return (
                <p key={idx} className="text-base leading-[1.8] text-slate-700 mb-6 font-normal">
                  {paragraph}
                </p>
              );
            })
          ) : (
            <p>Content coming soon.</p>
          )}
        </div>

        {/* Tags / Footer */}
        <footer className="mt-12 md:mt-24 pt-8 border-t border-slate-100">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-2 font-['Manrope']">
              <span className="px-4 py-2 bg-slate-50 rounded-lg text-xs font-bold text-slate-600 tracking-wide uppercase">#{blog.category.replace(/\s+/g, '')}</span>
              <span className="px-4 py-2 bg-slate-50 rounded-lg text-xs font-bold text-slate-600 tracking-wide uppercase">#QualityEngineering</span>
            </div>

            <button className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold text-primary bg-primary/5 hover:bg-primary/10 transition-colors font-['Inter']">
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </button>
          </div>
        </footer>

      </div>
    </article>
  );
}
