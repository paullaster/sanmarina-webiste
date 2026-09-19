import Image from "next/image";
import type { ReactNode } from "react";

type MediaImage = {
  src: string;
  alt: string;
};

type BrandMediaCardProps = {
  image: MediaImage;
  title: string;
  description: string;
  eyebrow?: string;
  meta?: string;
  cta?: string;
  href?: string;
  imageHeightClassName?: string;
  imageClassName?: string;
  className?: string;
  children?: ReactNode;
};

export function BrandMediaCard({
  image,
  title,
  description,
  eyebrow,
  meta,
  cta = "Learn more",
  href,
  imageHeightClassName = "h-48 sm:h-56",
  imageClassName = "object-cover",
  className = "",
  children,
}: BrandMediaCardProps) {
  const body = (
    <>
      <div className={`brand-card-media ${imageHeightClassName}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={imageClassName}
        />
        {eyebrow ? (
          <span className="bg-accent absolute top-3 right-3 rounded-full px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-white uppercase">
            {eyebrow}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {meta ? (
          <p className="font-display text-accent text-[0.65rem] font-semibold tracking-[0.14em] uppercase">
            {meta}
          </p>
        ) : null}
        <h3 className="font-display text-ink group-hover:text-accent mt-1.5 text-lg font-bold tracking-tight text-balance transition-colors">
          {title}
        </h3>
        <p className="text-muted mt-3 flex-1 text-sm leading-relaxed text-pretty">
          {description}
        </p>
        {children}
        {cta ? (
          <p className="border-border brand-card-cta mt-5 border-t pt-4">
            {cta}
            <span aria-hidden="true" data-arrow>
              →
            </span>
          </p>
        ) : null}
      </div>
    </>
  );

  const sharedClass = `brand-card group flex h-full flex-col ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={`${sharedClass} focus-visible:outline-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
      >
        {body}
      </a>
    );
  }

  return <article className={sharedClass}>{body}</article>;
}
