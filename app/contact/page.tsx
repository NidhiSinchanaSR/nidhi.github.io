"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-4xl font-bold">Let&apos;s Connect</h1>
      <p className="text-muted-foreground text-lg">
        Feel free to reach out via email or connect with me on social media.
      </p>

      <a
        href="mailto:nsinchana@gmail.com"
        className="text-primary underline text-lg"
      >
        nsinchanasr@gmail.com 
      </a>

      <div className="flex gap-4 mt-6 flex-wrap justify-center">
        <Link href="https://github.com/NidhiSinchanaSR" target="_blank">
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/nidhi-sinchana-sr-7809bb223/"
          target="_blank"
        >
          <Button variant="outline">
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
        </Link>
        <Link href="#" target="_blank">
          <Button variant="outline">
            <Twitter className="w-4 h-4 mr-2" />
            Twitter
          </Button>
        </Link>
        <Link href="#" target="_blank">
          <Button variant="outline">
            <Instagram className="w-4 h-4 mr-2" />
            Instagram
          </Button>
        </Link>
      </div>
    </main>
  );
}
