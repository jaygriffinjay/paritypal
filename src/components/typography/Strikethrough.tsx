import { cn } from "@/lib/utils";

interface StrikethroughProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Strikethrough({
  children,
  className,
  ...props
}: StrikethroughProps) {
  return (
    <s className={cn("line-through", className)} {...props}>
      {children}
    </s>
  );
}
