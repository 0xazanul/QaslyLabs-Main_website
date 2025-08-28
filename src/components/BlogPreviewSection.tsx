"use client";
import Link from "next/link";
import { useBlogPosts } from "@/hooks/useBlog";
import Logo from "./Logo";

// Helper function to format date consistently
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  } catch {
    return dateString; // Fallback to original string if parsing fails
  }
}

export default function BlogPreviewSection() {
  const { posts, loading } = useBlogPosts();
  const latestPosts = posts.slice(0, 2);

  // Don't render until posts are loaded to prevent hydration issues
  if (loading || posts.length === 0 || posts[0]?.slug === 'loading') {
    return (
      <section className="w-full py-16 px-4 bg-black border-t border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-medium text-white">Security Research</h2>
            <div className="flex items-center gap-2 text-neutral-400 text-sm">
              <Logo size={16} showText={false} />
              <span>Loading...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 px-4 bg-black border-t border-neutral-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-medium text-white">Security Research</h2>
          <Link href="/blog" className="text-neutral-400 hover:text-white text-sm">
            View all →
          </Link>
        </div>
        
        <div className="space-y-6">
          {latestPosts.map((post) => (
            <article key={post.slug} className="border-b border-neutral-800 pb-6 last:border-b-0">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white mb-2">
                    {post.frontmatter.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-3">
                    {post.frontmatter.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-neutral-500">
                    <span>{formatDate(post.frontmatter.date)}</span>
                    <span>{post.frontmatter.readTime}</span>
                  </div>
                </div>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-neutral-400 hover:text-white text-sm whitespace-nowrap"
                >
                  Read →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
