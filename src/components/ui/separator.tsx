import { cn } from "@/lib/utils";

type SeparatorProps = {
  variant?: "line" | "dots" | "wave" | "none";
  className?: string;
  size?: "sm" | "md" | "lg";
};

const Separator = ({ variant = "line", className, size = "md" }: SeparatorProps) => {
  const sizeClasses = {
    sm: "py-2",
    md: "py-4",
    lg: "py-6",
  };

  const renderSeparator = () => {
    switch (variant) {
      case "line":
        return (
          <div className="flex justify-center">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>
          </div>
        );
      
      case "dots":
        return (
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
        );
      
      case "wave":
        return (
          <div className="flex justify-center">
            <svg className="w-16 h-4 text-gray-300 dark:text-gray-600" viewBox="0 0 64 16" fill="currentColor">
              <path d="M0 8c8 0 8-4 16-4s8 4 16 4 8-4 16-4 8 4 16 4v8H0V8z"/>
            </svg>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={cn(sizeClasses[size], className)}>
      {renderSeparator()}
    </div>
  );
};

export default Separator;
