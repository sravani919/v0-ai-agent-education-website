import Link from "next/link"
import { Sparkles, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Background() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-chart-1">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
            <Sparkles className="h-5 w-5 text-background" />
            <span className="text-card">AI Agent EDU</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium hover:text-primary text-card">
              Home
            </Link>
            <Link href="/background" className="text-sm font-medium text-card">
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
        <section className="py-12 bg-primary-foreground">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <div className="mx-auto max-w-4xl">
              <h1 className="mb-8 text-4xl font-bold text-chart-1">Background</h1>

              <div className="space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-chart-1">AI Agents and Large Language Models</h2>
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p>
                      AI agents powered by Large Language Models (LLMs) represent a paradigm shift in computational
                      research tools. Unlike traditional software that follows rigid programmed rules, AI agents can
                      understand natural language instructions, reason about complex problems, and autonomously execute
                      multi-step tasks.
                    </p>
                    <p>
                      These agents can process and analyze vast amounts of textual data, interact with APIs and
                      databases, and perform sophisticated analytical tasks—all through conversational interfaces that
                      dramatically lower the technical barrier to entry for researchers.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-chart-1">AI Agent Infrastructure and Cyberinfrastructure</h2>
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p>
                      Modern AI agent infrastructure encompasses the computational frameworks, cloud services, and
                      development platforms that enable researchers to deploy and utilize LLM-powered tools. This
                      cyberinfrastructure includes:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Cloud-based API services for accessing state-of-the-art language models</li>
                      <li>Agent frameworks that orchestrate complex reasoning and tool use</li>
                      <li>Data pipeline tools for collecting and preprocessing social science data</li>
                      <li>Secure computational environments for handling sensitive research data</li>
                      <li>Version control and reproducibility systems for research workflows</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-chart-1">The Gap in AI Education for SBE Researchers</h2>
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p>
                      Despite the transformative potential of AI agents for social science research, significant
                      barriers prevent widespread adoption:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        <strong>Technical Skills Gap:</strong> Most existing AI and machine learning education assumes
                        programming expertise and computer science backgrounds that many SBE researchers lack.
                      </li>
                      <li>
                        <strong>Discipline-Specific Examples:</strong> General AI courses rarely provide examples
                        relevant to social science research questions, making it difficult for SBE researchers to
                        envision applications.
                      </li>
                      <li>
                        <strong>Infrastructure Access:</strong> Setting up and managing computational infrastructure can
                        be daunting without technical support.
                      </li>
                      <li>
                        <strong>Ethical and Methodological Considerations:</strong> SBE research involves unique ethical
                        considerations and methodological standards that generic AI education doesn't address.
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-chart-1">Our Approach: Accessibility and Integration</h2>
                  <div className="space-y-4 leading-relaxed text-muted-foreground">
                    <p>
                      This project addresses these gaps through a comprehensive educational approach that emphasizes:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        <strong>Low Technical Barriers:</strong> Curriculum and labs designed for researchers without
                        programming backgrounds
                      </li>
                      <li>
                        <strong>Domain-Specific Content:</strong> All examples and exercises drawn from authentic social
                        science research scenarios
                      </li>
                      <li>
                        <strong>Managed Infrastructure:</strong> Pre-configured computational environments that
                        eliminate setup complexity
                      </li>
                      <li>
                        <strong>Interdisciplinary Perspective:</strong> Integration of computer science, social science
                        methodology, and ethical considerations
                      </li>
                      <li>
                        <strong>Community Building:</strong> Workshops and camps that foster peer learning and ongoing
                        collaboration
                      </li>
                    </ul>
                    <p>
                      By democratizing access to AI agent technologies, we aim to empower a new generation of SBE
                      researchers to tackle pressing social challenges with cutting-edge computational tools.
                    </p>
                  </div>
                </section>
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
