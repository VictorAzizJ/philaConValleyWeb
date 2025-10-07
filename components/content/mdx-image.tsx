import Image, { ImageProps } from "next/image";

export function MdxImage({ alt, ...props }: ImageProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg">
      <Image
        {...props}
        alt={alt}
        className="w-full object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
