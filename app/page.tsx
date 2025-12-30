import Link from "next/link"
import { BookOpen, Laptop, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-orange-600">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
            <Sparkles className="h-5 w-5 text-card" />
            <span className="text-card">AI Agent EDU</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium hover:text-primary text-card">
              Home
            </Link>
            <Link href="/background" className="text-sm font-medium hover:text-primary text-card">
              Background
            </Link>
            <Link href="/curriculum" className="text-sm font-medium hover:text-primary text-card">
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
        {/* Hero Section */}
        <section className="border-b border-border py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl text-chart-1">
                AI Agent Education for Social, Behavioral, and Economic Sciences
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-sidebar-accent-foreground">
                An educational project focused on lowering the barrier for SBE researchers to leverage AI agents powered by Large Language Models for advancing social science research.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button className="text-sidebar bg-chart-1" asChild size="lg">
                  <Link href="/background">Learn More</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/labs">View Labs</Link>
                </Button>
              </div>
              <div className="mt-8 text-sm text-muted-foreground">
                Partner Institutions: <span className="font-medium">Texas Tech University</span> •{" "}
                <span className="font-medium">Clemson University</span>
              </div>
            </div>
          </div>
        </section>

        {/* Project Objectives */}
        <section className="py-16 text-card bg-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Project Objectives</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="h-6 w-6 text-chart-1" />
                  </div>
                  <CardTitle>Objective 1: Curriculum Development</CardTitle>
                  <CardDescription>Interdisciplinary Modules</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    Develop comprehensive curriculum modules adaptable to social science courses, covering agent
                    reasoning, social data analytics, and cyberinfrastructure concepts.
                  </p>
                  <Button asChild variant="link" className="mt-4 px-0 text-chart-1">
                    <Link href="/curriculum">Learn more →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Laptop className="h-6 w-6 text-chart-1" />
                  </div>
                  <CardTitle>Objective 2: Hands-on Labs</CardTitle>
                  <CardDescription>Interactive Learning Exercises</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    Create guided exercises with low technical barriers covering AI agents for social media data
                    collection, online abuse detection, and topic modeling analysis.
                  </p>
                  <Button asChild variant="link" className="mt-4 px-0 text-chart-1">
                    <Link href="/labs">View labs →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-chart-1" />
                  </div>
                  <CardTitle>Objective 3: Summer Programs</CardTitle>
                  <CardDescription>Workshops and Student Camps</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    Faculty workshops and student summer camps focused on broadening participation and training SBE
                    researchers in AI agent technologies.
                  </p>
                  <Button asChild variant="link" className="mt-4 px-0 text-chart-1">
                    <Link href="/workshops">Learn more →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Impact Areas */}
        <section className="border-t border-border py-16 text-chart-1 bg-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-3xl font-bold">Educational Innovation and Impact</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-3 text-xl font-semibold">Intellectual Merit</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Platform-based hands-on AI agent learning that integrates research and education, providing
                    innovative approaches to teaching AI technologies in social science contexts.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-3 text-xl font-semibold">Broader Impacts</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Focus on inclusion through partnerships with MSIs and EPSCoR states, providing open-access labs and
                    reusable educational materials for the wider research community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Motivation */}
        <section className="py-16 bg-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-chart-1">Motivation</h2>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Large Language Models (LLMs) and AI agents are transforming how researchers approach complex social,
                  behavioral, and economic problems. However, significant barriers prevent many SBE researchers from
                  leveraging these powerful technologies.
                </p>
                <p>
                  This project addresses the critical need for accessible, discipline-specific education in AI agent
                  technologies, empowering SBE researchers to incorporate cutting-edge computational methods into their
                  work without requiring extensive technical backgrounds.
                </p>
                <p>
                  Through carefully designed curriculum, hands-on laboratories, and community-building activities, we
                  aim to democratize access to AI agent infrastructure and foster the next generation of
                  computationally-skilled social scientists.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-muted-foreground">© 2025 Educational Project</div>
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
