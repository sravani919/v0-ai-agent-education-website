import Link from "next/link"
import { Sparkles, ArrowLeft, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Curriculum() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-chart-1">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
            <Sparkles className="h-5 w-5 bg-card" />
            <span className="text-card">AI Agent EDU</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium hover:text-primary text-card">
              Home
            </Link>
            <Link href="/background" className="text-sm font-medium hover:text-primary text-card">
              Background
            </Link>
            <Link href="/curriculum" className="text-sm font-medium text-card">
              Curriculum
            </Link>
            <Link href="/labs" className="text-sm font-medium hover:text-primary text-card">
              Labs
            </Link>
            <Link href="/workshops" className="text-sm font-medium hover:text-primary text-card">
              Workshops
            </Link>
            <Link href="/merit" className="text-sm font-medium hover:text-primary text-card">
              Merit
            </Link>
            <Link href="/impacts" className="text-sm font-medium hover:text-primary text-card">
              Impacts
            </Link>
            <Link href="/team" className="text-sm font-medium hover:text-primary text-card">
              Team
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-12 bg-primary-foreground">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <div className="mx-auto max-w-4xl">
              <h1 className="mb-4 text-4xl font-bold text-chart-1">Curriculum Development</h1>
              <p className="mb-8 text-lg text-muted-foreground">
                Objective 1: Interdisciplinary AI Agent Curriculum for Social Sciences
              </p>

              <div className="mb-12 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Our curriculum development effort creates comprehensive, adaptable educational modules specifically
                  designed for integration into social science courses. These modules bridge computer science, data
                  analytics, and social science methodology without assuming prior programming experience.
                </p>
              </div>

              <h2 className="mb-6 text-2xl font-semibold text-chart-1">Core Curriculum Modules</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <BookOpen className="h-5 w-5 text-chart-1" />
                    </div>
                    <CardTitle>Module 1: Introduction to AI Agents</CardTitle>
                    <CardDescription>Foundational Concepts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                      <li>What are AI agents and how do they differ from traditional software?</li>
                      <li>Understanding Large Language Models and their capabilities</li>
                      <li>Agent reasoning and decision-making processes</li>
                      <li>Practical applications in social science research</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <BookOpen className="h-5 w-5 text-chart-1" />
                    </div>
                    <CardTitle>Module 2: Social Data Analytics with AI</CardTitle>
                    <CardDescription>Data Collection and Analysis</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                      <li>Using AI agents for social media data collection</li>
                      <li>Automated content analysis and categorization</li>
                      <li>Sentiment analysis and opinion mining</li>
                      <li>Ethical considerations in automated data collection</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <BookOpen className="h-5 w-5 text-chart-1" />
                    </div>
                    <CardTitle>Module 3: AI for Content Moderation</CardTitle>
                    <CardDescription>Detection and Classification</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                      <li>Understanding online abuse and harmful content</li>
                      <li>AI-powered detection systems and their limitations</li>
                      <li>Building and evaluating classification models</li>
                      <li>Bias and fairness in content moderation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <BookOpen className="h-5 w-5 text-chart-1" />
                    </div>
                    <CardTitle>Module 4: Topic Modeling and Analysis</CardTitle>
                    <CardDescription>Discovering Patterns in Text</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                      <li>Introduction to topic modeling techniques</li>
                      <li>Using AI agents for thematic analysis</li>
                      <li>Identifying trends and patterns in large datasets</li>
                      <li>Interpreting and validating model outputs</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <BookOpen className="h-5 w-5 text-chart-1" />
                    </div>
                    <CardTitle>Module 5: Cyberinfrastructure Basics</CardTitle>
                    <CardDescription>Research Computing Essentials</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                      <li>Understanding cloud computing and APIs</li>
                      <li>Data management and security best practices</li>
                      <li>Reproducible research workflows</li>
                      <li>Resource management and cost considerations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <BookOpen className="h-5 w-5 text-chart-1" />
                    </div>
                    <CardTitle>Module 6: Ethics and Responsible AI</CardTitle>
                    <CardDescription>Ethical Research Practices</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                      <li>IRB considerations for AI-assisted research</li>
                      <li>Privacy and data protection in automated analysis</li>
                      <li>Bias, fairness, and transparency in AI systems</li>
                      <li>Responsible use of AI in social science research</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 rounded-lg border border-border p-6 bg-card">
                <h3 className="mb-4 text-xl font-semibold text-chart-1">Curriculum Features</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      ✓
                    </span>
                    <span>
                      <strong>Modular Design:</strong> Each module can be integrated independently into existing courses
                      or combined for comprehensive coverage
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      ✓
                    </span>
                    <span>
                      <strong>Discipline Adaptability:</strong> Content and examples tailored for sociology, psychology,
                      economics, communication, and related fields
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      ✓
                    </span>
                    <span>
                      <strong>Low Technical Barrier:</strong> No programming prerequisites required; focuses on
                      conceptual understanding and practical application
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      ✓
                    </span>
                    <span>
                      <strong>Research Integration:</strong> Modules incorporate real research scenarios and authentic
                      social science questions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      ✓
                    </span>
                    <span>
                      <strong>Open Access:</strong> All materials freely available for adoption and adaptation by
                      educators
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-muted-foreground">© 2025  Educational Project</div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Texas Tech University</span>
              <span>•</span>
              <span>Clemson University</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
