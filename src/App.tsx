import FormSection from "./components/FormSection";
import PreviewSection from "./components/PreviewSection";

export default function App() {
  return (
    <div className="min-h-screen grid grid-cols-2 gap-6 p-8 bg-neutral text-dark">
      <FormSection />
      <PreviewSection />
    </div>
  );
}