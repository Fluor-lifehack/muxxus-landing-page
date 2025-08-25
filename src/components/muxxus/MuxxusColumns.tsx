import React from 'react';

interface ColumnItem {
  icon: string;
  title: string;
  description: string;
}

interface MuxxusColumnsProps {
  data: ColumnItem[];
  className?: string;
}

const MuxxusColumns: React.FC<MuxxusColumnsProps> = ({ data, className = '' }) => {

  return (
    <section className={`mt-16 py-12 bg-gray-900 ${className}`} >
      <div className="container mx-auto px-4 ">


        {/* Grille 2x4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div 
              key={index}
              className="text-left transition-all duration-300"
            >
              {/* Icône */}
              <div className="w-16 h-16 mb-4 bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                <span className="text-2xl">{item.icon}</span>
              </div>
              
              {/* Titre */}
              <h3 className="text-xl font-semibold text-white mb-3 transition-colors">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
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
