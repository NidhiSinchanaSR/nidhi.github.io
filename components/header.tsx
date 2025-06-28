"use client";

import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <header className="flex justify-between items-center p-4 border-b border-border">
      <h1 className="">
        {pathname === "/" ? (
          <button
            onClick={() => handleNavigation("/")}
            className="flex-grow text-center text-xl font-bold flex items-center gap-2"
          >
            <span>👋</span> Hi! Welcome to my website
          </button>
        ) : (
          <span></span>
        )}
      </h1>

      <nav className="flex items-center gap-6">
        <button
          onClick={() => handleNavigation("/about")}
          className="hover:text-primary transition"
        >
          About
        </button>
        <button
          onClick={() => handleNavigation("/resume")}
          className="hover:text-primary transition"
        >
          Resume
        </button>
        <button
          onClick={() => handleNavigation("/portfolio")}
          className="hover:text-primary transition"
        >
          Portfolio
        </button>
        <button
          onClick={() => handleNavigation("/blog")}
          className="hover:text-primary transition"
        >
          Blog
        </button>
        <button
          onClick={() => handleNavigation("/contact")}
          className="hover:text-primary transition"
        >
          Contact
        </button>
        <button
          onClick={() => handleNavigation("/")}
          className="hover:text-primary transition"
        >
          Profile
        </button>
        <ModeToggle />
      </nav>
    </header>
  );
}
