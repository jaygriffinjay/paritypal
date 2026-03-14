import { cn } from "@/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Text({ children, className, ...props }: TextProps) {
  return (
    <span className={cn(className)} {...props}>
      {children}
    </span>
  );
}
