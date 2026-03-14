import { cn } from "@/lib/utils";

interface H4Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H4({ children, className, ...props }: H4Props) {
  return (
    <h4 className={cn("text-2xl font-semibold", className)} {...props}>
      {children}
    </h4>
  );
}
