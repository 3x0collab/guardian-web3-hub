import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, ExternalLink } from "lucide-react";

interface TooltipModalProps {
  children: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

export const TooltipModal: React.FC<TooltipModalProps> = ({
  children,
  title,
  description,
  href = "https://www.google.com",
  variant = "default",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleContinue = () => {
    setIsOpen(false);
    if (href.startsWith("/")) {
      window.location.href = href;
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className={`cursor-pointer ${className}`}
      >
        {children}
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="glass rounded-xl border border-border/30 p-6 shadow-hover w-full max-w-md mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 rounded-full"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {description}
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleContinue}
                    className={`flex-1 ${
                      variant === "primary" 
                        ? "bg-gradient-primary hover:opacity-90" 
                        : variant === "secondary"
                        ? "bg-gradient-secondary hover:opacity-90"
                        : ""
                    }`}
                  >
                    Continue
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default TooltipModal;