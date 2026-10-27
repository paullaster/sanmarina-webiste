import Image from "next/image";
import { company, brandLogo } from "@/lib/content";

type BrandLogoProps = {
  size?: "header" | "footer" | "inline";
  className?: string;
  priority?: boolean;
};

const sizeMap = {
  header: {
    width: 170,
    height: 100,
    className: "!h-14 !w-auto sm:!h-16",
  },
  footer: {
    width: 220,
    height: 130,
    className: "!h-16 !w-auto sm:!h-[4.75rem]",
  },
  inline: {
    width: 140,
    height: 82,
    className: "!h-11 !w-auto",
  },
} as const;

export function BrandLogo({
  size = "header",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const dims = sizeMap[size];

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={brandLogo.src}
        alt={brandLogo.alt}
        width={dims.width}
        height={dims.height}
        priority={priority}
        className={`${dims.className} max-w-none object-contain object-left`}
      />
      <span className="sr-only">{company.name}</span>
    </span>
  );
}
