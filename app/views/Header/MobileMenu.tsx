import React from "react";

export const MobileMenu: React.FC = () => {
  return (
    <nav className="flex flex-col space-y-4 text-gray-700 p-4">
      <a
        href="/"
        className="text-red-500 border border-red-500 px-4 py-2 rounded-xl hover:bg-red-500 hover:text-white transition"
      >
        Pour les professionnels
      </a>
      <a href="/" className="hover:text-red-500 transition">
        Pour les patients
      </a>
      <a href="/" className="hover:text-red-500 transition">
        Blog
      </a>
      <a href="/" className="hover:text-red-500 transition">
        Me connecter
      </a>
      <a href="/" className="hover:text-red-500 transition">
        Créer mon compte
      </a>
    </nav>
  );
};
