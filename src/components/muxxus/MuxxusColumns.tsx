import React from 'react';

interface ColumnItem {
  icon: string;
  title: string;
  description: string;
}

interface MuxxusColumnsProps {
  data: ColumnItem[];
  className?: string;
  backgroundColor?: string;
  align?: 'left' | 'center' | 'right';
  showIcons?: boolean;
}

const MuxxusColumns: React.FC<MuxxusColumnsProps> = ({ 
  data, 
  className = '', 
  backgroundColor = 'bg-gray-900',
  align = 'left',
  showIcons = true
}) => {

  // Déterminer les classes d'alignement
  const getAlignmentClasses = () => {
    switch (align) {
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      default:
        return 'text-left';
    }
  };

  // Déterminer les classes de couleur de texte selon le fond
  const getTextColorClasses = () => {
    if (backgroundColor.includes('gray-900') || backgroundColor.includes('gray-800') || backgroundColor.includes('gray-700')) {
      return {
        title: 'text-white',
        description: 'text-gray-300'
      };
    } else {
      return {
        title: 'text-gray-900',
        description: 'text-gray-600'
      };
    }
  };

  // Déterminer le nombre de colonnes par ligne selon le nombre d'éléments
  const getGridCols = () => {
    const itemCount = data.length;
    if (itemCount === 3 || itemCount === 6) {
      return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    } else if (itemCount === 4 || itemCount === 8) {
      return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    } else {
      // Par défaut, utiliser 3 colonnes
      return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  const textColors = getTextColorClasses();
  const alignmentClass = getAlignmentClasses();
  const gridCols = getGridCols();

  return (
    <section className={`mt-16 py-12 ${backgroundColor} ${className}`} >
      <div className="container mx-auto px-4">
        {/* Grille adaptative */}
        <div className={`grid ${gridCols} gap-6`}>
          {data.map((item, index) => (
            <div 
              key={index}
              className={`${alignmentClass} transition-all duration-300`}
            >
              {/* Icône - conditionnelle */}
              {showIcons && (
                <div className="w-16 h-16 mb-4 bg-primary/20 rounded-full flex items-center justify-center transition-colors mx-auto">
                  <span className="text-2xl">{item.icon}</span>
                </div>
              )}
              
              {/* Titre */}
              <h3 className={`text-xl font-semibold mb-3 transition-colors ${textColors.title}`}>
                {item.title}
              </h3>
              
              {/* Description */}
              <p className={`leading-relaxed ${textColors.description}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MuxxusColumns;
