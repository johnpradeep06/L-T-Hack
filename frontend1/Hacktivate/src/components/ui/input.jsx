import * as React from "react";
import { cn } from "@/lib/utils";
import { EyeOff, Eye } from "lucide-react"; // Import icons for toggle (or replace with your preferred icons)

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const password = type==="password";
  const [showPassword, setShowPassword] = React.useState(!password);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const inputType = password ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
      {password && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground focus:outline-none"
        >
          {showPassword ? (
            <Eye className="h-5 w-5" aria-hidden="true" />
          ) : (
            <EyeOff className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };