import { FaPlus } from "react-icons/fa6";

const WalletSection = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2">My tasks</h3>
        <div className="flex items-center justify-between text-sm">
          <span>Expenses to review</span>
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">2</span>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-semibold mb-2">Wallet</h3>
        <div className="mb-3">
          <div className="text-2xl font-bold">6,724.27 USD</div>
          <div className="text-xs text-gray-400">Total balance estimated at 5:00pm today</div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>USD United States Dollar</span>
            <span>1,000.00 USD</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>GBP Great Britain Pound</span>
            <span>1,000.00 GBP</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>AUD Australian Dollar</span>
            <span>1,000.00 AUD</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>SGD Singapore Dollar</span>
            <span>1,000.00 SGD</span>
          </div>
        </div>
        
        <button className="mt-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
          <FaPlus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default WalletSection; 