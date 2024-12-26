import React from "react";
import { useResponsiveDevice } from "~/hooks/useResponsiveDevice";
import { About } from "~/views/About/About";

export const AboutSection: React.FC = () => {
  const isMobile = useResponsiveDevice();

  return (
    <div
      className={`mt-16 w-full ${
        isMobile ? "" : "max-w-4xl"
      } mx-auto text-center`}
    >
      <About />
    </div>
  );
};
