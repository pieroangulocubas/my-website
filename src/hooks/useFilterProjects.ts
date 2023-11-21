import {useEffect, useState} from 'react'
import projects from '@/constants/projects'
export function useFilterProjects(label:string){
  const [projectsFiltered,setProjectsFiltered]=useState(projects)
  useEffect(()=>{
    if(label === 'todos'){
      setProjectsFiltered(projects)
    }else{
      const projectsFilteredList=projects.filter(p=>p.category === label)
      setProjectsFiltered(projectsFilteredList)
    }
  },[label])

  return {
    projectsFiltered
  }
}