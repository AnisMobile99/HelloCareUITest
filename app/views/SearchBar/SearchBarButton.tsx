import React from "react";

type SearchBarButtonProps = {
  isMobile: boolean;
  handleSearch: () => void;
};

export const SearchBarButton: React.FC<SearchBarButtonProps> = ({
  isMobile,
  handleSearch,
}) => {
  return (
    <button
      className={`${
        isMobile ? "w-full py-3" : "px-5 py-5"
      } bg-teal-500 text-white rounded-2xl font-semibold hover:bg-teal-600 transition`}
      onClick={handleSearch}
    >
      Rechercher
    </button>
  );
};
