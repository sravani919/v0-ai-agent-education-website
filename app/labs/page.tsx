import Link from "next/link"
import { Sparkles, ArrowLeft, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Labs() {
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
            <Link href="/labs" className="text-sm font-medium text-card">
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
            <Link href="/team" className="text-sm font-medium hover:text-primary">
              Team
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <div className="mx-auto max-w-4xl">
              <h1 className="mb-4 text-4xl font-bold text-chart-1">Hands-on Laboratory Exercises</h1>
              <p className="mb-8 text-lg text-chart-1">
                Objective 2: Interactive AI Agent Labs with Low Technical Barriers
              </p>

              <div className="mb-12 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Our hands-on laboratory exercises provide guided, interactive experiences where students can directly
                  work with AI agents to solve authentic social science research problems. Each lab is designed with
                  minimal technical prerequisites and provides step-by-step instruction.
                </p>
              </div>

              <h2 className="mb-6 text-2xl font-semibold text-chart-1">Featured Laboratory Exercises</h2>

              <div className="space-y-6">
                <Card className="overflow-hidden">
                  <CardHeader className="text-foreground bg-[rgba(249,227,213,1)]">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Laptop className="h-5 w-5 text-chart-1" />
                    </div>
                    <CardTitle className="text-chart-1">Lab 1: AI Agents for Social Media Data Collection</CardTitle>
                    <CardDescription>Building automated data collection systems</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-semibold">Learning Objectives</h4>
                        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                          <li>Understand API-based data collection methods</li>
                          <li>Design and deploy AI agents for automated social media monitoring</li>
                          <li>Handle rate limits, authentication, and data storage</li>
                          <li>Navigate ethical considerations in social media research</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">Research Scenario</h4>
                        <p className="text-sm text-muted-foreground">
                          Students work on a scenario analyzing public discourse around social movements, learning to
                          collect posts, comments, and engagement metrics while respecting platform terms of service and
                          research ethics.
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">Technical Skills</h4>
                        <p className="text-sm text-muted-foreground">
                          Working with pre-configured environments, natural language API instructions, basic data
                          filtering and organization
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="text-foreground bg-[rgba(249,227,213,1)]">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Laptop className="h-5 w-5 text-chart-1" />
                    </div>
                    <CardTitle className="text-chart-1">Lab 2: AI Agents for Online Abuse Detection</CardTitle>
                    <CardDescription>Building content moderation systems</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-semibold">Learning Objectives</h4>
                        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                          <li>Understand different types of online abuse and harmful content</li>
                          <li>Train and evaluate AI classification models</li>
                          <li>Recognize limitations and potential biases in detection systems</li>
                          <li>Consider human-AI collaboration in content moderation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">Research Scenario</h4>
                        <p className="text-sm text-muted-foreground">
                          Students analyze patterns of harassment and hate speech in online communities, developing
                          detection systems and examining how moderation policies impact community dynamics.
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">Technical Skills</h4>
                        <p className="text-sm text-muted-foreground">
                          Using pre-trained models, evaluating classification performance, understanding
                          precision/recall tradeoffs, prompt engineering for LLMs
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="bg-[rgba(249,227,213,1)]">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Laptop className="h-5 w-5 text-chart-1" />
                    </div>
                    <CardTitle className="text-chart-1">Lab 3: AI Agents for Topic Modeling Analysis</CardTitle>
                    <CardDescription>Discovering themes in large text corpora</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-semibold">Learning Objectives</h4>
                        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                          <li>Understand topic modeling as an exploratory analysis technique</li>
                          <li>Use AI agents to identify themes and patterns in text data</li>
                          <li>Interpret and validate discovered topics</li>
                          <li>Compare traditional and LLM-based topic modeling approaches</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">Research Scenario</h4>
                        <p className="text-sm text-muted-foreground">
                          Students examine large collections of policy documents, news articles, or social media
                          discussions to identify emerging themes, track topic evolution over time, and understand
                          public discourse patterns.
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">Technical Skills</h4>
                        <p className="text-sm text-muted-foreground">
                          Running topic models, adjusting parameters, visualizing results, qualitative validation of
                          computational findings
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 rounded-lg border border-border p-6 bg-card">
                <h3 className="mb-4 text-xl font-semibold text-chart-1">Laboratory Infrastructure</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    All laboratories are conducted in managed cloud environments that eliminate the need for local
                    software installation or configuration. Students access labs through web browsers with the following
                    features:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        ✓
                      </span>
                      <span>
                        <strong>Pre-configured Environments:</strong> All necessary tools and libraries ready to use
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        ✓
                      </span>
                      <span>
                        <strong>Guided Exercises:</strong> Step-by-step instructions with explanations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        ✓
                      </span>
                      <span>
                        <strong>Sample Datasets:</strong> Curated, ethically-sourced data for each exercise
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        ✓
                      </span>
                      <span>
                        <strong>Natural Language Interfaces:</strong> Interact with AI agents through conversation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        ✓
                      </span>
                      <span>
                        <strong>Built-in Visualization:</strong> Explore results interactively without coding
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
