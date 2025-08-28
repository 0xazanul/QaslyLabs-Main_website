'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    category: string;
    readTime: string;
  };
  content: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Get all files in the blog directory
  const files = await fs.promises.readdir(BLOG_DIR);
  // Filter out non-markdown files
  const markdownFiles = files.filter(file => file.endsWith('.md'));
  // Process each markdown file
  const posts = await Promise.all(markdownFiles.map(async (filename) => {
    // Get the slug from the filename
    const slug = filename.replace(/\.md$/, '');
    // Read the file content
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = await fs.promises.readFile(filePath, 'utf8');
    // Parse frontmatter and content
    const { data: frontmatter, content } = matter(fileContent);
    // Convert markdown to HTML
    const htmlContent = await marked(content);
    // Return the post data
    return {
      slug,
      frontmatter: frontmatter as BlogPost['frontmatter'],
      content: htmlContent
    };
  }));
  // Sort posts by date (most recent first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    // Check if the file exists
    try {
      await fs.promises.access(filePath);
    } catch {
      console.error(`Blog post file not found: ${filePath}`);
      return undefined;
    }
    // Read and parse the file
    const fileContent = await fs.promises.readFile(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);
    // Convert markdown to HTML
    const htmlContent = await marked(content.trim());
    return {
      slug,
      frontmatter: frontmatter as BlogPost['frontmatter'],
      content: htmlContent
    };
  } catch (error) {
    console.error(`Error getting blog post by slug '${slug}':`, error);
    return undefined;
  }
}
