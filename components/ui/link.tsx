import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { AnchorHTMLAttributes, forwardRef } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className, children, ...props }, ref) => {
    return (
      <NextLink 
        href={href} 
        className={cn(
          "transition-colors hover:text-foreground/80",
          className
        )} 
        ref={ref}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";

export { Link };