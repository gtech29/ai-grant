import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  align?: "left" | "center";
}

export function Hero({
  title,
  description,
  children,
  align = "center",
}: HeroProps) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <section className="py-10">
      <div className={`max-w-5xl mx-auto  flex flex-col ${alignment}`}>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {title}
        </h1>
        <p className="text-base text-muted-foreground max-w-5xl leading-relaxed mb-8">
          {description}
        </p>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </section>
  );
}

