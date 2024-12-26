import React from "react";
import { useResponsiveDevice } from "~/hooks/useResponsiveDevice";
import { SearchBar } from "~/views/SearchBar/SearchBar";

export const SearchSection: React.FC = () => {
  const isMobile = useResponsiveDevice();

  return (
    <div
      className={`relative mt-8 flex ${
        isMobile
          ? "flex-col items-center space-y-4"
          : "flex-row items-center justify-between"
      } w-full ${isMobile ? "" : "max-w-4xl"} mx-auto`}
    >
      <div className="z-10 w-full">
        <SearchBar />
      </div>

      {isMobile ? (
        <div className="w-full mt-6 flex justify-end">
          <img
            src="https://hellocare.com/img/consultation-en-ligne.png"
            alt="Médecin"
            className="w-full"
          />
        </div>
      ) : (
        <div className="absolute right-[-320px] top-[-180px]">
          <img
            src="https://hellocare.com/img/consultation-en-ligne.png"
            alt="Médecin"
            className="w-[500px] h-[500px] object-cover"
          />
        </div>
      )}
    </div>
  );
};
