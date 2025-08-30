import React from "react";
import type { Skill } from "../../hooks/useCVData";

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  if (skills.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Habilidades</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {skills.map((skill) => (
          <li key={skill.id} className="flex justify-between items-center">
            <span>{skill.name}</span>
            <span className="text-xs text-gray-500 font-medium px-2 py-1 rounded-full bg-gray-200">
              {skill.level}
            </span>
          </li>
        ))}
      </ul>
      <hr className="my-6 border-t-2 border-gray-200" />
    </div>
  );
}