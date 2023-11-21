import { createContext, useContext, useState } from "react";
import { useFilterProjects } from "@/hooks/useFilterProjects";

export interface ProjectsContextData {
  projectsFiltered: any; // Reemplaza 'any' con el tipo adecuado para 'projectsFiltered'
  setLabelFilter: React.Dispatch<React.SetStateAction<string>>;
}

interface Props {
  children: React.ReactNode[] | React.ReactNode;
}

const ProjectsContext = createContext<ProjectsContextData | undefined>(undefined);

export function ProviderProjectsContext({ children }: Props) {
  const [labelFilter, setLabelFilter] = useState<string>("todos");
  const { projectsFiltered } = useFilterProjects(labelFilter);

  return (
    <ProjectsContext.Provider value={{ projectsFiltered, setLabelFilter }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjectsContext() {
  const context = useContext(ProjectsContext);
  // if (!context) {
  //   throw new Error("useProjectsContext debe ser utilizado dentro de ProviderProjectsContext");
  // }
  return context;
}