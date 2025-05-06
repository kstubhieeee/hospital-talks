"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, LogOut, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { webStories } from "@/components/WebStoriesSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function NewStory() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "/placeholder.svg",
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // In a real app, this would send data to a backend API
    // For this example, we'll just add it to our client-side array and redirect
    
    setTimeout(() => {
      // Add the new story with a new ID
      const newStory = {
        ...formData,
        id: Date.now(), // Use timestamp as a simple unique ID
      };
      
      // In a real application, you would update this in a database
      const updatedStories = [...webStories, newStory];
      
      toast({
        title: "Story created",
        description: "Your story has been saved successfully."
      });
      
      setIsSaving(false);
      router.push("/admin/dashboard/stories");
    }, 1000); // Simulate API delay
  };

  if (!isClient) {
    return null; // Avoid hydration mismatch
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            <h1 className="text-xl font-bold">New Story</h1>
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
          <Link href="/admin/dashboard/stories">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Stories
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
                <CardTitle>Story Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input 
                    id="title" 
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter story title"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea 
                    id="excerpt" 
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    placeholder="Brief summary of the story"
                    rows={3}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="image">Image URL</Label>
                  <Input 
                    id="image" 
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="URL to story image"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter the URL for the story's cover image. Use high-quality images for better appearance.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea 
                    id="content" 
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Full story content"
                    rows={12}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Link href="/admin/dashboard/stories">
                  <Button variant="outline">Cancel</Button>
                </Link>
                <Button type="submit" disabled={isSaving}>
                  {isSaving ? (
                    <>Saving...</>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Story
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