import { useMDXComponent } from "next-contentlayer2/hooks";
import { mdxComponents } from "@/lib/mdx";

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose">
      <Component components={mdxComponents} />
    </div>
  );
}
