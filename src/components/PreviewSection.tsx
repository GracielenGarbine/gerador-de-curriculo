export default function PreviewSection() {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 text-gray-500">
      <h2 className="text-xl font-bold text-secondary mb-4 text-gray-700">
        Preview do Currículo
      </h2>
      <p className="text-gray-700 mb-4">
        Preencha os campos ao lado para ver o preview do seu currículo aqui.
      </p>
      <button className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
        Exportar PDF
      </button>
    </div>
  );
}