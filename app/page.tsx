"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  ExternalLink,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  Trophy,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto px-4 py-24 gap-12">
        <section className="flex flex-col items-center justify-center text-center px-4 py-12 space-y-6 max-w-4xl mx-auto lg:mx-0 lg:text-left lg:items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Hi, I&apos;m Nidhi
          </h2>
          <p className="max-w-xl text-muted-foreground text-sm sm:text-base">
            I&apos;m a Software Engineer passionate about building elegant,
            efficient digital experiences and solving complex problems through
            innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                View Portfolio
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>

        <div className="flex-1 max-w-md w-full">
          <img
            src="https://NidhiSinchanaSR.github.io/nidhi.github.io/profile.jpeg"
            alt="Nidhi"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Quick Links */}
      <section className="px-4 py-8 max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <Link href="https://github.com/NidhiSinchanaSR" target="_blank">
            <Button variant="outline" size="sm" className="text-xs sm:text-sm">
              <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              GitHub
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/nidhi-sinchana-sr-7809bb223/"
            target="_blank"
          >
            <Button variant="outline" size="sm" className="text-xs sm:text-sm">
              <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              LinkedIn
            </Button>
          </Link>
          <Link href="" target="_blank">
            <Button variant="outline" size="sm" className="text-xs sm:text-sm">
              <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              GeeksForGeeks
            </Button>
          </Link>
          <Link href="" target="_blank">
            <Button variant="outline" size="sm" className="text-xs sm:text-sm">
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              CodeForces
            </Button>
          </Link>
          <Link href="" target="_blank">
            <Button variant="outline" size="sm" className="text-xs sm:text-sm">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              CodeChef
            </Button>
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 space-y-8 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Skills & Technologies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">Programming Languages</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Java</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">C/C++</Badge>
              <Badge variant="secondary">SQL</Badge>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">Frontend & Frameworks</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Express.js</Badge>
              <Badge variant="secondary">Angular</Badge>
              <Badge variant="secondary">HTML/CSS</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">Machine Learning</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary">TensorFlow</Badge>
              <Badge variant="secondary">Scikit-Learn</Badge>
              <Badge variant="secondary">Pandas</Badge>
              <Badge variant="secondary">Numpy</Badge>
              <Badge variant="secondary">OpenCV</Badge>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20 hover:bg-muted/30 cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">DevOps & Cloud</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary">AWS</Badge>
              <Badge variant="secondary">Azure</Badge>
              <Badge variant="secondary">GCP</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">Kubernetes</Badge>
              <Badge variant="secondary">Git</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 space-y-8 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Professional Experience
        </h3>
        <div className="space-y-6">
          <Card className="transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20 hover:bg-muted/30 cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Software Engineer</CardTitle>
                  <CardDescription className="text-base">
                    C5i • Remote
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">
                    Jul 2024 - Present
                  </p>
                </div>
                <Badge variant="default">Current</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>
                  Developed responsive UI using React, MUI, and Tailwind CSS,
                  building interactive dashboards and data visualizations for an
                  AI-powered Augmented analytics solution.
                </li>
                <li>
                  Optimized state management with Redux and ensured seamless API
                  integration with Java, Spring Boot backend.
                </li>
                <li>
                  Integrated seamlessly with cloud platforms (AWS, Azure)
                  ensuring scalability and data security compliance.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20 hover:bg-muted/30 cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Frontend Intern</CardTitle>
                  <CardDescription className="text-base">
                    Param Innovations • Remote
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">
                    Oct 2023 - Jan 2024
                  </p>
                </div>
                <Badge variant="outline">November 2023 - December 2023</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>
                  Contributed to the frontend using React and built a ticketing
                  system in Node.js for website's backend, enhancing its
                  functionality and user experience.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20 hover:bg-muted/30 cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">ML Trainee</CardTitle>
                  <CardDescription className="text-base">
                    Amazon ML School • Remote
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">
                    Sep 2023 - Oct 2023
                  </p>
                </div>
                <Badge variant="outline">September 2023 - October 2023</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>
                  Acquired comprehensive knowledge in deep learning with neural
                  networks (ANN, CNN), K-Nearest Neighbors, linear regression,
                  etc.
                </li>
                <li>
                  Worked on a project to predict the price of a house using
                  linear regression, taxi fair prediction using KNN, and image
                  classification using CNN.
                </li>
                <li>
                  Worked on NLP project for sentiment analysis for the comments
                  on a website, where the test data I found{" "}
                  <a
                    href="https://www.kaggle.com/datasets/yasserh/twitter-tweets-sentiment-dataset"
                    target="_blank"
                  >
                    dataset
                  </a>
                  .
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20 hover:bg-muted/30 cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">
                    Web Developer Intern
                  </CardTitle>
                  <CardDescription className="text-base">
                    Basil Infotech Limited, India • Remote
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">
                    May 2023 - Sept 2023
                  </p>
                </div>
                <Badge variant="outline">May 2023 - September 2023</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>
                  Collaborated in a cross-functional web development team to
                  design and build a user-friendly, feature-rich, secure,
                  scalable financial management system software application.
                </li>
                <li>
                  Utilized a tech stack including HTML5, CSS3, JavaScript for
                  the frontend, Node.js, Express.js framework for the backend,
                  and MongoDB for efficient data storage, integrating REST APIs
                  for real-time financial data retrieval and display.
                </li>
                <li>
                  Worked on CRM workflow to be triggered when new user is added
                  to the system.
                </li>
                <li>
                  Writing the metadata for the website to improve the SEO.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 space-y-8 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-8">Education</h3>
        <div className="space-y-6">
          <Card className="transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20 hover:bg-muted/30 cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">
                    B.Tech in Computer Science
                  </CardTitle>
                  <CardDescription className="text-base">
                    IIT Bhilai • Raipur, Chhattisgarh, India
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">2020 - 2024</p>
                </div>
                <Badge variant="outline">Degree</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>
                  Focused on Computer Science fundamentals, software
                  development, and data structures & algorithms.
                </li>
                <li>
                  Participated in coding competitions and technical workshops
                  enhancing practical problem-solving skills.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20 hover:bg-muted/30 cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Intermediate</CardTitle>
                  <CardDescription className="text-base">
                    Sri Chaitanya College • Bangalore, Karnataka, India
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">2018 - 2020</p>
                </div>
                <Badge variant="outline">Certificate</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>
                  Completed coursework in Mathematics, Physics, and Chemistry
                  with emphasis on competitive exam preparation.
                </li>
                <li>
                  Built a solid foundation for technical education in
                  engineering and computer science fields.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20 hover:bg-muted/30 cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">High School</CardTitle>
                  <CardDescription className="text-base">
                    Sri Chaitanya Techno School • Bangalore, Karnataka, India
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">2016 - 2018</p>
                </div>
                <Badge variant="outline">Certificate</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>
                  Completed secondary education with focus on Science and
                  Mathematics.
                </li>
                <li>
                  Engaged in extracurricular activities including academic
                  competitions and workshops.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 space-y-8 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Recent Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20 hover:bg-muted/30 cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">BUY-SELL</CardTitle>
                <Link
                  href="https://github.com/yourusername/buy-sell"
                  target="_blank"
                >
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Developed a marketplace platform for students to buy and sell
                items within the college. Utilized React for the frontend and
                Node.js for the backend, ensuring a seamless user experience.
                Integrated JWT authentication for secure login and sessions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">JWT</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20 hover:bg-muted/30 cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">
                  IIT BHILAI CODING DISCUSSION
                </CardTitle>
                <Link
                  href="https://github.com/yourusername/coding-discussion"
                  target="_blank"
                >
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Developed a coding discussion platform for IIT Bhilai community,
                facilitating collaborative learning and knowledge sharing among
                students, faculty, and alumni. Created a space for asking
                questions, seeking help, and sharing expertise to enhance coding
                skills and foster a culture of collaboration.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React.js</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">Express.js</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 space-y-8 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Achievements & Rankings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20 hover:bg-muted/30 cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Competitive Programming
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Codeforces Rating</span>
                <Badge variant="default">1240</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">CodeChef Rating</span>
                <Badge variant="default">4★</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Google Kickstart</span>
                <Badge variant="outline">Global Rank 1631</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20 hover:bg-muted/30 cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-500" />
                Other Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  • Model at Dharya Designer Studio
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  • Minimum global rank of 3470 on Codeforces
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  • Minimum global rank of 809 in Division 2 on CodeChef
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certificate Courses */}
      <section className="py-16 px-4 space-y-8 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Certificate Courses
        </h3>
        <div className="space-y-4">
          <Card className="transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20 hover:bg-muted/30 cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">
                    Machine Learning and Data Science
                  </CardTitle>
                  <CardDescription>Udemy</CardDescription>
                </div>
                <Link href="#" target="_blank">
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
          </Card>

          <Card className="transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20 hover:bg-muted/30 cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Power BI</CardTitle>
                  <CardDescription>TechTip24</CardDescription>
                </div>
                <Link href="#" target="_blank">
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="mt-auto py-8 px-4 bg-muted/20 border-t border-border text-center">
        <h4 className="text-lg font-semibold mb-2">Let&apos;s Connect</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Feel free to reach out via email at{" "}
          <a
            href="mailto:nidhi.sinchana.sr@gmail.com"
            className="text-primary underline"
          >
            nidhi.sinchana.sr@gmail.com
          </a>{" "}
          or find me on social media.
        </p>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Nidhi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
