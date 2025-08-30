import { useState } from "react";
import { CVData } from "../hooks/useCVData";

interface FormProps {
  data: CVData;
  setData: React.Dispatch<React.SetStateAction<CVData>>;
}

export default function FormSection({ data, setData }: FormProps) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4 text-gray-500">
      <h2 className="text-2xl font-bold text-primary mb-4">Preencha seus dados</h2>

      <label className="flex flex-col gap-1 text-sm text-gray-700">
        <span className="text-sm text-gray-700">Nome</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-primary"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm text-gray-700">
        <span className="text-sm text-gray-700">Email</span>
        <input
          type="email"
          placeholder="E-mail"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
        />
        </label>

      <label className="flex flex-col gap-1 text-sm text-gray-700">
        <span className="text-sm text-gray-700">Cargo</span>
        <input
          type="text"
          value={role}
          onChange={(e) => setData({ ...data, role: e.target.value })}
          className="border rounded-lg p-2 focus:ring-2 focus:ring-secondary"
        />
      </label>
      <textarea
          placeholder="Sobre você"
          value={data.about}
          onChange={(e) => setData({ ...data, about: e.target.value })}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary"
        />


      <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition"
      >Salvar Currículo</button>
      <button className="border-2 border-primary text-white px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition"
      >Gerar PDF</button>
    </div>
  );
}