import { useProjectsContext } from "@/context/useProjectsContext";
import Button from "../atoms/Button";

const buttons=[
  {id:"1512154",label:'todos'},
  {id:"1512156",label:'diseño'},
  {id:"1512157",label:'analitica'}
]
export function TabButtons(){
  const {setLabelFilter}=useProjectsContext()
  return (
    <div>
      <div style={{display:'flex',justifyContent:'center',gap:'1rem'}}>
        {buttons.map(({id,label})=>(<Button key={id} mode="white" onAction={()=>setLabelFilter(label)}>{label}</Button>))}
      </div>
    </div>
  )
}