import { CategoriesState,CatState,MyState } from "../interfaces/myState";
import CatBtn from "./catBtn";

interface ChooseCateg extends CategoriesState{
  chooseCat:string,
  setChooseCat:React.Dispatch<React.SetStateAction<CatState>>,
  setShowGamePage:React.Dispatch<React.SetStateAction<MyState>>  
}

const Categories= ({categories,setCategories,setChooseCat,setShowGamePage}:ChooseCateg) => {
  const handleCategoryTitle = (title:string) =>{
    setChooseCat(prevState=>({...prevState,chooseCat:title}))
    setCategories(prevState => ({ ...prevState, isOpen: !prevState.isOpen }))
    setShowGamePage(prevState=>({...prevState,isOpen: !prevState.isOpen}))
  }
  return (
    <>
    {categories && (<div className="absolute top-0 left-0 bottom-0 right-0 bg-mainT flex flex-col items-center p-6 lg:p-28 font-mouse">
      <div className="how-title flex items-center justify-between md:justify-start w-full">
        <button className="flex align-center justify-center bg-gradient-to-b from-gradS to-gradE rounded-full w-10 h-10  md:w-16 md:h-16" onClick={() => setCategories(prevState => ({ ...prevState, isOpen: !prevState.isOpen }))}>
            <img src="./src/assets/icon-back.svg" className="w-5 md:w-10" alt="arrow-back" />
        </button>
        <div className="font-mouse text-4xl text-white md:text-8xl md:ml-[18%] lg:ml-[27%] lg:text-9xl">Pick a category</div>
      </div>
      <div className="flex flex-col w-full h-3/4 justify-between mt-16 md:grid md:grid-rows-3 md:grid-cols-2 md:gap-8 lg:grid-rows-2 lg:grid-cols-3">
        <CatBtn title={"Movies"} onClick={handleCategoryTitle}/>
        <CatBtn title={"TV Shows"} onClick={handleCategoryTitle}/>
        <CatBtn title={"Countries"} onClick={handleCategoryTitle}/>
        <CatBtn title={"Capital Cities"} onClick={handleCategoryTitle}/>
        <CatBtn title={"Animals"} onClick={handleCategoryTitle}/>
        <CatBtn title={"Sports"} onClick={handleCategoryTitle}/>
      </div>
    </div>)}
    </>
  )
  
}

export default Categories
