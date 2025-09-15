import { cn } from "@/lib/utils";

type SpacingProps = {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  children?: React.ReactNode;
};

const Spacing = ({ size = "md", className, children }: SpacingProps) => {
  const spacingClasses = {
    sm: "py-4 md:py-6 lg:py-8",
    md: "py-6 md:py-8 lg:py-12",
    lg: "py-8 md:py-12 lg:py-16",
    xl: "py-12 md:py-16 lg:py-20",
    "2xl": "py-16 md:py-20 lg:py-24",
  };

  return (
    <div className={cn(spacingClasses[size], className)}>
      {children}
    </div>
  );
};

export default Spacing;
