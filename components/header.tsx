"use client";

import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  const navItems = [
    { path: "/about", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
    { path: "/", label: "Profile" },
  ];

  return (
    <header className="flex justify-between items-center p-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      {/* Logo/Brand */}
      <div className="flex items-center">
        {pathname === "/" ? (
          <button
            onClick={() => handleNavigation("/")}
            className="text-xl font-bold flex items-center gap-2 hover:text-primary transition-colors"
          >
            <span>👋</span>
            <span className="hidden sm:inline">Hi! Welcome to my website</span>
            <span className="sm:hidden">Nidhi</span>
          </button>
        ) : (
          <button
            onClick={() => handleNavigation("/")}
            className="text-xl font-bold hover:text-primary transition-colors"
          >
            Nidhi
          </button>
        )}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            className={`hover:text-primary transition-colors ${
              pathname === item.path ? "text-primary font-medium" : ""
            }`}
          >
            {item.label}
          </button>
        ))}
        <ModeToggle />
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-2">
        <ModeToggle />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`text-left text-lg py-2 px-4 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors ${
                    pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
