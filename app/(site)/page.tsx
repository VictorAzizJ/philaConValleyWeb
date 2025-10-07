import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { siteConfig } from "@/lib/config/site";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Container } from "@/components/ui/container";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const latestProjects = allProjects
    .filter((project) => project.published)
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="max-w-3xl text-lg text-text-secondary md:text-xl">
              {siteConfig.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {siteConfig.features.slack.enabled &&
              siteConfig.features.slack.inviteUrl ? (
                <a
                  href={siteConfig.features.slack.inviteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 bg-brand-primary text-white hover:bg-brand-primary/90 h-11 px-8 text-lg"
                >
                  Join Slack
                </a>
              ) : (
                <Button size="lg" disabled>
                  Join Slack (Coming Soon)
                </Button>
              )}

              <LinkButton href="/about" variant="secondary" size="lg">
                Get Onboarded
              </LinkButton>

              <LinkButton href="/partners/request" variant="outline" size="lg">
                Request a Build
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Latest Projects */}
      <section className="py-16 bg-surface-elevated">
        <Container>
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">
                Latest Projects
              </h2>
              <LinkButton href="/projects" variant="ghost">
                View all →
              </LinkButton>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latestProjects.map((project) => (
                <Link
                  key={project._id}
                  href={`/projects/${project.slug}`}
                  className="group"
                >
                  <Card className="h-full transition-colors hover:border-brand-primary">
                    <CardHeader>
                      <CardTitle className="group-hover:text-brand-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.summary}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags?.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Instagram Block */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col items-center text-center space-y-4 rounded-lg border bg-surface-elevated p-8">
            <h3 className="text-2xl font-semibold">Follow Us on Instagram</h3>
            <p className="text-text-secondary">
              Stay updated with our latest events, projects, and community
              highlights.
            </p>
            <a
              href="https://www.instagram.com/phlconvalley/"
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 bg-brand-primary text-white hover:bg-brand-primary/90 h-10 px-4 py-2"
            >
              @phlconvalley
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
