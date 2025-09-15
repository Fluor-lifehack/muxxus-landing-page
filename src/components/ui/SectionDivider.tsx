"use client";

type DividerVariant = 'line' | 'dots' | 'chevron' | 'gradient' | 'spacer';
type DividerSize = 'sm' | 'md' | 'lg' | 'xl';

type Props = {
  variant?: DividerVariant;
  size?: DividerSize;
  className?: string;
  color?: 'default' | 'primary' | 'gray' | 'white';
  orientation?: 'horizontal' | 'vertical';
};

/**
 * SectionDivider - Composant de séparation entre sections avec différentes variantes
 * 
 * Variantes disponibles :
 * - line: Ligne simple
 * - dots: Points séparés
 * - chevron: Chevrons décoratifs
 * - gradient: Ligne avec dégradé
 * - spacer: Espacement vertical
 * 
 * @example
 * <SectionDivider variant="line" size="lg" color="primary" />
 * <SectionDivider variant="dots" size="md" />
 * <SectionDivider variant="spacer" size="xl" />
 */
const SectionDivider = ({ 
  variant = 'line',
  size = 'md',
  className = "",
  color = 'default',
  orientation = 'horizontal'
}: Props) => {
  // Classes de taille
  const sizeClasses = {
    sm: orientation === 'horizontal' ? 'my-4' : 'mx-4',
    md: orientation === 'horizontal' ? 'my-8' : 'mx-8',
    lg: orientation === 'horizontal' ? 'my-12' : 'mx-12',
    xl: orientation === 'horizontal' ? 'my-20' : 'mx-20'
  };

  // Classes de couleur
  const colorClasses = {
    default: 'border-gray-200 dark:border-gray-700',
    primary: 'border-primary',
    gray: 'border-gray-300 dark:border-gray-600',
    white: 'border-white/20'
  };

  // Rendu selon la variante
  const renderDivider = () => {
    switch (variant) {
      case 'line':
        return (
          <div className={`border-t ${colorClasses[color]} ${orientation === 'vertical' ? 'border-l h-full' : 'w-full'}`} />
        );
      
      case 'dots':
        return (
          <div className={`flex items-center justify-center gap-2 ${orientation === 'vertical' ? 'flex-col' : 'flex-row'}`}>
            <div className={`w-2 h-2 rounded-full ${color === 'primary' ? 'bg-primary' : 'bg-gray-400'}`} />
            <div className={`w-2 h-2 rounded-full ${color === 'primary' ? 'bg-primary' : 'bg-gray-400'}`} />
            <div className={`w-2 h-2 rounded-full ${color === 'primary' ? 'bg-primary' : 'bg-gray-400'}`} />
          </div>
        );
      
      case 'chevron':
        return (
          <div className={`flex items-center justify-center gap-1 ${orientation === 'vertical' ? 'flex-col' : 'flex-row'}`}>
            <div className={`w-3 h-3 border-r-2 border-b-2 transform rotate-45 ${
              color === 'primary' ? 'border-primary' : 'border-gray-400'
            }`} />
            <div className={`w-3 h-3 border-r-2 border-b-2 transform rotate-45 ${
              color === 'primary' ? 'border-primary' : 'border-gray-400'
            }`} />
            <div className={`w-3 h-3 border-r-2 border-b-2 transform rotate-45 ${
              color === 'primary' ? 'border-primary' : 'border-gray-400'
            }`} />
          </div>
        );
      
      case 'gradient':
        return (
          <div className={`w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent ${
            color === 'primary' ? 'via-primary' : ''
          }`} />
        );
      
      case 'spacer':
        return <div className={`${orientation === 'horizontal' ? 'w-full' : 'h-full'}`} />;
      
      default:
        return null;
    }
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      {renderDivider()}
    </div>
  );
};

export default SectionDivider;
