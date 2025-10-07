import Link from "next/link";
import { MDXComponents } from "mdx/types";
import { Callout } from "@/components/content/callout";
import { Alert } from "@/components/content/alert";
import { CodeBlock } from "@/components/content/code-block";
import { MdxImage } from "@/components/content/mdx-image";

export const mdxComponents: MDXComponents = {
  a: ({ href, children }) => {
    if (href?.startsWith("/")) {
      return <Link href={href}>{children}</Link>;
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
  img: (props) => <MdxImage {...(props as any)} />,
  Callout,
  Alert,
  CodeBlock,
};
