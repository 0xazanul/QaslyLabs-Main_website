'use client';

import { useEffect, useState } from 'react';
import { getBlogPosts as getBlogPostsServer, getBlogPostBySlug as getBlogPostBySlugServer } from '@/lib/blog';
import type { BlogPost } from '@/lib/blog';

// Mock data for initial loading state - this will be replaced with actual data from the server
const initialBlogPosts: BlogPost[] = [
  {
    slug: 'loading',
    frontmatter: {
      title: 'Loading...',
      description: 'Loading blog posts...',
      date: '2025-01-01', // Use a static date to prevent hydration issues
      category: 'Loading',
      readTime: '0 min read'
    },
    content: 'Loading content...'
  }
];

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const postsData = await getBlogPostsServer();
        setPosts(postsData);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return { posts, loading };
}

export function useBlogPostBySlug(slug: string) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      try {
        const postData = await getBlogPostBySlugServer(slug);
        setPost(postData || null);
      } catch (error) {
        console.error(`Error loading blog post with slug '${slug}':`, error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  return { post, loading };
}
