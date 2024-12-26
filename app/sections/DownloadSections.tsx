import React from "react";
import { useResponsiveDevice } from "~/hooks/useResponsiveDevice";
import { FloatingArrowButton } from "~/components/FloatingIconButton";
import { Download } from "~/views/Download/Download";

export const DownloadSection: React.FC = () => {
  const isMobile = useResponsiveDevice();

  return (
    <div
      className={`mt-16 flex flex-col ${
        isMobile
          ? "items-center space-y-6"
          : "items-center space-x-6 flex-row max-w-4xl mx-auto"
      }`}
    >
      <div className="flex-shrink-0">
        <Download />
      </div>

      <div className={`flex-shrink-0 ${isMobile ? "mt-4" : "-ml-4"}`}>
        <FloatingArrowButton />
      </div>
    </div>
  );
};
