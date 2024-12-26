import React from "react";
import { FaStethoscope } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { allSpecialties, frequentSpecialties } from "./spacialtyData";

type SearchBarDropdownProps = {
  isOpen: boolean;
  selectedSpecialty: string;
  onToggle: () => void;
  onSelect: (specialty: string) => void;
  isMobile: boolean;
};

export const SearchBarDropdown: React.FC<SearchBarDropdownProps> = ({
  isOpen,
  selectedSpecialty,
  onToggle,
  onSelect,
  isMobile,
}) => (
  <div
    className={`relative flex items-center justify-between rounded-2xl px-4 py-3 cursor-pointer transition-all ${
      isMobile ? "w-full" : "flex-grow"
    } ${isOpen ? "ring-1 ring-black" : ""}`}
    onClick={onToggle}
    style={{ width: "100%" }}
  >
    <div className="flex items-center space-x-2">
      <FaStethoscope className="text-lg text-gray-600" />
      <span className="text-gray-700 font-medium">{selectedSpecialty}</span>
    </div>
    <FiChevronDown
      className={`text-gray-600 text-lg transform transition-transform ${
        isOpen ? "rotate-180" : "rotate-0"
      }`}
    />
    {isOpen && (
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg rounded-xl mt-1 border border-gray-200 z-20 max-h-56 overflow-y-auto`}
      >
        <div>
          <h3 className="px-4 py-2 text-sm font-semibold text-gray-500">
            Recherche fréquente
          </h3>
          <ul>
            {frequentSpecialties.map((specialty) => (
              <li
                key={specialty}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                onClick={() => onSelect(specialty)}
              >
                {specialty}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2 border-t border-gray-200">
          <h3 className="px-4 py-2 text-sm font-semibold text-gray-500">
            Toutes les spécialités
          </h3>
          <ul>
            {allSpecialties.map((specialty) => (
              <li
                key={specialty}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                onClick={() => onSelect(specialty)}
              >
                {specialty}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
  </div>
);
