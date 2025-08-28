import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/BlogPostClient";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  // Check if the post exists on the server first
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient slug={params.slug} />;
}

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}
