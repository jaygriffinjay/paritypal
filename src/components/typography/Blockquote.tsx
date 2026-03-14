import { cn } from "@/lib/utils";

interface BlockquoteProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  children: React.ReactNode;
}

export function Blockquote({ children, className, ...props }: BlockquoteProps) {
  return (
    <blockquote
      className={cn(
        "border-primary text-muted-foreground border-l-4 pl-4 italic",
        className,
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}
