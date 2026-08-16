import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-bg-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-emerald-primary text-white hover:bg-emerald-deep shadow-sm hover:shadow-md",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-emerald-primary/30 bg-transparent text-emerald-primary hover:bg-emerald-primary/5 hover:border-emerald-primary/50",
        secondary: "bg-bg-secondary text-text-primary hover:bg-emerald-primary/10 hover:text-emerald-deep",
        ghost: "hover:bg-bg-secondary hover:text-text-primary text-text-secondary",
        link: "text-emerald-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
