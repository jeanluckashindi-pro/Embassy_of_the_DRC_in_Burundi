import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-700 shadow-sm active:scale-[0.98]",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 shadow-sm active:scale-[0.98]",
        outline:
          "border border-slate-300 bg-transparent hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-100",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100",
        link: "text-blue-600 underline-offset-4 hover:underline dark:text-blue-400",
        gold: "bg-amber-400 text-slate-950 font-semibold hover:bg-amber-300 shadow-sm active:scale-[0.98]",
        flag: "bg-gradient-to-r from-blue-700 via-yellow-500 to-red-600 text-white font-medium hover:opacity-95 shadow-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, animate = true, ...props }, ref) => {
    const Comp = asChild ? Slot : animate ? motion.button : "button";
    const motionProps = animate && !asChild ? {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.97 },
      transition: { duration: 0.15 }
    } : {};

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...motionProps}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
