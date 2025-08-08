import { FaArrowRight } from "react-icons/fa6";

const CorporateCardsSection = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <div className="mb-4">
        <div className="flex gap-3 mb-4">
          {/* Black card */}
          <div className="w-16 h-10 bg-black rounded-md border border-gray-600 flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
          {/* White virtual card */}
          <div className="w-16 h-10 bg-white rounded-md border border-gray-300 flex flex-col justify-center px-2">
            <div className="text-xs text-black font-medium">VIRTUAL</div>
            <div className="text-xs text-black">John Doe</div>
            <div className="text-xs text-black">**** 5382</div>
            <div className="text-xs text-blue-600 font-bold">VISA</div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-2">CORPORATE CARDS</h3>
        <p className="text-sm text-gray-300 mb-4">Issue multi-currency corporate cards instantly.</p>
        <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
          <FaArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default CorporateCardsSection; 