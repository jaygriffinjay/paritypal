import { cn } from "@/lib/utils";

interface ListProps extends React.HTMLAttributes<
  HTMLUListElement | HTMLOListElement
> {
  ordered?: boolean;
  children: React.ReactNode;
}

export function List({ ordered, children, className, ...props }: ListProps) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      className={cn(
        ordered ? "list-decimal" : "list-disc",
        "space-y-1 pl-6",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
