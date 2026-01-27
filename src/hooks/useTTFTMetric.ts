import { useState, useCallback } from "react";

interface TTFTState {
  currentTTFT: number | null;
  isVisible: boolean;
}

/**
 * Hook for managing TTFT metric state
 * Provides methods to show/hide and update TTFT values
 */
export function useTTFTMetric() {
  const [state, setState] = useState<TTFTState>({
    currentTTFT: null,
    isVisible: false,
  });

  /**
   * Show TTFT metric with a value
   */
  const showTTFT = useCallback((ttft: number) => {
    setState({
      currentTTFT: ttft,
      isVisible: true,
    });
  }, []);

  /**
   * Hide TTFT metric
   */
  const hideTTFT = useCallback(() => {
    setState({
      currentTTFT: null,
      isVisible: false,
    });
  }, []);

  /**
   * Update TTFT value while keeping it visible
   */
  const updateTTFT = useCallback((ttft: number) => {
    setState((prev) => ({
      ...prev,
      currentTTFT: ttft,
    }));
  }, []);

  return {
    ttft: state.currentTTFT,
    isVisible: state.isVisible,
    showTTFT,
    hideTTFT,
    updateTTFT,
  };
}
