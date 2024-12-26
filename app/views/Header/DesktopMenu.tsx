import React from "react";

export const DesktopMenu: React.FC = () => {
  return (
    <nav className="flex justify-end items-center space-x-8 text-gray-700">
      <a
        href="/"
        className="text-red-300 border border-red-300 px-6 py-2 rounded-lg text-base font-semibold hover:bg-red-500 hover:text-white transition flex items-center justify-center"
        style={{ lineHeight: "1.5" }}
      >
        Pour les professionnels
      </a>
      <a
        href="/"
        className="text-base font-normal hover:text-red-300 transition flex items-center justify-center"
      >
        Pour les patients
      </a>
      <a
        href="/"
        className="text-base font-normal hover:text-red-300 transition flex items-center justify-center"
      >
        Blog
      </a>
      <a
        href="/"
        className="text-base font-normal hover:text-red-300 transition flex items-center justify-center"
      >
        Me connecter
      </a>
      <span className="text-gray-400">|</span>
      <a
        href="/"
        className="text-base font-normal hover:text-red-300 transition flex items-center justify-center"
      >
        Créer mon compte
      </a>
    </nav>
  );
};
