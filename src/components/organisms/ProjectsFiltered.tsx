import { useProjectsContext } from "@/context/useProjectsContext"
import { TabButtons } from "../molecules/TabButtons"

export function ProjectsFiltered(){
  const {projectsFiltered} = useProjectsContext()
  return (
    <section>
      <div className="o-container">
        <TabButtons />
        <div>
          {
            projectsFiltered.map(p=>(
              <article key={p.id}>
                <h3>{p.title}</h3>
                <span>{p.category}</span>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  )
}