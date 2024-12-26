import React, { useState, useEffect } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { useResponsiveDevice } from "~/hooks/useResponsiveDevice";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const isMobile = useResponsiveDevice();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50  transition-all ${
        isScrolled ? "py-2 shadow-md" : "py-4"
      }`}
    >
      {/* Container */}
      <div
        className={`flex items-center px-4 md:px-6 lg:px-8 w-full mx-auto max-w-screen-xl ${
          isMobileMenuOpen ? "justify-center" : "justify-between"
        }`}
      >
        {/* Mobile Menu Toggle */}
        {isMobile && (
          <button
            className={`text-gray-700 text-2xl focus:outline-none absolute left-4 animate-blink`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        )}

        {/* Logo */}
        <div
          className={`flex items-center ${
            isMobile ? "flex-grow justify-center" : "justify-start"
          }`}
        >
          <img
            src="https://hellocare.com/img/hc-logos/logo_horizontal_original_NoTag.svg"
            alt="Hellocare Logo"
            className="h-16"
          />
        </div>

        {/* Menu */}
        {isMobile ? (
          <div
            className={`absolute top-full left-0 w-full h-[calc(100vh-80px)] bg-white z-40 overflow-y-auto transform transition-transform duration-500 ease-in-out ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            <MobileMenu />
          </div>
        ) : (
          <div className="flex items-center justify-end flex-grow space-x-6 xl:space-x-8 md:ml-8">
            <DesktopMenu />
          </div>
        )}
      </div>
    </header>
  );
};
