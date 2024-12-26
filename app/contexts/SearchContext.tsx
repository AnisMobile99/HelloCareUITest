import React, { createContext, useState, useContext, ReactNode } from "react";

interface SearchContextType {
  searchParams: { specialty: string; name: string };
  setSearchParams: (params: { specialty: string; name: string }) => void;
  searchHistory: { label: string; path: string }[];
  addToHistory: (label: string, path: string) => void;
  truncateHistory: (path: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchParams, setSearchParams] = useState<{
    specialty: string;
    name: string;
  }>({
    specialty: "",
    name: "",
  });

  const [searchHistory, setSearchHistory] = useState<
    { label: string; path: string }[]
  >([{ label: "Accueil", path: "/" }]);

  const addToHistory = (label: string, path: string) => {
    setSearchHistory((prev) => {
      const newHistory = [...prev, { label, path }];
      return newHistory.slice(-5);
    });
  };

  const truncateHistory = (path: string) => {
    setSearchHistory((prev) => {
      const index = prev.findIndex((item) => item.path === path);
      return index !== -1 ? prev.slice(0, index + 1) : prev;
    });
  };

  return (
    <SearchContext.Provider
      value={{
        searchParams,
        setSearchParams,
        searchHistory,
        addToHistory,
        truncateHistory,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
