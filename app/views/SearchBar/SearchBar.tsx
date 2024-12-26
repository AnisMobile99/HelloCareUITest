import React, { useState, useRef, useEffect } from "react";
import { useResponsiveDevice } from "~/hooks/useResponsiveDevice";
import { SearchBarDropdown } from "./SearchBarDropdown";
import { SearchBarInput } from "./SearchBarInput";
import { SearchBarButton } from "./SearchBarButton";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "@remix-run/react";
import { useSearchContext } from "~/contexts/SearchContext";

interface SearchBarProps {
  showPostalCode?: boolean;
  nameFilter?: string;
  postalCodeFilter?: string;
  onNameChange?: (value: string) => void;
  onPostalCodeChange?: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  showPostalCode = false,
  nameFilter,
  postalCodeFilter,
  onNameChange,
  onPostalCodeChange,
}) => {
  const location = useLocation();
  const isOnHomePage = location.pathname === "/";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("Spécialité");
  const searchBarRef = useRef<HTMLDivElement>(null);
  const isMobile = useResponsiveDevice();
  const navigate = useNavigate();
  const {
    searchHistory,
    addToHistory,
    truncateHistory,
    searchParams,
    setSearchParams,
  } = useSearchContext();

  useEffect(() => {
    if (searchParams.specialty && !isOnHomePage) {
      setSelectedSpecialty(searchParams.specialty);
    }
    if (searchParams.name) {
      onNameChange(searchParams.name);
    }
  }, [searchParams, isOnHomePage, onNameChange]);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleSelect = (specialty: string) => {
    setSelectedSpecialty(specialty);
    setIsDropdownOpen(false);

    const formattedSpecialty = specialty.toLowerCase().replace(/ /g, "-");
    const path = `/doctors/${formattedSpecialty}`;
    const label = nameFilter ? `${specialty} | ${nameFilter}` : `${specialty}`;

    setSearchParams({ specialty, name: nameFilter }); // Mettre à jour le contexte
    addToHistory(label, path);
    navigate(path);
  };

  const handleSearch = () => {
    const formattedSpecialty = selectedSpecialty
      .toLowerCase()
      .replace(/ /g, "-");
    const path = `/doctors/${formattedSpecialty}`;
    const label = nameFilter
      ? `${selectedSpecialty} | ${nameFilter}`
      : `${selectedSpecialty}`;

    setSearchParams({ specialty: selectedSpecialty, name: nameFilter });
    addToHistory(label, path);
    navigate(path);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleHistoryClick = (path: string) => {
    truncateHistory(path);
    navigate(path);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full">
      {!isOnHomePage && (
        <nav className="mb-4 text-sm text-gray-600">
          {searchHistory.map((item, index) => (
            <span key={index}>
              {index > 0 && " | "}
              <button
                onClick={() => handleHistoryClick(item.path)}
                className="hover:underline text-black"
              >
                {item.label}
              </button>
            </span>
          ))}
        </nav>
      )}

      <div
        ref={searchBarRef}
        className={`${
          isMobile
            ? "flex flex-col items-center space-y-4 bg-white p-2 rounded-xl shadow-md relative"
            : "flex items-center bg-white shadow-md rounded-2xl p-3 space-x-4 relative"
        }`}
      >
        <SearchBarDropdown
          isOpen={isDropdownOpen}
          selectedSpecialty={selectedSpecialty}
          onToggle={toggleDropdown}
          onSelect={handleSelect}
          isMobile={isMobile}
        />
        <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-2xl flex-shrink-0">
          <span className="text-sm font-semibold">et/ou</span>
        </div>
        <SearchBarInput
          placeholder="Nom du Practicien"
          value={"Pas disponible"}
          onChange={(e) => onNameChange(e.target.value)}
          isMobile={isMobile}
          icon={<FaSearch />}
          disabled={true}
        />
        {showPostalCode && (
          <>
            <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-2xl flex-shrink-0">
              <span className="text-sm font-semibold">et/ou</span>
            </div>
            <SearchBarInput
              placeholder="Code Postal"
              value={"Pas disponible"}
              onChange={(e) => onPostalCodeChange(e.target.value)}
              isMobile={isMobile}
              icon={<FaMapMarkerAlt />}
              disabled={true}
            />
          </>
        )}
        <SearchBarButton isMobile={isMobile} handleSearch={handleSearch} />
      </div>
    </div>
  );
};
