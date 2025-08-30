import FormSection from "./components/FormSection";
import PreviewSection from "./components/PreviewSection";
import { useCVData } from "./hooks/useCVData";

export default function App() {
   const { data, setData } = useCVData();
  return (
    <div className="min-h-screen grid grid-cols-2 gap-6 p-8 bg-neutral text-dark">
      <FormSection data={data} setData={setData}/>
      <PreviewSection data={data}/>
    </div>
  );
}
