import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { Container } from "@/components/ui/container";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/lib/mdx";

export const metadata = {
  title: "About",
  description: "Get onboarded with PhilaConValley",
};

async function getOnboardingContent() {
  const filePath = path.join(process.cwd(), "docs", "onboarding.md");
  const fileContent = await fs.readFile(filePath, "utf8");
  const { content } = matter(fileContent);

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false,
    },
    components: mdxComponents,
  });

  return mdxContent;
}

export default async function AboutPage() {
  const content = await getOnboardingContent();

  return (
    <main className="py-16">
      <Container size="narrow">
        <div className="prose prose-lg">{content}</div>
      </Container>
    </main>
  );
}
