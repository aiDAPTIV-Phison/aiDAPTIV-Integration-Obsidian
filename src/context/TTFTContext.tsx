import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface TTFTContextValue {
  currentTTFT: number | null;
  isVisible: boolean;
  showTTFT: (ttft: number) => void;
  hideTTFT: () => void;
  updateTTFT: (ttft: number) => void;
}

const TTFTContext = createContext<TTFTContextValue | undefined>(undefined);

interface TTFTProviderProps {
  children: ReactNode;
}

/**
 * Provider for TTFT metric state management
 * Allows components to show/hide and update TTFT values globally
 */
export const TTFTProvider: React.FC<TTFTProviderProps> = ({ children }) => {
  const [currentTTFT, setCurrentTTFT] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const showTTFT = useCallback((ttft: number) => {
    setCurrentTTFT(ttft);
    setIsVisible(true);
  }, []);

  const hideTTFT = useCallback(() => {
    setCurrentTTFT(null);
    setIsVisible(false);
  }, []);

  const updateTTFT = useCallback((ttft: number) => {
    setCurrentTTFT(ttft);
    // Keep visibility state unchanged
  }, []);

  const value: TTFTContextValue = {
    currentTTFT,
    isVisible,
    showTTFT,
    hideTTFT,
    updateTTFT,
  };

  return <TTFTContext.Provider value={value}>{children}</TTFTContext.Provider>;
};

/**
 * Hook to access TTFT context
 * Must be used within a TTFTProvider
 */
export const useTTFTContext = (): TTFTContextValue => {
  const context = useContext(TTFTContext);
  if (context === undefined) {
    throw new Error("useTTFTContext must be used within a TTFTProvider");
  }
  return context;
};
