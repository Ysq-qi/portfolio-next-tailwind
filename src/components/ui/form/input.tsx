import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

// 定義輸入框樣式變體
const inputVariants = cva(
  "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background " +
    "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
    "disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input",
        search:
        "rounded-full text-sm px-4 py-2 bg-white ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-500 text-gray-700 transition-all duration-200 ease-in-out",
        pricefilter:
        "rounded-xl text-sm text-gray-700 border-gray-300 bg-white focus:ring-2 focus:ring-gray-500 transition-all duration-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {
  disabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, disabled, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(inputVariants({ variant }), className)}
        autoComplete="off"
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
