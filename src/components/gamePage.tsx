import { Pause,GameLost } from "../interfaces/myState";
import { useEffect } from "react";
import GameWord from "./gameWord";
import LetterBtn from "./letterBtn";

interface GameState{
    isWon:boolean
}

interface GameInterface {
    gameLost:boolean,
    gameWon:boolean,
    pause:boolean
    selectedLetters:string[]
    lives:number
    chooseCat:string
    showGamePage:boolean,
    categories:boolean,
    correctLetters:string[],
    setGameWon:React.Dispatch<React.SetStateAction<GameState>>
    setGameLost:React.Dispatch<React.SetStateAction<GameLost>>
    setLives:React.Dispatch<React.SetStateAction<number>>
    setPause:React.Dispatch<React.SetStateAction<Pause>>
    setSelectedLetters:React.Dispatch<React.SetStateAction<string[]>>
}

const GamePage = ({correctLetters,setLives,showGamePage,chooseCat,lives,setGameWon,gameWon,setGameLost,gameLost,setPause,pause,selectedLetters,setSelectedLetters}: GameInterface) => {
    // const [selectedLetters,setSelectedLetters] = useState<string[]>([])
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","'"];
    console.log(correctLetters);
    // console.log("Selected letters:", selectedLetters);
    
    useEffect(()=>{
        checkResult()
    },[selectedLetters])
    
    const checkResult = () =>{
        // console.log("lives: ",lives);
        // removing empty strings from the array of letters
        const arr1WithoutSpaces = correctLetters.filter(item=> item!== " ")
        //Sorting arrays alphabetically
        const sorted1 = arr1WithoutSpaces.slice().sort()
        const sorted2 = selectedLetters.slice().sort()
        //  here we have added all letters to a set to not have the same letter multiple times
        const letterSet = new Set()
        let sorted1Final:any[] = []
        sorted1.forEach(item=>letterSet.add(item))
        letterSet.forEach(item=>sorted1Final.push(item))

        const filteredArray = sorted1Final.filter(item=> sorted2.includes(item))

        if (JSON.stringify(sorted1Final) == JSON.stringify(filteredArray)) {
            setGameWon(prevState=>({...prevState,isWon:!prevState.isWon}))
            console.log('victory');
        }else if(lives == 0){
            console.log("You lost");
            setGameLost(prevState=>({...prevState,isLost:!prevState.isLost}))
        }
    }

    const pressBtn = (title:string) =>{
        // Check if the selected letter has not been already selected
        if(!selectedLetters.includes(title)){
            // Check if the selected letter is not in the correct letters
            if(!correctLetters.includes(title)){
                // If not, reduce lives
                setLives(prevLives=>prevLives - 1)
            }
            // Add the selected letter to the array of selected letters
            setSelectedLetters(prevState=>[...prevState,title]);
        }
    }
    
    return (
    <>
    {showGamePage && (<div className="absolute top-0 left-0 bottom-0 right-0 bg-mainT flex flex-col items-center p-6 font-mouse">
        <div className="how-title flex items-center w-full">
            <button className="flex align-center justify-center bg-gradient-to-b from-gradS to-gradE rounded-full w-10 h-10 md:w-16  md:mr-4 md:h-16" onClick={()=>setPause((prevState)=>({isPause:!prevState.isPause}))} disabled={gameWon || gameLost}>
                <img src="/assets/icon-menu.svg" className="w-5 md:w-9 " alt="arrow-back" />
            </button>
            <div className="font-mouse text-4xl text-white ml-4 md:text-8xl">{chooseCat}</div>
            <div className="bg-white w-16 h-4 rounded-2xl flex items-center p-1.5 ml-auto">
                <div className={`w-full h-2 rounded-2xl  ${lives < 4 ? "bg-red" : "bg-main"}`} style={{ width: `${((lives / 8)) * 100}%` }} ></div>
            </div>
            <img src="/assets/icon-heart.svg" alt="heart-logo" className="ml-4 w-8 md:w-14"/>
        </div>

        <div className="h-full w-full flex flex-col items-center justify-around lg:w-1/2">
            <div className="guess-word flex flex-wrap items-center justify-center mt-10" >
            {correctLetters.map((letter,index)=>{
                return  <GameWord key={index} letter={letter} selectedLetters={selectedLetters}/>
            })}
            </div>
            <div className="inline-grid grid-cols-9 grid-rows-3 gap-1.5 md:gap-3 lg:gap-6">
            {alphabet.map((letter,index)=>{
                return <LetterBtn key={index} letter={letter} onClick={pressBtn} selectedLetters={selectedLetters} lives={lives} pause={pause} gameWon={gameWon}/>
            })}
            </div>
        </div>
    </div>)}
    </>
    )
}

export default GamePage
