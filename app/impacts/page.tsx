import Link from "next/link"
import { Sparkles, ArrowLeft, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Impacts() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-chart-1 text-card">
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
            <Link href="/impacts" className="text-sm font-medium text-card">
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
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h1 className="mb-2 text-4xl font-bold text-chart-1">Broader Impacts</h1>
                  <p className="text-lg text-muted-foreground">Expanding Access and Building Community</p>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-chart-1">Broadening Participation in Computing</h2>
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p>
                      This project is deeply committed to expanding participation in computational research among
                      underrepresented groups. Through strategic partnerships and targeted activities, we address
                      systemic barriers that prevent diverse scholars from accessing cutting-edge computational methods.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-chart-1">Institutional Partnerships</h2>
                  <div className="space-y-6">
                    <div className="rounded-lg border border-border p-6">
                      <h3 className="mb-3 text-xl font-semibold text-chart-1">Texas Tech University</h3>
                      <div className="space-y-3 text-muted-foreground">
                        <p>
                          Texas Tech University, located in Lubbock, serves as a major research institution with strong
                          programs in social sciences and a commitment to serving diverse student populations in West
                          Texas and beyond. The university provides:
                        </p>
                        <ul className="list-disc space-y-1 pl-6">
                          <li>Research infrastructure and computational facilities</li>
                          <li>Faculty expertise in online behavior analysis and computational social science</li>
                          <li>Connections to regional institutions, including Hispanic-Serving Institutions</li>
                          <li>Experience with NSF educational programs and broadening participation initiatives</li>
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-lg border border-border p-6">
                      <h3 className="mb-3 text-xl font-semibold text-chart-1">Clemson University</h3>
                      <div className="space-y-3 text-muted-foreground">
                        <p>
                          Clemson University brings complementary strengths in human-centered computing, cybersecurity
                          education, and engagement with the Southeastern research community. Clemson contributes:
                        </p>
                        <ul className="list-disc space-y-1 pl-6">
                          <li>Leadership in security and privacy education</li>
                          <li>Established relationships with MSIs in the Southeast</li>
                          <li>Expertise in curriculum development and educational assessment</li>
                          <li>Infrastructure for hosting summer programs and workshops</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>


                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-chart-1">Open Access and Sustainability</h2>
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p>
                      All project materials are developed as open educational resources, ensuring long-term impact
                      beyond the funded period:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        <strong>Freely Available Curriculum:</strong> All modules, slides, and teaching materials
                        released under Creative Commons licenses
                      </li>
                      <li>
                        <strong>Open Laboratory Platform:</strong> Cloud-based labs accessible to any institution or
                        individual researcher
                      </li>
                      <li>
                        <strong>Reusable Infrastructure:</strong> Documentation and code for deploying similar platforms
                        at other institutions
                      </li>
                      <li>
                        <strong>Community Contributions:</strong> Mechanisms for educators to share adaptations and
                        contribute improvements
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-chart-1">Workforce Development</h2>
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p>
                      By training SBE researchers in AI agent technologies, the project addresses critical workforce
                      needs:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Prepares students for careers in data science, policy analysis, tech industry research, and
                        academia
                      </li>
                      <li>
                        Develops faculty capacity to teach computational methods, creating multiplier effects as trained
                        educators reach their own students
                      </li>
                      <li>
                        Fosters interdisciplinary collaborations between social scientists and computer scientists
                      </li>
                      <li>
                        Builds a network of computationally-skilled social scientists who can address pressing societal
                        challenges
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-chart-1">Societal Benefits</h2>
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p>Empowering social scientists with AI agent capabilities has direct societal benefits:</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Enhanced capacity to study and address online harms, including abuse, misinformation, and
                        extremism
                      </li>
                      <li>Improved understanding of social dynamics through large-scale data analysis</li>
                      <li>Evidence-based policy recommendations grounded in computational analysis</li>
                      <li>Ethical frameworks for responsible use of AI in social research contexts</li>
                    </ul>
                  </div>
                </section>

                <div className="mt-12 rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-chart-1">Measuring Impact</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    The project employs comprehensive evaluation to assess broader impacts, tracking participant
                    demographics, subsequent curriculum adoption at home institutions, publications and research
                    projects resulting from training, and long-term career trajectories. These data inform continuous
                    improvement and demonstrate accountability to funding agencies and stakeholders.
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
