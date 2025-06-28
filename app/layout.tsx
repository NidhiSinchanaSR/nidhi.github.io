import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nidhi - Software Engineer Portfolio",
  description: "Software Engineer passionate about building elegant, efficient digital experiences and solving complex problems through innovative technology solutions.",
  keywords: ["Software Engineer", "React", "Node.js", "Machine Learning", "Portfolio", "Web Development"],
  authors: [{ name: "Nidhi" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Nidhi - Software Engineer Portfolio",
    description: "Software Engineer passionate about building elegant, efficient digital experiences",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidhi - Software Engineer Portfolio",
    description: "Software Engineer passionate about building elegant, efficient digital experiences",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
