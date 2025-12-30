import Link from "next/link"
import { Sparkles, ArrowLeft, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Team() {
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
            <Link href="/workshops" className="text-sm font-medium hover:text-primary">
              Workshops
            </Link>
            <Link href="/merit" className="text-sm font-medium hover:text-primary">
              Merit
            </Link>
            <Link href="/impacts" className="text-sm font-medium hover:text-primary">
              Impacts
            </Link>
            <Link href="/team" className="text-sm font-medium text-card">
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
              <h1 className="mb-4 text-4xl font-bold text-chart-1">Research Team</h1>
              <p className="mb-12 text-lg text-muted-foreground">Principal Investigators and Collaborators</p>

              <div className="mb-12 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Dr. Liao</CardTitle>
                    <p className="text-sm text-muted-foreground">Principal Investigator</p>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">Texas Tech University</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Dr. Cheng</CardTitle>
                    <p className="text-sm text-muted-foreground">Principal Investigator</p>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">Clemson University</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Sravani Pati</CardTitle>
                    <p className="text-sm text-muted-foreground">PhD Student</p>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">Clemson University</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 rounded-lg border border-border p-6 bg-gray-50">
                <h3 className="mb-3 text-xl font-semibold text-chart-1">Get Involved</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  We welcome collaboration with faculty, students, and institutions interested in AI agent education for
                  social sciences.
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
