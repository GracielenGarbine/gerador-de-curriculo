import type { Experience } from "../../hooks/useCVData";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  if (experiences.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Experiências Profissionais</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id}>
            <h3 className="text-lg font-semibold text-gray-800">{exp.role}</h3>
            <p className="text-sm text-gray-600 font-medium">
              {exp.company} | {exp.period}
            </p>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}