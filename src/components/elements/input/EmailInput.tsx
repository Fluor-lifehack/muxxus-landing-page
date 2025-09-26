"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";

type Props = {
  className?: string;
  iconClassName?: string;
  onSubmit?: (email: string) => Promise<void>;
};

const EmailInput = ({ className, iconClassName, onSubmit }: Props) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      if (onSubmit) {
        await onSubmit(email);
      } else {
        // Simulation d'une API call si aucune fonction onSubmit n'est fournie
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-[38px]">
      <form onSubmit={handleSubmit}>
        <div
          className={cn(
            "rounded-[20px] flex gap-[10px] items-center py-[18px] px-[25px] xl:p-[25px] transition-colors duration-200",
            status === "error" ? "border-2 border-red-500" : "",
            status === "success" ? "border-2 border-green-500" : "",
            className
          )}
        >
          <span>
            <FaRegEnvelope className="text-text-fixed-3" />
          </span>
          <input
            type="email"
            className="text-[14px] text-text-fixed-3 focus:outline-none w-full border-0 bg-transparent"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
          />
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <FaSpinner className={cn("text-text-fixed-2 animate-spin", iconClassName)} />
            ) : (
              <FaPaperPlane className={cn("text-text-fixed-2", iconClassName)} />
            )}
          </button>
        </div>
      </form>
      
      {/* Messages de statut */}
      {status === "success" && (
        <p className="text-green-500 text-sm mt-2 text-center">
          ✅ Successfully subscribed! Check your email for confirmation.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm mt-2 text-center">
          ❌ Please enter a valid email address.
        </p>
      )}
    </div>
  );
};

export default EmailInput;
