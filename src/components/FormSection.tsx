import { useState } from "react";

export default function FormSection() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-primary">Dados Pessoais</h2>

      <label className="flex flex-col gap-1">
        <span className="text-sm text-gray-700">Nome</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg p-2 focus:ring-2 focus:ring-primary"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm text-gray-700">Cargo</span>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border rounded-lg p-2 focus:ring-2 focus:ring-secondary"
        />
      </label>
    </div>
  );
}