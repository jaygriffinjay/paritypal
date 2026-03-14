import { cn } from "@/lib/utils";

interface H5Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H5({ children, className, ...props }: H5Props) {
  return (
    <h5 className={cn("text-xl font-medium", className)} {...props}>
      {children}
    </h5>
  );
}
