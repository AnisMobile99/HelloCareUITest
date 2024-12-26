import { useState, useEffect } from "react";

export const useResponsiveDevice = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDeviceType = () => {
      const isBreakpointMobile = window.innerWidth <= 968;

      setIsMobile(isBreakpointMobile);
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);

    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return isMobile;
};
