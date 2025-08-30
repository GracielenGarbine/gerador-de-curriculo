import { useState } from "react";

export interface CVData {
  name: string;
  email: string;
  role: string;
  about: string;
}

export function useCVData() {
    const [data, setData] = useState<CVData>({
        name: "",
        email: "",
        role: "",
        about: "",
    });

    return { data, setData }
}