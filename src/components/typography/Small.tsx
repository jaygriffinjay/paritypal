import { cn } from "@/lib/utils";

interface SmallProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Small({ children, className, ...props }: SmallProps) {
  return (
    <small
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    >
      {children}
    </small>
  );
}
