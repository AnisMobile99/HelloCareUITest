import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export const Download: React.FC = () => {
  return (
    <div className="flex flex-col items-start space-y-4">
      <h3 className="text-lg font-medium text-gray-800">
        Téléchargez l'application
      </h3>
      <div className="flex space-x-4">
        {/* Bouton App Store */}
        <a
          href="#"
          className="flex items-center border border-gray-300 rounded-lg shadow-sm px-8 py-3 hover:shadow-md transition space-x-2"
        >
          <FaApple className="text-xl text-black" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-600">Télécharger dans</span>
            <span className="text-sm font-medium text-black">l'App Store</span>
          </div>
        </a>
        {/* Bouton Google Play */}
        <a
          href="#"
          className="flex items-center border border-gray-300 rounded-lg shadow-sm px-8 py-3 hover:shadow-md transition space-x-2"
        >
          <FaGooglePlay className="text-xl text-green-500" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-600">Disponible sur</span>
            <span className="text-sm font-medium text-black">Google Play</span>
          </div>
        </a>
      </div>
    </div>
  );
};
