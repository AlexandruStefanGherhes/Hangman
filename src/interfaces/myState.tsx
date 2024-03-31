interface MyState {
    isOpen:boolean
}

interface CatState {
  chooseCat:string
}

interface ChildProps {
    howTo: boolean;
    setHowTo: React.Dispatch<React.SetStateAction<MyState>>;
  }

interface CategoriesState {
    categories: boolean;
    setCategories:React.Dispatch<React.SetStateAction<MyState>>
  }

interface ButtonProps {
    title: string;
    onClick: () => void; 
  }

interface CategoryProps{
  title:string;
  onClick:(title:string) => void
}


interface Pause{
  isPause:boolean
}

interface GamePause {
  pause:boolean
  setPause:React.Dispatch<React.SetStateAction<Pause>>
  setCategories:React.Dispatch<React.SetStateAction<MyState>>
  setShowGamePage:React.Dispatch<React.SetStateAction<MyState>>
  setLives:React.Dispatch<React.SetStateAction<number>>
  setSelectedLetters:React.Dispatch<React.SetStateAction<string[]>>
}

interface GameWon {
  isWon:boolean
}

interface GameLost{
  isLost:boolean
}

interface GameWinOrLost{
  gameWon:boolean,
  gameLost:boolean,
  setGameWon:React.Dispatch<React.SetStateAction<GameWon>>
  setGameLost:React.Dispatch<React.SetStateAction<GameLost>>
  setCategories:React.Dispatch<React.SetStateAction<MyState>>
  setShowGamePage:React.Dispatch<React.SetStateAction<MyState>>
  setLives:React.Dispatch<React.SetStateAction<number>>
  setSelectedLetters:React.Dispatch<React.SetStateAction<string[]>>
}
  
export type{
  GameWinOrLost,
  GameLost,
  GamePause,
  Pause,
  GameWon,
  MyState,
  CatState,
  ChildProps,
  ButtonProps,
  CategoriesState,
  CategoryProps
  }
