"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, LogOut, Save, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { structuredBlogArticles, Blog, BlogSection, defaultAuthor } from "@/lib/blog-data";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function EditBlog() {
  const router = useRouter();
  const params = useParams();
  const blogId = params?.id as string;
  
  const [isClient, setIsClient] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [blogNotFound, setBlogNotFound] = useState(false);
  const [formData, setFormData] = useState<Blog>({
    id: "",
    title: "",
    excerpt: "",
    featuredImage: "/placeholder.svg",
    sections: [
      { id: "section-1", headline: "", paragraph: "" },
    ],
    date: "",
    readTime: "",
    author: {
      name: "",
      bio: "",
      avatar: "/placeholder-avatar.svg",
    },
    enableComments: true,
    enableSocialSharing: true,
  });

  useEffect(() => {
    setIsClient(true);
    
    if (!blogId) {
      setBlogNotFound(true);
      return;
    }
    
    // Find the blog by ID
    const blog = structuredBlogArticles.find(blog => 
      blog.id.toString() === blogId.toString()
    );
    
    if (blog) {
      setFormData(blog);
    } else {
      setBlogNotFound(true);
      toast({
        title: "Blog not found",
        description: "The blog article you're trying to edit does not exist.",
        variant: "destructive"
      });
    }
  }, [blogId]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out."
    });
    router.push("/admin");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      author: {
        ...prev.author,
        [name]: value
      }
    }));
  };

  const handleSectionChange = (id: string, field: keyof BlogSection, value: string) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.map(section => 
        section.id === id ? { ...section, [field]: value } : section
      )
    }));
  };

  const handleAddSection = () => {
    const newSection: BlogSection = {
      id: `section-${formData.sections.length + 1}`,
      headline: "",
      paragraph: "",
    };
    
    setFormData(prev => ({
      ...prev,
      sections: [...prev.sections, newSection]
    }));
  };

  const handleRemoveSection = (id: string) => {
    if (formData.sections.length <= 1) {
      toast({
        title: "Cannot remove",
        description: "You need at least one content section.",
        variant: "destructive"
      });
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.filter(section => section.id !== id)
    }));
  };

  const handleToggleChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // In a real app, this would send data to a backend API
    // For this example, we'll just simulate updating the blog
    
    setTimeout(() => {
      // In a real application, you would update this in a database
      // Here we're just simulating an update
      
      toast({
        title: "Blog updated",
        description: "Your blog article has been updated successfully."
      });
      
      setIsSaving(false);
      router.push("/admin/dashboard/blogs");
    }, 1000); // Simulate API delay
  };

  if (!isClient) {
    return null; // Avoid hydration mismatch
  }

  if (blogNotFound) {
    return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 border-b bg-background">
          <div className="container flex h-16 items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              <h1 className="text-xl font-bold">Edit Blog Article</h1>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleLogout}
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </header>
        
        <main className="flex-1 p-6 container">
          <div className="mb-6">
            <Link href="/admin/dashboard/blogs">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blogs
              </Button>
            </Link>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6 text-center">
              <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-bold mb-2">Blog Article Not Found</h2>
              <p className="text-muted-foreground mb-4">
                The blog article you're trying to edit does not exist or has been deleted.
              </p>
              <Link href="/admin/dashboard/blogs">
                <Button>Go Back to Blogs</Button>
              </Link>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <h1 className="text-xl font-bold">Edit Blog Article</h1>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleLogout}
            title="Logout"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </header>
      
      <main className="flex-1 p-6 container">
        <div className="mb-6">
          <Link href="/admin/dashboard/blogs">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <form onSubmit={handleSubmit}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Edit Blog Structure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Title (Heading 1) */}
                <div className="space-y-2">
                  <Label htmlFor="title">Title (Heading 1)</Label>
                  <Input 
                    id="title" 
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter blog title"
                    required
                  />
                </div>
                
                {/* Excerpt/Summary */}
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt/Summary</Label>
                  <Textarea 
                    id="excerpt" 
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    placeholder="Brief summary of the article"
                    rows={2}
                    required
                  />
                </div>
                
                {/* Featured Image */}
                <div className="space-y-2">
                  <Label htmlFor="featuredImage">Featured Image URL</Label>
                  <Input 
                    id="featuredImage" 
                    name="featuredImage"
                    value={formData.featuredImage}
                    onChange={handleInputChange}
                    placeholder="URL to main article image"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    This is the main image displayed at the top of your blog post.
                  </p>
                </div>

                <Separator className="my-4" />
                
                {/* Content Sections */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Label className="text-lg font-semibold">Content Sections</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm" 
                      onClick={handleAddSection}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Section
                    </Button>
                  </div>
                  
                  {formData.sections.map((section, index) => (
                    <Card key={section.id} className="border border-muted p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-medium">Section {index + 1}</h3>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveSection(section.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor={`headline-${section.id}`}>
                            Headline {index === 0 ? '(H2)' : '(H3)'}
                          </Label>
                          <Input
                            id={`headline-${section.id}`}
                            value={section.headline}
                            onChange={(e) => handleSectionChange(section.id, 'headline', e.target.value)}
                            placeholder={`Enter headline for section ${index + 1}`}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor={`image-${section.id}`}>Image URL (Optional)</Label>
                          <Input
                            id={`image-${section.id}`}
                            value={section.image || ""}
                            onChange={(e) => handleSectionChange(section.id, 'image', e.target.value)}
                            placeholder="Enter image URL (optional)"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor={`paragraph-${section.id}`}>Paragraph</Label>
                          <Textarea
                            id={`paragraph-${section.id}`}
                            value={section.paragraph}
                            onChange={(e) => handleSectionChange(section.id, 'paragraph', e.target.value)}
                            placeholder="Enter paragraph content"
                            rows={4}
                            required
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Separator className="my-4" />
                
                {/* Author Information */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Author Box</Label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="author-name">Author Name</Label>
                      <Input
                        id="author-name"
                        name="name"
                        value={formData.author.name}
                        onChange={handleAuthorChange}
                        placeholder="Enter author name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="author-avatar">Author Avatar URL</Label>
                      <Input
                        id="author-avatar"
                        name="avatar"
                        value={formData.author.avatar}
                        onChange={handleAuthorChange}
                        placeholder="Enter author avatar URL"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="author-bio">About Author</Label>
                    <Textarea
                      id="author-bio"
                      name="bio"
                      value={formData.author.bio}
                      onChange={handleAuthorChange}
                      placeholder="Enter author bio"
                      rows={3}
                      required
                    />
                  </div>
                </div>

                <Separator className="my-4" />
                
                {/* Publication Details */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Publication Details</Label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Publication Date</Label>
                      <Input 
                        id="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        placeholder="Publication date"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="readTime">Read Time</Label>
                      <Input 
                        id="readTime" 
                        name="readTime"
                        value={formData.readTime}
                        onChange={handleInputChange}
                        placeholder="e.g. 5 min read"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                {/* Blog Features */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Blog Features</Label>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enableComments">Enable Comments</Label>
                      <p className="text-xs text-muted-foreground">
                        Allow readers to comment on this blog post
                      </p>
                    </div>
                    <Switch
                      id="enableComments"
                      checked={formData.enableComments}
                      onCheckedChange={(checked) => handleToggleChange('enableComments', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="enableSocialSharing">Enable Social Sharing</Label>
                      <p className="text-xs text-muted-foreground">
                        Display social media sharing buttons
                      </p>
                    </div>
                    <Switch
                      id="enableSocialSharing"
                      checked={formData.enableSocialSharing}
                      onCheckedChange={(checked) => handleToggleChange('enableSocialSharing', checked)}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Link href="/admin/dashboard/blogs">
                  <Button variant="outline">Cancel</Button>
                </Link>
                <Button type="submit" disabled={isSaving}>
                  {isSaving ? (
                    <>Saving...</>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Update Article
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </motion.div>
      </main>
      
      <footer className="border-t py-6 bg-background">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">© 2025 Hospital Talks Admin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 