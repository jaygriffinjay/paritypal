import { cn } from "@/lib/utils";

interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H3({ children, className, ...props }: H3Props) {
  return (
    <h3 className={cn("text-3xl font-semibold", className)} {...props}>
      {children}
    </h3>
  );
}
