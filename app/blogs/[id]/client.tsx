"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin, Send, Reply } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Blog } from "@/lib/blog-data"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

type CommentType = {
  id: number;
  name: string;
  date: string;
  comment: string;
  replies: ReplyType[];
}

type ReplyType = {
  id: number;
  parentId: number;
  name: string;
  date: string;
  comment: string;
}

export default function BlogClient({ blog }: { blog: Blog | undefined }) {
  const [showCommentForm, setShowCommentForm] = useState(false)
  const [replyingTo, setReplyingTo] = useState<number | null>(null)
  const [comments, setComments] = useState<CommentType[]>([])
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: ""
  })
  const [replyForm, setReplyForm] = useState({
    name: "",
    email: "",
    comment: ""
  })

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCommentForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleReplyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setReplyForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the comment to the backend
    // For demo, we'll just add it to the local state
    
    if (!commentForm.name || !commentForm.email || !commentForm.comment) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      })
      return
    }
    
    const newComment: CommentType = {
      id: Date.now(),
      name: commentForm.name,
      date: new Date().toLocaleDateString(),
      comment: commentForm.comment,
      replies: []
    }
    
    setComments(prev => [newComment, ...prev])
    
    // Reset the form
    setCommentForm({
      name: "",
      email: "",
      comment: ""
    })
    
    // Hide the form
    setShowCommentForm(false)
    
    toast({
      title: "Success",
      description: "Your comment has been posted!"
    })
  }

  const handleSubmitReply = (e: React.FormEvent, parentId: number) => {
    e.preventDefault()
    
    if (!replyForm.name || !replyForm.email || !replyForm.comment) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      })
      return
    }
    
    const newReply: ReplyType = {
      id: Date.now(),
      parentId,
      name: replyForm.name,
      date: new Date().toLocaleDateString(),
      comment: replyForm.comment
    }
    
    // Add reply to the parent comment
    setComments(prev => 
      prev.map(comment => 
        comment.id === parentId 
          ? { ...comment, replies: [...comment.replies, newReply] } 
          : comment
      )
    )
    
    // Reset the form
    setReplyForm({
      name: "",
      email: "",
      comment: ""
    })
    
    // Hide the reply form
    setReplyingTo(null)
    
    toast({
      title: "Success",
      description: "Your reply has been posted!"
    })
  }

  if (!blog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p>Article not found</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-3xl mx-auto"
            >
              <Link href="/blogs">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Articles
                </Button>
              </Link>

              <div className="mb-8">
                <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-lg mb-6">
                  <Image
                    src={blog.featuredImage}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <Badge className="absolute top-4 left-4 bg-[#FF8C00] text-black">Healthcare</Badge>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-500">
                    {blog.date} • {blog.readTime}
                  </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{blog.title}</h1>
                <p className="text-xl text-gray-500 mb-8">{blog.excerpt}</p>
              </div>

              <article className="prose prose-green max-w-none">
                {blog.sections.map((section, index) => (
                  <div key={section.id} className="mb-10">
                    {section.headline && (
                      <h2 className={`${index === 0 ? 'text-2xl' : 'text-xl'} font-bold mb-4`}>
                        {section.headline}
                      </h2>
                    )}
                    
                    {section.image && (
                      <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                        <Image 
                          src={section.image}
                          alt={section.headline || `Section image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {section.paragraph}
                    </p>
                  </div>
                ))}
              </article>
              
              {/* Author Box */}
              <div className="mt-12 mb-8 bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16 border-2 border-[#006400]">
                    <AvatarImage src={blog.author.avatar} alt={blog.author.name} />
                    <AvatarFallback>{blog.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">{blog.author.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                    <p className="text-sm text-gray-700">{blog.author.bio}</p>
                  </div>
                </div>
              </div>
              
              {/* Social Sharing */}
              {blog.enableSocialSharing && (
                <div className="my-8 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Share2 className="h-5 w-5" /> Share this article
                  </h3>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-100 hover:text-blue-600">
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-sky-100 hover:text-sky-500">
                      <Twitter className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-100 hover:text-blue-700">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Comments Section */}
              {blog.enableComments && (
                <Card className="mb-10">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Comments</h3>
                    
                    {!showCommentForm && comments.length === 0 ? (
                      <div className="text-center p-8">
                        <p className="text-gray-500 mb-4">Be the first to leave a comment on this article!</p>
                        <Button 
                          className="bg-[#006400] hover:bg-[#004d00]"
                          onClick={() => setShowCommentForm(true)}
                        >
                          Leave a Comment
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {/* Comment Form */}
                        {showCommentForm && (
                          <div className="bg-gray-50 p-4 rounded-lg mb-6">
                            <h4 className="font-medium mb-4">Add Your Comment</h4>
                            <form onSubmit={handleSubmitComment} className="space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="name">Name</Label>
                                  <Input 
                                    id="name"
                                    name="name"
                                    value={commentForm.name}
                                    onChange={handleCommentChange}
                                    placeholder="Your name"
                                    required
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="email">Email</Label>
                                  <Input 
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={commentForm.email}
                                    onChange={handleCommentChange}
                                    placeholder="Your email"
                                    required
                                  />
                                  <p className="text-xs text-muted-foreground">Your email won't be published</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="comment">Comment</Label>
                                <Textarea 
                                  id="comment"
                                  name="comment"
                                  value={commentForm.comment}
                                  onChange={handleCommentChange}
                                  placeholder="Write your comment here..."
                                  rows={4}
                                  required
                                />
                              </div>
                              <div className="flex justify-end gap-2">
                                <Button 
                                  type="button" 
                                  variant="outline"
                                  onClick={() => setShowCommentForm(false)}
                                >
                                  Cancel
                                </Button>
                                <Button type="submit" className="bg-[#006400] hover:bg-[#004d00]">
                                  <Send className="h-4 w-4 mr-2" />
                                  Post Comment
                                </Button>
                              </div>
                            </form>
                          </div>
                        )}
                        
                        {/* Comments List */}
                        {comments.length > 0 ? (
                          <div className="space-y-6">
                            {comments.map(comment => (
                              <div key={comment.id} className="border-b pb-6 last:border-0">
                                <div className="flex justify-between items-start">
                                  <div className="flex items-start gap-3">
                                    <Avatar className="h-10 w-10">
                                      <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <h4 className="font-medium">{comment.name}</h4>
                                      <p className="text-xs text-gray-500">{comment.date}</p>
                                    </div>
                                  </div>
                                </div>
                                <p className="mt-3 text-gray-700">{comment.comment}</p>
                                
                                {/* Reply button */}
                                <div className="mt-3">
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="text-[#006400] hover:text-[#004d00]"
                                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                                  >
                                    <Reply className="h-4 w-4 mr-1" />
                                    Reply
                                  </Button>
                                </div>
                                
                                {/* Reply form */}
                                {replyingTo === comment.id && (
                                  <div className="mt-4 ml-12 bg-gray-50 p-4 rounded-lg">
                                    <h5 className="text-sm font-medium mb-3">Reply to {comment.name}</h5>
                                    <form onSubmit={(e) => handleSubmitReply(e, comment.id)} className="space-y-4">
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                          <Label htmlFor={`reply-name-${comment.id}`}>Name</Label>
                                          <Input 
                                            id={`reply-name-${comment.id}`}
                                            name="name"
                                            value={replyForm.name}
                                            onChange={handleReplyChange}
                                            placeholder="Your name"
                                            required
                                          />
                                        </div>
                                        <div className="space-y-2">
                                          <Label htmlFor={`reply-email-${comment.id}`}>Email</Label>
                                          <Input 
                                            id={`reply-email-${comment.id}`}
                                            name="email"
                                            type="email"
                                            value={replyForm.email}
                                            onChange={handleReplyChange}
                                            placeholder="Your email"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="space-y-2">
                                        <Label htmlFor={`reply-comment-${comment.id}`}>Reply</Label>
                                        <Textarea 
                                          id={`reply-comment-${comment.id}`}
                                          name="comment"
                                          value={replyForm.comment}
                                          onChange={handleReplyChange}
                                          placeholder="Write your reply here..."
                                          rows={3}
                                          required
                                        />
                                      </div>
                                      <div className="flex justify-end gap-2">
                                        <Button 
                                          type="button" 
                                          variant="outline"
                                          size="sm"
                                          onClick={() => setReplyingTo(null)}
                                        >
                                          Cancel
                                        </Button>
                                        <Button 
                                          type="submit" 
                                          size="sm"
                                          className="bg-[#006400] hover:bg-[#004d00]"
                                        >
                                          <Send className="h-3 w-3 mr-2" />
                                          Post Reply
                                        </Button>
                                      </div>
                                    </form>
                                  </div>
                                )}
                                
                                {/* Show replies if any */}
                                {comment.replies.length > 0 && (
                                  <div className="mt-4 ml-12 space-y-4">
                                    {comment.replies.map(reply => (
                                      <div key={reply.id} className="bg-gray-50 p-4 rounded-lg">
                                        <div className="flex items-start gap-3">
                                          <Avatar className="h-8 w-8">
                                            <AvatarFallback>{reply.name.charAt(0)}</AvatarFallback>
                                          </Avatar>
                                          <div>
                                            <h5 className="font-medium text-sm">{reply.name}</h5>
                                            <p className="text-xs text-gray-500">{reply.date}</p>
                                            <p className="mt-2 text-sm text-gray-700">{reply.comment}</p>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : null}
                        
                        {/* Leave a comment button (only show if form is not visible) */}
                        {!showCommentForm && comments.length > 0 && (
                          <div className="text-center mt-6">
                            <Button 
                              className="bg-[#006400] hover:bg-[#004d00]"
                              onClick={() => setShowCommentForm(true)}
                            >
                              Leave a Comment
                            </Button>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              <div className="mt-12 pt-6 border-t">
                <Link href="/blogs">
                  <Button variant="outline" className="mr-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Articles
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 bg-white">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">© 2025 Hospital Talks. All rights reserved.</p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
} 