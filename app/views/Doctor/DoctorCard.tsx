import React, { useState, useEffect, useMemo } from "react";
import { generateWeekDays } from "~/utils/generateWeekDays";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Doctor } from "~/types/database";

type DoctorCardProps = {
  doctor: Doctor;
};

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const allWeekDays = useMemo(() => generateWeekDays(), []);
  const [visibleDays, setVisibleDays] = useState(allWeekDays);

  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById("days-container");
      if (container) {
        const containerWidth = container.offsetWidth;
        const dayWidth = 120;
        const maxVisibleDays = Math.floor(containerWidth / dayWidth);
        setVisibleDays(allWeekDays.slice(0, maxVisibleDays));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [allWeekDays]);

  return (
    <div className="flex justify-center w-full">
      <div
        className="flex flex-col lg:flex-row p-6 bg-white shadow-md rounded-lg"
        style={{ maxWidth: "1000px", width: "100%" }}
      >
        <div
          className="lg:w-auto w-full pr-4 flex flex-col justify-between"
          style={{ minWidth: "300px" }}
        >
          <div className="flex items-start space-x-4">
            <img
              src="https://img.freepik.com/vecteurs-libre/contexte-du-docteur_1270-84.jpg"
              alt="Doctor Avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
              <p className="text-sm text-gray-500">{doctor.location}</p>
              <p className="text-sm text-teal-500 font-semibold">
                Prix : {doctor.price}€
              </p>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Choisissez le type de RDV
            </label>
            <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
              <option>Téléconsultation</option>
              <option>En cabinet</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Choisissez le motif de RDV
            </label>
            <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
              <option>Consultation individuelle - Adultes</option>
              <option>Consultation de suivi</option>
            </select>
          </div>
          <button className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition">
            Prendre RDV
          </button>
        </div>

        <div className="lg:flex-grow w-full">
          <div className="flex items-center justify-between mb-4">
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <FaChevronLeft className="text-gray-600" />
            </button>
            <h4 className="text-lg font-semibold text-gray-700">
              Planning des {visibleDays.length} jours
            </h4>
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>

          <div
            id="days-container"
            className="grid gap-2 mb-4"
            style={{
              gridTemplateColumns: `repeat(${visibleDays.length}, 1fr)`,
            }}
          >
            {visibleDays.map((day, index) => (
              <div key={index} className="text-center">
                <p className="text-md font-bold text-gray-700">{day.day}</p>
                <p className="text-md text-gray-600">
                  {day.date.split(" ")[0]} {day.date.split(" ")[1]}
                </p>
              </div>
            ))}
          </div>

          <div
            className="grid gap-2 rounded-lg p-4 overflow-hidden hover:overflow-y-auto"
            style={{
              gridTemplateColumns: `repeat(${visibleDays.length}, 1fr)`,
              maxHeight: "220px",
            }}
          >
            {visibleDays.map((day, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                {doctor.schedule.length > 0 ? (
                  doctor.schedule.map((time, idx) => (
                    <button
                      key={`${day.day}-${idx}`}
                      className="w-16 px-2 py-1 text-md text-teal-700 rounded-md shadow-md bg-customBg hover:bg-customBg-dark transition"
                    >
                      {time}
                    </button>
                  ))
                ) : (
                  <p className="text-md text-gray-400">–</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
