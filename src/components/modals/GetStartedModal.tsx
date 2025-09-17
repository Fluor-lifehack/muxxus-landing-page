"use client";

import { useState } from "react";
import { FaTimes, FaEnvelope, FaPhone, FaQrcode, FaMobile } from "react-icons/fa";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const GetStartedModal = ({ isOpen, onClose }: Props) => {
  const [contactMethod, setContactMethod] = useState<"email" | "phone">("email");
  const [contactValue, setContactValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactValue.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Contact submitted:", { method: contactMethod, value: contactValue });
    setIsSubmitting(false);
    setShowQRCode(true);
  };

  const handleClose = () => {
    setShowQRCode(false);
    setContactValue("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      zIndex: 9999,
      padding: '1rem'
    }}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="modal-content" style={{ 
        margin: 'auto',
        alignSelf: 'center',
        justifySelf: 'center'
      }}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-800 rounded-full">
              <FaMobile className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Mobile Version</h2>
              <p className="text-sm text-gray-300">Download our app</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaTimes className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {!showQRCode ? (
          /* Contact Form */
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <FaQrcode className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Get Your QR Code
              </h3>
              <p className="text-gray-300 text-sm">
                Enter your email or phone number to receive the download QR code
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Contact Method Toggle */}
              <div className="flex bg-gray-900 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => setContactMethod("email")}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    contactMethod === "email"
                      ? "bg-white text-black shadow-sm"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <FaEnvelope className="inline w-4 h-4 mr-2" />
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setContactMethod("phone")}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    contactMethod === "phone"
                      ? "bg-white text-black shadow-sm"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <FaPhone className="inline w-4 h-4 mr-2" />
                  Phone
                </button>
              </div>

              {/* Contact Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {contactMethod === "email" ? "Email Address" : "Phone Number"}
                </label>
                {contactMethod === "email" ? (
                  <input
                    type="email"
                    value={contactValue}
                    onChange={(e) => setContactValue(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition bg-gray-900 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                ) : (
                  <div className="flex gap-2">
                    <select 
                      className="px-3 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition bg-gray-900 text-white"
                      defaultValue="+33"
                    >
                      <option value="+33" className="bg-gray-900 text-white">🇫🇷 +33</option>
                      <option value="+1" className="bg-gray-900 text-white">🇺🇸 +1</option>
                      <option value="+44" className="bg-gray-900 text-white">🇬🇧 +44</option>
                      <option value="+49" className="bg-gray-900 text-white">🇩🇪 +49</option>
                      <option value="+39" className="bg-gray-900 text-white">🇮🇹 +39</option>
                      <option value="+34" className="bg-gray-900 text-white">🇪🇸 +34</option>
                      <option value="+31" className="bg-gray-900 text-white">🇳🇱 +31</option>
                      <option value="+32" className="bg-gray-900 text-white">🇧🇪 +32</option>
                      <option value="+41" className="bg-gray-900 text-white">🇨🇭 +41</option>
                      <option value="+46" className="bg-gray-900 text-white">🇸🇪 +46</option>
                    </select>
                    <input
                      type="tel"
                      value={contactValue}
                      onChange={(e) => {
                        // Only allow numbers
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        setContactValue(value);
                      }}
                      required
                      className="flex-1 px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition bg-gray-900 text-white placeholder-gray-400"
                      placeholder="6 12 34 56 78"
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !contactValue.trim()}
                className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <FaQrcode className="w-4 h-4" />
                    Generate QR Code
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* QR Code Display */
          <div className="p-6 text-center">
            <div className="w-48 h-48 bg-white border-4 border-gray-200 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                  <FaQrcode className="w-16 h-16 text-gray-400" />
                </div>
                <p className="text-xs text-gray-500">QR Code généré</p>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2">
              QR Code Ready!
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Scan this QR code with your smartphone to download the application
            </p>
            
                        <div className="space-y-3">
              <button
                onClick={() => setShowQRCode(false)}
                className="w-full py-3 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition"
              >
                New QR Code
              </button>
              <button
                onClick={handleClose}
                className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetStartedModal;
