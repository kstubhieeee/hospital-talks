"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  FileText, 
  LayoutDashboard, 
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AdminDashboard() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

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

  if (!isClient) {
    return null; // Avoid hydration mismatch
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">Welcome, Admin</h2>
          <p className="text-muted-foreground">
            Manage your website content from this dashboard.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
         
          
          <motion.div variants={staggerItem}>
            <Link href="/admin/dashboard/stories" className="block h-full">
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="pb-3">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Manage Stories</CardTitle>
                  <CardDescription>Add or edit web stories</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Create, edit, or delete web stories displayed on your website.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
          
          <motion.div variants={staggerItem}>
            <Link href="/admin/dashboard/blogs" className="block h-full">
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="pb-3">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                    <FileText className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Manage Blogs</CardTitle>
                  <CardDescription>Add or edit blog articles</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Create, edit, or delete blog articles displayed on your website.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
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