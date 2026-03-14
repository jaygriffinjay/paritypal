import { cn } from "@/lib/utils";

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
}

export function ListItem({ children, className, ...props }: ListItemProps) {
  return (
    <li className={cn(className)} {...props}>
      {children}
    </li>
  );
}
