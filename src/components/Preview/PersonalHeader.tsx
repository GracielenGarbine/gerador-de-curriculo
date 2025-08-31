import React from "react";
import type { CVData } from "../../hooks/useCVData";

interface PersonalHeaderProps {
  data: CVData;
}

export default function PersonalHeader({ data }: PersonalHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-800">
        {data.name || <span className="text-gray-400">Seu Nome Completo</span>}
      </h1>
      <h2 className="text-xl font-light text-gray-600 mb-2">
        {data.role || <span className="text-gray-400">Cargo Desejado</span>}
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        {data.email || <span className="text-gray-400">seu.email@exemplo.com</span>}
      </p>
      <div className="prose max-w-none text-gray-700">
        <p>{data.about || <span className="italic text-gray-400">Escreva um resumo sobre suas qualificações e objetivos...</span>}</p>
      </div>
      <hr className="my-6 border-t-2 border-gray-200" />
    </div>
  );
}