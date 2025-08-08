"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { buttonClasses } from "@/config/colors";

type ButtonVariant = 'primary' | 'secondary' | 'security' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

type Props = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  target?: string;
};

const MuxxusButton = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  onClick,
  disabled = false,
  icon,
  iconPosition = 'right',
  target,
}: Props) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const buttonClassesMap = {
    primary: buttonClasses.primary,
    secondary: buttonClasses.secondary,
    security: buttonClasses.security,
    outline: buttonClasses.outline,
  };

  const classes = cn(
    baseClasses,
    sizeClasses[size],
    buttonClassesMap[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
      {!icon && iconPosition === 'right' && (
        <FaArrowRight className="ml-2 w-4 h-4" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
};

export default MuxxusButton;
