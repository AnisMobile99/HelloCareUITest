import { Button } from "~/components/Button";
import { AboutCard } from "./AboutCard";
import { aboutData } from "./AboutData";
import { AboutMedecin } from "./AboutMedecin";

export const About: React.FC = () => {
  return (
    <section className="mt-16 w-full max-w-6xl mx-auto text-center px-4">
      {/* Titre */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        LA TÉLÉCONSULTATION SIMPLE, RAPIDE ET EFFICACE
      </h2>

      {/* Cards */}
      <div
        className="grid gap-6 mb-8"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {aboutData.map((card, index) => (
          <AboutCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      {/* Boutons */}
      <div className="flex justify-center space-x-4">
        <Button
          label="Comment ça marche ?"
          onClick={() => console.log("Comment ça marche ?")}
        />
        <Button label="Tarifs" onClick={() => console.log("Tarifs")} />
      </div>

      <AboutMedecin />
    </section>
  );
};
