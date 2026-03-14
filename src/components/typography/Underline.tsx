import { cn } from "@/lib/utils";

interface UnderlineProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Underline({ children, className, ...props }: UnderlineProps) {
  return (
    <span className={cn("underline underline-offset-2", className)} {...props}>
      {children}
    </span>
  );
}
