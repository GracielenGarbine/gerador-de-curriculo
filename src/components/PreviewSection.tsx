import React from "react";
import type { CVData } from "../hooks/useCVData";

interface PreviewProps {
  data: CVData;
}

export default function PreviewSection({ data }: PreviewProps) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 text-gray-500">
      <h2 className="text-2xl font-bold text-secondary mb-4 text-gray-700">
        Preview do Currículo
      </h2>
      <p className="text-xl font-semibold text-primary">{data.name || "Seu Nome"}</p>
      <p className="text-gray-600">{data.email || "seuemail@email.com"}</p>
      <p className="italic text-gray-700">{data.role || "Cargo desejado"}</p>

      <div className="mt-4">
        <p className="text-gray-700">{data.about || "Escreva um resumo sobre você aqui..."}</p>
      </div>
      <button className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
        Exportar PDF
      </button>
    </div>
  );
}