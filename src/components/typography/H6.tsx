import { cn } from "@/lib/utils";

interface H6Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H6({ children, className, ...props }: H6Props) {
  return (
    <h6 className={cn("text-lg font-medium", className)} {...props}>
      {children}
    </h6>
  );
}
