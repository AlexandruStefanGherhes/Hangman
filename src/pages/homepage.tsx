import Button from "../components/Button"
import { ChildProps,MyState } from "../interfaces/myState";

interface HomepageProps extends ChildProps{
  showGamePage:boolean,
  categories:boolean,
  setCategories:React.Dispatch<React.SetStateAction<MyState>>
}

const  Homepage = ({howTo,setHowTo,categories,setCategories,showGamePage}:HomepageProps) => {
  return (
    <>
    {(!categories && !howTo && !showGamePage) && (<div className="h-screen  flex justify-center items-center">
      <div className="bg-[#343fbab4] w-3/4 rounded-3xl lg:rounded-[3.5rem] md:w-2/4 lg:w-[30%] p-4 relative shadow-[0px_4px_0px_1px_rgba(0,0,0,0.8)]">
        <div className="flex items-center flex-col ">
            <div className="absolute top-[-2.5rem] lg:top-[-5.5rem] left-1/2 transform -translate-x-1/2 w-[13rem] lg:w-[20rem] ">
                <img src="/src/assets/logo.svg" className="w-full" alt="logo" />
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="cursor-pointer flex rounded-full justify-center w-32 h-32 lg:w-44 lg:h-44 bg-gradient-to-b from-gradS to-gradE shadow-[0px_3px_0px_2px_rgba(0,0,0,0.8),inset_0_-2px_4px_rgba(165,40,114,0.9)] mt-24 mb-10 lg:mt-18 lg:mb-14" onClick={()=>setCategories(prevState=>({...prevState,isOpen:!prevState.isOpen}))}>
                <img src="/src/assets/icon-play.svg" className="w-12 lg:w-16" alt="play-icon" />
                </div>
                <Button title="how to play" onClick={() => setHowTo(prevState => ({ ...prevState, isOpen: !prevState.isOpen }))}/>
            </div>
        </div>
      </div>
    </div>)}
    </>
  )
}

export default Homepage
