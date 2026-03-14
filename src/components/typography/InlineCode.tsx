import { cn } from "@/lib/utils";

interface InlineCodeProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function InlineCode({ children, className, ...props }: InlineCodeProps) {
  return (
    <code
      className={cn(
        "bg-muted rounded-sm border px-1.5 py-0.5 text-sm",
        className,
      )}
      style={{ fontFamily: "var(--font-jetbrains-mono)", ...props.style }}
      {...props}
    >
      {children}
    </code>
  );
}
