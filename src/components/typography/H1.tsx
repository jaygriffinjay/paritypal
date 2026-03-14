import { cn } from "@/lib/utils";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H1({ children, className, ...props }: H1Props) {
  return (
    <h1
      className={cn("text-5xl font-bold tracking-tight", className)}
      {...props}
    >
      {children}
    </h1>
  );
}
