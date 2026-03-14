import { cn } from "@/lib/utils";

interface BoldProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Bold({ children, className, ...props }: BoldProps) {
  return (
    <strong className={cn("font-bold", className)} {...props}>
      {children}
    </strong>
  );
}
