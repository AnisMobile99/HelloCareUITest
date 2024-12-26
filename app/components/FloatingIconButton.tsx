import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { FloatingButton } from "./FloatingButton";

export const FloatingArrowButton: React.FC = () => {
  return (
    <FloatingButton
      icon={<FaArrowDown className="text-xl" />}
      onClick={() => console.log("Bouton flottant cliqué")}
      animation="animate-bounce-down"
    />
  );
};
