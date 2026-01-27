import { Badge } from "@/components/ui/badge";
import React from "react";
import { cn } from "@/lib/utils";

interface TTFTMetricProps {
  ttft?: number;
  isVisible?: boolean;
  className?: string;
}

/**
 * Format TTFT value for display
 * @param ttft TTFT value in milliseconds
 * @returns Formatted string
 */
function formatTTFT(ttft: number): string {
  // Always show in milliseconds, rounded to whole number
  return `${Math.round(ttft)}ms`;
}

/**
 * TTFT (Time To First Token) metric display component
 * Styled to match the aiDAPTIV-Integration-meeting-minutes reference implementation
 */
export const TTFTMetric: React.FC<TTFTMetricProps> = ({ ttft, isVisible = true, className }) => {
  if (!isVisible) {
    return null;
  }

  // Show placeholder when no TTFT data is available
  const displayText = ttft !== undefined && ttft !== null ? formatTTFT(ttft) : "--";

  return (
    <Badge
      variant="outline"
      className={cn(
        "tw-flex tw-items-center tw-px-2 tw-py-1",
        "tw-text-xs tw-font-medium tw-text-normal",
        "tw-border-accent tw-bg-accent/10",
        "tw-transition-colors tw-duration-200",
        className
      )}
    >
      <span className="tw-whitespace-nowrap">TTFT: {displayText}</span>
    </Badge>
  );
};

TTFTMetric.displayName = "TTFTMetric";
