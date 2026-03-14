import { cn } from "@/lib/utils";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p className={cn("text-base leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}
