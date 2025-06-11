import * as React from "react";
import { Button, ButtonProps, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// Define our custom button variants
const appButtonVariants = cva(
  "rounded-full transition-all", // Make all buttons fully rounded
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 border-none",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-none",
        ghost: "bg-transparent hover:bg-accent/50 text-foreground border-none",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface AppButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: "primary" | "secondary" | "ghost";
}

const AppButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    // Map our custom variants to the underlying Button component
    const buttonVariant = 
      variant === "primary" ? "default" :
      variant === "secondary" ? "secondary" : 
      "ghost";
    
    return (
      <Button
        ref={ref}
        variant={buttonVariant as any}
        size={size}
        asChild={asChild}
        className={cn(appButtonVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

AppButton.displayName = "AppButton";

export { AppButton, appButtonVariants };
