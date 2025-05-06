"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication status from localStorage
    const checkAuth = () => {
      const auth = localStorage.getItem("adminAuthenticated");
      return auth === "true";
    };

    const isAuth = checkAuth();
    setIsAuthenticated(isAuth);
    setIsLoading(false);

    // Redirect if not authenticated and not on login page
    if (!isAuth && pathname !== "/admin") {
      router.push("/admin");
    }

    // Redirect if authenticated and on login page
    if (isAuth && pathname === "/admin") {
      router.push("/admin/dashboard");
    }
  }, [pathname, router]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  // Show login page or protected content
  return (
    <>
      {children}
      <Toaster />
    </>
  );
} 