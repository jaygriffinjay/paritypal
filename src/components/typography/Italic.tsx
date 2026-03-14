import { cn } from "@/lib/utils";

interface ItalicProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Italic({ children, className, ...props }: ItalicProps) {
  return (
    <em className={cn("italic", className)} {...props}>
      {children}
    </em>
  );
}
