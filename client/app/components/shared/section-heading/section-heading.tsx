import type { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export function SectionHeading({
  children,
  as: Component = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex items-start justify-between pb-0.5 pt-7.5 px-4.5 w-full ${className}`}>
      <Component className="flex-1 font-semibold text-[18px] leading-normal text-[#212121] tracking-[-0.36px]">
        {children}
      </Component>
    </div>
  );
}
