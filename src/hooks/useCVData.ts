import { useState } from "react";

export interface Skill {
  id: string;
  name: string;
  level: "Básico" | "Intermediário" | "Avançado";
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface CVData {
  name: string;
  email: string;
  role: string;
  about: string;
}
export interface CVData {
  name: string;
  email: string;
  role: string;
  about: string;
  skills: Skill[];
  experiences: Experience[];
}
export function useCVData() {
    const [data, setData] = useState<CVData>({
        name: "",
        email: "",
        role: "",
        about: "",
        skills: [],
        experiences: [], 
    });

    return { data, setData }
}