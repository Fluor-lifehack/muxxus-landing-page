import React from 'react';

interface ColumnItem {
  icon: string;
  title: string;
  description: string;
}

interface MuxxusColumnsProps {
  className?: string;
}

const MuxxusColumns: React.FC<MuxxusColumnsProps> = ({ className = '' }) => {
  const columnsData: ColumnItem[] = [
    {
      icon: "🚀",
      title: "Get up and running in just minutes",
      description: "Link your Muxxus Payments account to your eCommerce platform for a seamless no-code plug-and-play integration."
    },
    {
      icon: "💱",
      title: "Boost conversions with a locally-optimised flow",
      description: "Use built-in currency switching to localise your checkout experience and keep shoppers on your storefront."
    },
    {
      icon: "💳",
      title: "Access a wide range of payment methods",
      description: "Accept 160+ global and local payment methods including cards, Apple Pay, Google Pay, Klarna, Afterpay, and more."
    },
    {
      icon: "💰",
      title: "Reduce costly forced FX conversion fees",
      description: "Settle funds in the same currency your customers pay in, avoiding forced FX conversion fees that eat into your margins."
    }
  ];

  return (
    <section className={`mt-20 py-20 bg-gray-900 ${className}`} >
      <div className="container mx-auto px-4 ">


        {/* Grille 2x4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {columnsData.map((item, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icône */}
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <span className="text-3xl">{item.icon}</span>
              </div>
              
              {/* Titre */}
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors">
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
