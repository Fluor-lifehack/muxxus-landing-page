import { FaArrowRight } from "react-icons/fa6";

const IntegrationsSection = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <div className="mb-4">
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            {/* Airwallex logo */}
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            
            {/* Dashed lines to other logos */}
            <div className="absolute top-1/2 left-full w-8 h-px bg-gray-600 border-dashed border-gray-600"></div>
            <div className="absolute top-1/2 right-full w-8 h-px bg-gray-600 border-dashed border-gray-600"></div>
            <div className="absolute top-full left-1/2 w-px h-8 bg-gray-600 border-dashed border-gray-600"></div>
            
            {/* Other logos */}
            <div className="absolute top-1/2 left-12 w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white font-bold text-xs">
              qb
            </div>
            <div className="absolute top-1/2 right-12 w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-xs">
              N
            </div>
            <div className="absolute bottom-12 left-1/2 w-6 h-6 bg-blue-400 rounded flex items-center justify-center text-white font-bold text-xs">
              xero
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-2">INTEGRATIONS</h3>
        <p className="text-sm text-gray-300 mb-4">Connect Airwallex to other popular software platforms.</p>
        <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
          <FaArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default IntegrationsSection; 