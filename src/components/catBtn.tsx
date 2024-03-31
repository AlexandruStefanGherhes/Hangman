import { CategoryProps } from "../interfaces/myState"
function CatBtn({title,onClick}:CategoryProps) {
  return (
    <button className="bg-accent rounded-2xl text-white p-4 w-full text-3xl md:text-6xl md:rounded-[2.5rem] shadow-[0px_1px_0px_2px_rgba(0,0,0,0.8),inset_0_-2px_4px_rgba(111,168,220,0.8)] uppercase tracking-wide mb-4 hover:bg-opacity-70" onClick={()=>onClick(title)}>
        {title}
    </button>
  )
}

export default CatBtn
