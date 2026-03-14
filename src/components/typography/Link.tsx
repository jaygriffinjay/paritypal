import NextLink from "next/link";
import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";

type LinkProps = ComponentProps<typeof NextLink>;

export function Link({ children, className, ...props }: LinkProps) {
  return (
    <NextLink
      className={cn(
        "text-primary underline underline-offset-3 transition-colors hover:decoration-dashed",
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}
