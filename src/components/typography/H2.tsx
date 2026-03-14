import { cn } from "@/lib/utils";

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H2({ children, className, ...props }: H2Props) {
  return (
    <h2
      className={cn("text-4xl font-bold tracking-tight", className)}
      {...props}
    >
      {children}
    </h2>
  );
}
