import React from "react";
import PersonalHeader from "./PersonalHeader";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import type { CVData } from "../../hooks/useCVData";

interface CVPreviewProps {
  data: CVData;
}

export default function CVPreview({ data }: CVPreviewProps) {
  const hasContent = data.name || data.email || data.role || data.about || data.skills.length > 0 || data.experiences.length > 0;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 h-full overflow-y-auto">
      <h2 className="text-3xl font-bold text-center text-secondary mb-6">
        Preview do Currículo
      </h2>
      <hr className="mb-8 border-gray-300" />

      {hasContent ? (
        <>
          <PersonalHeader data={data} />
          {data.skills.length > 0 && <SkillsSection skills={data.skills} />}
          {data.experiences.length > 0 && <ExperienceSection experiences={data.experiences} />}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 p-10">
          <p className="text-xl">Seu currículo aparecerá aqui em tempo real.</p>
          <p className="text-lg mt-2">Preencha o formulário ao lado para começar.</p>
        </div>
      )}
    </div>
  );
}