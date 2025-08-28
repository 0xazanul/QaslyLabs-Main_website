'use client';

import Link from "next/link";
import { useBlogPosts } from "@/hooks/useBlog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Blog() {
  const { posts } = useBlogPosts();

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-16 w-full">
        <div className="w-full max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl font-medium text-white mb-4">Security Research</h1>
            <p className="text-neutral-400 text-lg max-w-2xl">
              Research findings and security insights from our team
            </p>
          </div>

          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-neutral-800 pb-8 last:border-b-0">
                <div className="flex justify-between items-start gap-6">
                  <div className="flex-1">
                    <h2 className="text-xl font-medium text-white mb-3 hover:text-neutral-300 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <p className="text-neutral-400 mb-4 leading-relaxed">
                      {post.frontmatter.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <span>{post.frontmatter.date}</span>
                      <span>{post.frontmatter.readTime}</span>
                      <span className="px-2 py-1 bg-neutral-800 rounded text-xs">
                        {post.frontmatter.category}
                      </span>
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="text-neutral-400 hover:text-white text-sm whitespace-nowrap transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
