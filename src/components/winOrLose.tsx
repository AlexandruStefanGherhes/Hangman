import {GameWinOrLost} from '../interfaces/myState'

function WinOrLose({gameWon,gameLost,setGameWon,setGameLost,setCategories,setShowGamePage,setLives,setSelectedLetters}:GameWinOrLost) {
    const continueCase = () =>{
        setGameWon(prevState =>({...prevState,isWon:false}))
        setGameLost(prevState =>({...prevState,isLost:false}))
    }

    const restartOrQuit = () =>{
        setShowGamePage(prevState=>({...prevState,isOpen:!prevState.isOpen}))
        setCategories(prevState => ({...prevState,isOpen:false}))
        setSelectedLetters([])
        setLives(8)
        setGameLost(prevState =>({...prevState,isLost:false}))
        setGameWon(prevState =>({...prevState,isWon:false}))
    }


    

    return (
    <>
    {(gameLost || gameWon) && (<div>
    <div className="h-screen  flex justify-center items-center ">
        <div className="bg-[#343fbab4] w-3/4 rounded-3xl lg:rounded-[3.5rem] p-4 relative shadow-[0px_4px_0px_1px_rgba(0,0,0,0.8)] md:w-3/5 lg:w-1/4 ">
            <div className="flex items-center flex-col ">
                <div className="w-full absolute top-[-3.5rem] left-1/2 transform -translate-x-1/2 flex justify-center">
                    <h1 className="font-mouse  text-8xl bg-gradient-to-b from-[#67B6FF] to-[#FFFFFF] bg-clip-text text-transparent drop-shadow-large md:text-[7rem] ">{gameWon ? "You Win" : "You Lose"}</h1>
                </div>
                <div className="uppercase flex flex-col w-full items-center pt-4 pb-4">
                    <button className="bg-accent text-white mb-8 md:w-3/4 lg:w-2/4 w-5/6 p-2 font-mouse text-3xl rounded-full shadow-[0px_1px_0px_2px_rgba(0,0,0,0.8),inset_0_-2px_4px_rgba(111,168,220,0.8)] uppercase mt-10" onClick={continueCase}>Continue</button>
                    <button className="bg-accent text-white mb-8 md:w-3/4 lg:w-[60%] w-full p-2 font-mouse text-3xl rounded-full shadow-[0px_1px_0px_2px_rgba(0,0,0,0.8),inset_0_-2px_4px_rgba(111,168,220,0.8)] uppercase" onClick={restartOrQuit}>New Category</button>
                    <button className="bg-accent text-white mb-8 md:w-3/4 lg:w-2/4 w-5/6 p-2 font-mouse text-3xl rounded-full shadow-[0px_1px_0px_2px_rgba(0,0,0,0.8),inset_0_-2px_4px_rgba(111,168,220,0.8)] uppercase bg-gradient-to-b from-[#fe71fe] to-[#7199ff]" onClick={restartOrQuit}>Quit Game</button>
                </div>
            </div>
        </div>
    </div>
    </div>)}
    </>
    )
}

export default WinOrLose
