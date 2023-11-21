import HeroProjects from "@/components/organisms/HeroProjects"
import { ProjectsFiltered } from "@/components/organisms/ProjectsFiltered"
import Reviews from "@/components/organisms/Reviews"
import { ProviderProjectsContext } from "@/context/useProjectsContext"

function projects(){
  return (
    <ProviderProjectsContext>
      <main>
        <HeroProjects />
        <ProjectsFiltered />
        <Reviews />
      </main>
    </ProviderProjectsContext>
  )
}
export default projects