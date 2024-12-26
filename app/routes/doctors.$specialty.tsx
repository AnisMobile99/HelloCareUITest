import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { SearchBar } from "~/views/SearchBar/SearchBar";
import { useResponsiveDevice } from "~/hooks/useResponsiveDevice";
import { doctorsBySpecialty } from "~/utils/doctorsData";
import { DoctorCard } from "~/views/Doctor/DoctorCard";
import { useState, useEffect } from "react";
import { useSearchContext } from "~/contexts/SearchContext";
import { Doctor } from "~/types/database";

export const loader = async ({ params }: { params: { specialty: string } }) => {
  const { specialty } = params;

  return json({
    specialty,
    doctors: doctorsBySpecialty[specialty] || [],
  });
};

export default function SpecialtyPage() {
  const { specialty, doctors } = useLoaderData<{
    specialty: string;
    doctors: Doctor[];
  }>();
  const isMobile = useResponsiveDevice();
  const [nameFilter, setNameFilter] = useState("");
  const [postalCodeFilter, setPostalCodeFilter] = useState("");
  const { setSearchParams } = useSearchContext();

  useEffect(() => {
    setSearchParams({ specialty, name: nameFilter });
  }, [specialty, nameFilter, setSearchParams]);

  const filteredDoctors = doctors.filter(
    (doctor) =>
      (!nameFilter ||
        doctor.name.toLowerCase().includes(nameFilter.toLowerCase())) &&
      (!postalCodeFilter || doctor.location.includes(postalCodeFilter))
  );

  return (
    <section className="w-full px-4 py-40">
      {!isMobile && (
        <div className="flex justify-center mb-8">
          <SearchBar
            showPostalCode={true}
            nameFilter={nameFilter}
            postalCodeFilter={postalCodeFilter}
            onNameChange={setNameFilter}
            onPostalCodeChange={setPostalCodeFilter}
          />
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-6 capitalize text-center">
        {specialty} : Médecins disponibles
      </h2>
      {doctors.length === 0 ? (
        <p className="text-center text-gray-600">
          Désolé, aucun médecin n'est disponible pour la spécialité{" "}
          <strong>{specialty}</strong>.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <p className="text-center text-gray-600">
              Aucun praticien trouvé avec les filtres appliqués.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
