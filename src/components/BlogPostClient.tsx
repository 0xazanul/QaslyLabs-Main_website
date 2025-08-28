'use client';

import { useBlogPostBySlug } from "@/hooks/useBlog";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPostClient({ slug }: { slug: string }) {
  const { post, loading } = useBlogPostBySlug(slug);

  if (!loading && !post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-16 w-full">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-neutral-400">Loading...</div>
          </div>
        ) : (
          <div className="w-full max-w-3xl mx-auto">
            {/* Back to blog */}
            <div className="mb-8">
              <Link 
                href="/blog" 
                className="text-neutral-400 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
              >
                ← Back to blog
              </Link>
            </div>

            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4 text-sm text-neutral-500">
                <span>{post?.frontmatter.date}</span>
                <span>{post?.frontmatter.readTime}</span>
                <span className="px-2 py-1 bg-neutral-800 rounded text-xs">
                  {post?.frontmatter.category}
                </span>
              </div>
              <h1 className="text-3xl font-medium text-white mb-4 leading-tight">
                {post?.frontmatter.title}
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed">
                {post?.frontmatter.description}
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-invert prose-neutral max-w-none">
              <div 
                className="markdown-content text-neutral-300 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: post?.content || '' }}
              />
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-neutral-800">
              <Link 
                href="/blog" 
                className="text-neutral-400 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
              >
                ← Back to all articles
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
