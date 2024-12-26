import React, { useEffect, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useResponsiveDevice } from "~/hooks/useResponsiveDevice";

export const AboutMedecin: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const isMobile = useResponsiveDevice();

  const handleMouseMove = (e: MouseEvent) => {
    if (isInView) {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        setMouseX(e.clientX - rect.left - rect.width / 2);
        setMouseY(e.clientY - rect.top - rect.height / 2);
      }
    }
  };

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setIsInView(rect.top >= 0 && rect.bottom <= window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 px-4 bg-white text-center flex flex-col items-center justify-center"
    >
      <div
        className="absolute bg-red-500 rounded-full opacity-50 pointer-events-none"
        style={{
          width: isMobile ? "120px" : "200px",
          height: isMobile ? "120px" : "200px",
          top: "10%",
          left: isMobile ? "-10%" : "-20%",
          transform: `translate(${mouseX * 0.1}px, ${mouseY * 0.1}px)`,
        }}
      ></div>
      <div
        className="absolute bg-red-500 rounded-full opacity-50 pointer-events-none"
        style={{
          width: isMobile ? "120px" : "200px",
          height: isMobile ? "120px" : "200px",
          top: "10%",
          right: isMobile ? "-10%" : "-20%",
          transform: `translate(${mouseX * -0.1}px, ${mouseY * -0.1}px)`,
        }}
      ></div>

      <div className="relative z-10 flex items-center justify-center bg-red-500 text-white w-20 h-20 rounded-full shadow-lg">
        <FaPhoneAlt className="text-3xl" />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          PRENEZ RENDEZ-VOUS AVEC VOTRE MÉDECIN
        </h2>
        <p className="text-gray-700 mb-6 max-w-lg mx-auto">
          Vous aimeriez pouvoir prendre rendez-vous avec votre médecin en vidéo,
          votre généraliste ou vos spécialistes, mais ils ne proposent pas
          encore la téléconsultation ? Invitez-les !
        </p>
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-md hover:bg-red-600 transition"
          onClick={() => console.log("Inviter mon médecin")}
        >
          Inviter mon médecin
        </button>
      </div>
    </section>
  );
};
