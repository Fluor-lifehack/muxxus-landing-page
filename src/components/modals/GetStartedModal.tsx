"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaEnvelope, FaPhone, FaQrcode, FaMobile } from "react-icons/fa";
import { phoneCodes } from "@/data/phone-codes";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
};

const GetStartedModal = ({ isOpen, onClose, initialEmail }: Props) => {
  const [contactMethod, setContactMethod] = useState<"email" | "phone">("email");
  const [contactValue, setContactValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  // Mettre à jour contactValue quand initialEmail change ou quand le modal s'ouvre
  useEffect(() => {
    if (initialEmail && isOpen) {
      setContactValue(initialEmail);
      setContactMethod("email");
    }
  }, [initialEmail, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactValue.trim()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setShowQRCode(true);
  };

  const handleClose = () => {
    setShowQRCode(false);
    setContactValue(initialEmail || "");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-[9999] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white/90 backdrop-blur-2xl rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] border border-white/20 max-w-lg w-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-tr from-gray-900 to-gray-800 rounded-2xl shadow-md">
                  <FaMobile className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-medium text-gray-900">Get Started</h2>
                  <p className="text-sm text-gray-500 font-light">
                    Contact us to get started
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-black/5 rounded-full transition-all duration-200"
              >
                <FaTimes className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {!showQRCode ? (
              <div className="p-6">
                {/* Form intro */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-tr from-gray-900 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <FaQrcode className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Get Your QR Code
                  </h3>
                  <p className="text-gray-500 text-sm font-light">
                    Enter your email or phone number to receive the download QR
                    code
                  </p>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Contact Method Toggle */}
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      type="button"
                      onClick={() => setContactMethod("email")}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                        contactMethod === "email"
                          ? "bg-white text-gray-900 shadow"
                          : "text-gray-500 hover:text-gray-700"
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
                          ? "bg-white text-gray-900 shadow"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <FaPhone className="inline w-4 h-4 mr-2" />
                      Phone
                    </button>
                  </div>

                  {/* Input */}
                  <div>
                    <label className="block text-sm font-normal text-gray-700 mb-2">
                      {contactMethod === "email"
                        ? "Email Address"
                        : "Phone Number"}
                    </label>
                    {contactMethod === "email" ? (
                      <input
                        type="email"
                        value={contactValue}
                        onChange={(e) => setContactValue(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition bg-white text-black"
                        placeholder="your@email.com"
                      />
                    ) : (
                      <div className="flex gap-2">
                        <select
                          className="px-3 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-900 text-black"
                          defaultValue="+33"
                        >
                          {phoneCodes.map((phoneCode) => (
                            <option key={phoneCode.code} value={phoneCode.code}>
                              {phoneCode.label}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          value={contactValue}
                          onChange={(e) =>
                            setContactValue(
                              e.target.value.replace(/[^0-9]/g, "")
                            )
                          }
                          required
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 bg-white text-black"
                          placeholder="6 12 34 56 78"
                        />
                      </div>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !contactValue.trim()}
                    className="w-full py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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
              <div className="p-6 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-48 h-48 bg-white border-4 border-gray-200 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg"
                >
                  <FaQrcode className="w-20 h-20 text-gray-400" />
                </motion.div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  QR Code Ready!
                </h3>
                <p className="text-gray-500 text-sm mb-6 font-light">
                  Scan this QR code with your smartphone to download the
                  application
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => setShowQRCode(false)}
                    className="w-full py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
                  >
                    New QR Code
                  </button>
                  <button
                    onClick={handleClose}
                    className="w-full py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium rounded-lg hover:opacity-90 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GetStartedModal;
