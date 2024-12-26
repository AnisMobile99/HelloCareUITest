import React, { useState } from "react";
import { BsFiletypeDoc, BsPersonVideo3 } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { PiTimerLight } from "react-icons/pi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const icons = {
  BsFiletypeDoc: <BsFiletypeDoc className="text-4xl text-red-500" />,
  BsPersonVideo3: <BsPersonVideo3 className="text-4xl text-red-500" />,
  CiCalendarDate: <CiCalendarDate className="text-4xl text-red-500" />,
  PiTimerLight: <PiTimerLight className="text-4xl text-red-500" />,
};

type AboutCardProps = {
  icon: keyof typeof icons;
  title: string;
  description: string;
};

export const AboutCard: React.FC<AboutCardProps> = ({
  icon,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center bg-white shadow-md rounded-xl p-4 border border-gray-200 overflow-hidden h-48 w-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 flex flex-col items-center justify-evenly p-3 transform transition-transform duration-300 ${
          isHovered ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {icons[icon]}
        <p className="text-gray-800 font-medium mt-4 text-md">{title}</p>
        <FaChevronDown className="text-black text-xl mt-2" />
      </div>

      <div
        className={`absolute inset-0 flex flex-col items-center justify-evenly bg-gray-50 transform transition-transform duration-300 ${
          isHovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <p className="text-gray-700 text-sm px-4">{description}</p>
        <FaChevronUp className="text-black text-xl mt-4" />
      </div>
    </div>
  );
};
