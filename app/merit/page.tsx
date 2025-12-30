import Link from "next/link"
import { Sparkles, ArrowLeft, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Merit() {
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
            <Link href="/merit" className="text-sm font-medium text-card">
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
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-chart-1" />
                </div>
                <div>
                  <h1 className="mb-2 text-4xl font-bold text-chart-1">Intellectual Merit</h1>
                  <p className="text-lg text-muted-foreground">Educational Innovation and Research Integration</p>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-chart-1">Platform-Based Learning Innovation</h2>
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p>
                      This project represents a significant educational innovation by developing the first
                      comprehensive, platform-based curriculum specifically designed to teach AI agent technologies to
                      Social, Behavioral, and Economic Sciences researchers. Unlike generic AI education programs, our
                      approach:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Grounds all instruction in authentic social science research scenarios and methodologies</li>
                      <li>
                        Eliminates traditional technical barriers through managed cloud infrastructure and natural
                        language interfaces
                      </li>
                      <li>
                        Integrates ethical considerations and methodological rigor specific to SBE research contexts
                      </li>
                      <li>
                        Provides scalable, reusable educational materials adaptable across diverse institutions and
                        courses
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-chart-1">Advancing Computational Social Science Pedagogy</h2>
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p>
                      The project makes important contributions to understanding how to effectively teach computational
                      methods in social science contexts:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        <strong>Interdisciplinary Curriculum Design:</strong> Develops and evaluates pedagogical
                        approaches that bridge computer science, statistics, and social science epistemologies
                      </li>
                      <li>
                        <strong>Accessibility Research:</strong> Investigates how natural language interfaces and
                        managed infrastructure affect learning outcomes for students without programming backgrounds
                      </li>
                      <li>
                        <strong>Assessment Frameworks:</strong> Creates evaluation methods for measuring computational
                        literacy in social science contexts
                      </li>
                      <li>
                        <strong>Curriculum Transferability:</strong> Documents best practices for adapting AI education
                        across different social science disciplines and institutional contexts
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-chart-1">Integration of Research and Education</h2>
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p>
                      The project deeply integrates ongoing research in AI-based online abuse detection, social media
                      analytics, and natural language processing with educational objectives:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Laboratory exercises draw directly from the PIs' active research programs, exposing students to
                        current methodological challenges and solutions
                      </li>
                      <li>
                        Student projects contribute to understanding AI agent capabilities and limitations in real
                        social science applications
                      </li>
                      <li>
                        Faculty workshops disseminate research findings while simultaneously collecting feedback that
                        informs future research directions
                      </li>
                      <li>
                        The project generates empirical data about AI agent usage patterns and effectiveness in social
                        science contexts
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-chart-1">Cyberinfrastructure for Education</h2>
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p>
                      The development of educational cyberinfrastructure represents an intellectual contribution in its
                      own right:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Architectural patterns for deploying LLM-based educational platforms at scale</li>
                      <li>
                        Security and privacy frameworks for handling sensitive research data in educational contexts
                      </li>
                      <li>Strategies for managing computational costs while providing equitable access</li>
                      <li>Reproducibility mechanisms that balance educational goals with research rigor</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-chart-1">Advancing AI Ethics Education</h2>
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p>The project contributes to the growing field of responsible AI education by:</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Developing discipline-specific ethical frameworks for AI use in social science research</li>
                      <li>
                        Creating pedagogical materials that integrate ethical reasoning with technical instruction
                      </li>
                      <li>
                        Examining how different stakeholder perspectives (researchers, participants, platforms)
                        influence ethical decision-making in AI-assisted research
                      </li>
                      <li>
                        Documenting best practices for teaching responsible AI use across diverse student populations
                      </li>
                    </ul>
                  </div>
                </section>

                <div className="mt-12 rounded-lg border border-border bg-muted/30 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-chart-1">Dissemination and Impact</h3>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    Research findings and educational innovations from this project will be disseminated through:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        Peer-reviewed publications in computational social science and educational technology venues
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-primary">•</span>
                      <span>Open-access curriculum materials and laboratory platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-primary">•</span>
                      <span>Conference presentations and workshops at disciplinary meetings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        Online documentation and teaching resources available to the global research community
                      </span>
                    </li>
                  </ul>
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
