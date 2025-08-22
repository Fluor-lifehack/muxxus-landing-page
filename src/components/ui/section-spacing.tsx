import { cn } from "@/lib/utils";
import Separator from "./separator";

type SectionSpacingProps = {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  showSeparator?: boolean;
  separatorVariant?: "line" | "dots" | "wave" | "none";
  separatorSize?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
};

const SectionSpacing = ({
  size = "lg",
  showSeparator = false,
  separatorVariant = "line",
  separatorSize = "md",
  className,
  children,
}: SectionSpacingProps) => {
  const spacingClasses = {
    sm: "py-6 md:py-8 lg:py-10",
    md: "py-8 md:py-12 lg:py-16",
    lg: "py-12 md:py-16 lg:py-20",
    xl: "py-16 md:py-20 lg:py-24",
    "2xl": "py-20 md:py-24 lg:py-32",
  };

  return (
    <div className={cn(spacingClasses[size], className)}>
      {showSeparator && (
        <Separator variant={separatorVariant} size={separatorSize} />
      )}
      {children}
    </div>
  );
};

export default SectionSpacing;
