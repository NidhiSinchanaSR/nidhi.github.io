"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center p-4 border-b border-border">
        <h1 className="text-xl font-bold">Nidhi</h1>
        <nav className="flex items-center gap-6">
          <Link href="/about" className="hover:text-primary transition">
            About
          </Link>
          <Link href="/resume" className="hover:text-primary transition">
            Resume
          </Link>
          <Link href="/portfolio" className="hover:text-primary transition">
            Portfolio
          </Link>
          <Link href="/blog" className="hover:text-primary transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-primary transition">
            Contact
          </Link>
          <ModeToggle />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 space-y-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m Your Name.
        </h2>
        <p className="max-w-xl text-muted-foreground">
          I&apos;m a software developer / designer / engineer passionate about building elegant, efficient digital experiences.
        </p>
        <div className="flex gap-4 mt-6">
          <Link href="/portfolio">
            <Button size="lg">View Portfolio</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">Get in Touch</Button>
          </Link>
        </div>
      </section>

      {/* About Summary */}
      <section className="bg-muted/10 py-16 px-4 space-y-8 text-center max-w-4xl mx-auto rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-muted-foreground">
          I specialize in creating modern web applications and interactive user interfaces using the latest technologies. When I&apos;m not coding, I enjoy photography, hiking, and exploring new places.
        </p>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-16 px-4 space-y-8 text-center max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Portfolio Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["Project One", "A full-stack web app with real-time data visualization."],
            ["Project Two", "An open-source library for UI components."],
            ["Project Three", "A mobile app to improve productivity and workflow."],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="p-6 border border-border rounded-2xl shadow-sm hover:shadow-md transition-all bg-card"
            >
              <h4 className="font-medium text-lg">{title}</h4>
              <p className="text-muted-foreground text-sm mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="mt-auto py-8 px-4 bg-muted/20 border-t border-border text-center">
        <h4 className="text-lg font-semibold mb-2">Let&apos;s Connect</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Feel free to reach out via email at <a href="mailto:your.email@example.com" className="text-primary underline">your.email@example.com</a> or find me on social media.
        </p>
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </main>
  );
}
