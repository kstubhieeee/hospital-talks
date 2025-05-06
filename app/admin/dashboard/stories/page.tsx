"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  BookOpen, 
  Edit, 
  LogOut, 
  Plus, 
  Search, 
  Trash2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { webStories } from "@/components/WebStoriesSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// Define proper type for Story
interface Story {
  id: number | string;
  title: string;
  excerpt: string;
  image: string;
  content?: string;
}

export default function AdminStories() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [stories, setStories] = useState<Story[]>([...webStories]);

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

  const filteredStories = stories.filter(story => 
    story.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteStory = (id: number | string) => {
    setStories(stories.filter(story => story.id !== id));
    toast({
      title: "Story deleted",
      description: "The story has been deleted successfully."
    });
  };

  if (!isClient) {
    return null; // Avoid hydration mismatch
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">Manage Stories</h1>
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
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Link href="/admin/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h2 className="text-2xl font-bold hidden md:block">Web Stories</h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search stories..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Link href="/admin/dashboard/stories/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Story
              </Button>
            </Link>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          {filteredStories.length === 0 ? (
            <Alert>
              <BookOpen className="h-4 w-4 mr-2" />
              <AlertDescription>
                No stories found. Create your first story by clicking the "Add Story" button.
              </AlertDescription>
            </Alert>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStories.map((story) => (
                <Card key={story.id.toString()} className="overflow-hidden">
                  <div className="relative h-40 w-full">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-1">{story.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{story.excerpt}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Link href={`/admin/dashboard/stories/edit/${story.id}`}>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </Link>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => handleDeleteStory(story.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
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