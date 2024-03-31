
import { ButtonProps } from "../interfaces/myState"

function Button({title,onClick}:ButtonProps) {
  return (
    <button className="bg-accent text-white mb-8 w-5/6 lg:w-3/6 p-2 hover:bg-opacity-50 font-mouse text-3xl rounded-full shadow-[0px_1px_0px_2px_rgba(0,0,0,0.8),inset_0_-2px_4px_rgba(111,168,220,0.8)] uppercase" onClick={onClick}>{title}</button>
  )
}

export default Button
