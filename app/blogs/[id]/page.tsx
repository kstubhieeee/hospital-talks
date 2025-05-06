import BlogClient from "./client"
import { structuredBlogArticles } from "@/lib/blog-data"

// Generate static params for all blog articles
export async function generateStaticParams() {
  return structuredBlogArticles.map((blog) => ({
    id: String(blog.id),
  }))
}

export default function BlogPage({ params }: { params: { id: string } }) {
  const blogId = parseInt(params.id)
  const blog = structuredBlogArticles.find((b) => b.id === blogId)
  
  return <BlogClient blog={blog} />
} 