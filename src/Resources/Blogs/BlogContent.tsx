"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/Common/UI/Button/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { trendingTopics, recentPosts, allBlogs } from "./BlogData";

export default function BlogContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const totalPages = Math.ceil((allBlogs.length - 2) / blogsPerPage); // Excluding the 2 "Latest Intelligence" blogs

  // The first 2 blogs go to "Latest Intelligence"
  const latestBlogs = allBlogs.slice(0, 2);
  
  // The rest go to the paginated list
  const remainingBlogs = allBlogs.slice(2);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentListedBlogs = remainingBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="shield-container">
        
        {/* Top Section: Latest Intelligence (Left) + Sidebar (Right) */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-12 lg:gap-16 mb-24">
          
          {/* LEFT: Latest Intelligence */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 font-['Clash_Grotesk'] mb-8">
              Latest Intelligence
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {latestBlogs.map((blog) => (
                <Link href={`/resources/blogs/${blog.id}`} key={blog.id} className="group cursor-pointer flex flex-col h-full">
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-slate-100 border border-slate-200">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-3 font-['Manrope']">
                    <span className="text-primary">{blog.category}</span>
                    <span className="text-slate-400">{blog.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-medium text-slate-900 font-['Clash_Grotesk'] leading-tight mb-4 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow font-['Inter']">
                    {blog.description}
                  </p>
                  <div className="flex items-center gap-3 mt-auto font-['Inter']">
                    <div className="w-8 h-8  bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                      {blog.author.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-900">{blog.author}</span>
                      <span className="text-[10px] text-slate-400 font-medium">{blog.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <div className="space-y-12">
            {/* Trending Topics */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 font-['Clash_Grotesk'] tracking-wider uppercase mb-6">
                Trending Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic) => (
                  <Link
                    key={topic}
                    href="#"
                    className="px-3 py-1.5 rounded-md border border-slate-200 text-xs font-medium text-slate-600 hover:border-primary hover:text-primary transition-colors font-['Manrope']"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            </div>

            {/* Recently Published */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 font-['Clash_Grotesk'] tracking-wider uppercase mb-6">
                Recently Published
              </h3>
              <div className="bg-[#FAFAFA] border border-slate-100 rounded-xl p-6 flex flex-col gap-6">
                {recentPosts.map((post, index) => (
                  <Link href={`/resources/blogs/${post.id}`} key={index} className="group cursor-pointer block">
                    <div className="text-[10px] font-bold text-primary mb-1 font-['Manrope']">
                      {post.date}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    {index !== recentPosts.length - 1 && (
                      <div className="h-px w-full bg-slate-200 mt-6" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-200 mb-20" />

        {/* Main Blog List Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 font-['Clash_Grotesk'] mb-8">
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {currentListedBlogs.map((blog) => (
              <Link href={`/resources/blogs/${blog.id}`} key={blog.id} className="group cursor-pointer flex flex-col h-full">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-2 font-['Manrope']">
                  <span className="text-primary">{blog.category}</span>
                  <span className="text-slate-400">{blog.readTime}</span>
                </div>
                <h3 className="text-2xl font-medium text-slate-900 font-['Clash_Grotesk'] leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow font-['Inter']">
                  {blog.description}
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100 font-['Inter']">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[10px]">
                    {blog.author.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900">{blog.author}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{blog.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mb-24">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-md border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-md flex items-center justify-center font-medium text-sm transition-colors ${
                  currentPage === i + 1 
                    ? "bg-primary text-white border-primary border shadow-sm" 
                    : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-md border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Subscribe CTA */}
        <div className="relative rounded-xl bg-gradient-to-br from-slate-100/80 to-slate-200/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] overflow-hidden py-16 px-6 md:px-16 text-center max-w-5xl mx-auto mt-24">
          {/* Purple Ray & Glass Abstract BG */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -top-[20%] left-[-20%] md:left-[10%] w-[150%] md:w-[80%] h-[140%] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent -rotate-[15deg] blur-2xl transform-gpu" />
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[80px] md:blur-[100px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-indigo-400/10 rounded-full blur-[60px] md:blur-[80px] -translate-x-1/3 translate-y-1/3" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-4 leading-tight">
              Stay Ahead of <span className="text-primary">AI-Powered Testing</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Get the latest insights on Agentic QA, autonomous testing, quality engineering and enterprise automation.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto justify-center" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-grow h-12 px-4 rounded-md border border-white/60 bg-white/80 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all shadow-sm"
              />
              <Button type="submit" size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-white rounded-md font-semibold shadow-lg shadow-primary/20 border-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
