import Link from "next/link"
import { Sparkles, ArrowLeft, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Workshops() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border text-card bg-chart-1">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
            <Sparkles className="h-5 w-5" />
            <span>AI Agent EDU</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/background" className="text-sm font-medium hover:text-primary">
              Background
            </Link>
            <Link href="/curriculum" className="text-sm font-medium hover:text-primary">
              Curriculum
            </Link>
            <Link href="/labs" className="text-sm font-medium hover:text-primary">
              Labs
            </Link>
            <Link href="/workshops" className="text-sm font-medium text-card">
              Workshops
            </Link>
            <Link href="/merit" className="text-sm font-medium hover:text-primary">
              Merit
            </Link>
            <Link href="/impacts" className="text-sm font-medium hover:text-primary">
              Impacts
            </Link>
            <Link href="/team" className="text-sm font-medium hover:text-primary">
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
              <h1 className="mb-4 text-4xl font-bold text-chart-1">Summer Camps & Workshops</h1>
              <p className="mb-8 text-lg text-chart-1">Objective 3: Community Building and Training Programs</p>

              <div className="mb-12 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Our summer programs bring together faculty and students from diverse institutions to build community,
                  share best practices, and develop expertise in AI agent technologies for social science research.
                  These intensive programs emphasize hands-on learning, collaboration, and broadening participation in
                  computational social science.
                </p>
              </div>

              <div className="mb-12 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader className="bg-muted/30">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Users className="h-5 w-5 text-chart-1" />
                    </div>
                    <CardTitle>Faculty Development Workshops</CardTitle>
                    <CardDescription>Training Educators in AI Agent Pedagogy</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Multi-day intensive workshops for faculty from SBE departments, focusing on:
                      </p>
                      <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                        <li>Understanding AI agent capabilities and limitations</li>
                        <li>Integrating curriculum modules into existing courses</li>
                        <li>Facilitating hands-on laboratory sessions</li>
                        <li>Addressing ethical considerations in AI education</li>
                        <li>Building collaborative teaching networks</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-muted/30">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Calendar className="h-5 w-5 text-chart-1" />
                    </div>
                    <CardTitle>Student Summer Camps</CardTitle>
                    <CardDescription>Immersive Learning Experiences</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Two-week residential programs for undergraduate and graduate students, featuring:
                      </p>
                      <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                        <li>Intensive hands-on laboratory work with AI agents</li>
                        <li>Guest lectures from researchers and industry experts</li>
                        <li>Team-based research projects</li>
                        <li>Career pathways in computational social science</li>
                        <li>Networking and mentorship opportunities</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="mb-6 text-2xl font-semibold text-chart-1">Program Structure</h2>

              <div className="space-y-6">
                <div className="rounded-lg border border-border p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      1
                    </span>
                    Faculty Workshop (5 days)
                  </h3>
                  <div className="ml-10 space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong>Day 1-2:</strong> Foundations of AI agents and LLMs, hands-on exploration of agent
                      capabilities
                    </p>
                    <p>
                      <strong>Day 3:</strong> Curriculum module overview and pedagogical strategies for teaching AI in
                      social sciences
                    </p>
                    <p>
                      <strong>Day 4:</strong> Laboratory infrastructure training and facilitating hands-on exercises
                    </p>
                    <p>
                      <strong>Day 5:</strong> Course integration planning, assessment strategies, and community building
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-border p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      2
                    </span>
                    Student Summer Camp (10 days)
                  </h3>
                  <div className="ml-10 space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong>Week 1:</strong> Foundational concepts, guided laboratories in data collection, content
                      analysis, and topic modeling
                    </p>
                    <p>
                      <strong>Week 2:</strong> Team research projects applying AI agents to student-defined social
                      science questions, culminating in final presentations
                    </p>
                    <p>
                      <strong>Throughout:</strong> Guest speakers, career panels, ethics discussions, and social
                      activities
                    </p>
                  </div>
                </div>
              </div>


              <div className="mt-12 rounded-lg border-2 border-primary/20 p-6 bg-card">
                <h3 className="mb-3 text-xl font-semibold text-chart-1">Locations and Dates</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Workshops and camps are hosted alternately at Texas Tech University (Lubbock, TX) and Clemson
                    University (Clemson, SC), typically during summer months. Exact dates and application information
                    will be announced annually.
                  </p>
                  <p className="text-sm">
                    <strong>For information about upcoming programs, please contact the project team.</strong>
                  </p>
                </div>
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
