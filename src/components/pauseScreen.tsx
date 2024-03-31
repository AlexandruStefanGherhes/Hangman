import {GamePause} from '../interfaces/myState'

function PauseScreen({setCategories,setShowGamePage,setPause,setLives,setSelectedLetters,pause}:GamePause) {
    const newCategory = () =>{
        setShowGamePage(prevState=>({...prevState,isOpen:!prevState.isOpen}))
        setCategories(prevState => ({...prevState,isOpen:!prevState.isOpen}))
        setPause(preValue=>({...preValue,isPause:!preValue.isPause}))
        setSelectedLetters([])
        setLives(8)
    }

    const quitGame = () =>{
        setShowGamePage(prevState=>({...prevState,isOpen:!prevState.isOpen}))
        setCategories(prevState => ({...prevState,isOpen:false}))
        setPause(preValue=>({...preValue,isPause:!preValue.isPause}))
        setSelectedLetters([])
        setLives(8)
    }

    return (
    <>
    {pause && (<div>
    <div className="h-screen flex justify-center items-center">
        <div className="bg-[#343fbab4] w-3/4 rounded-3xl lg:rounded-[3.5rem] p-4 relative shadow-[0px_4px_0px_1px_rgba(0,0,0,0.8)] md:w-3/5 lg:w-1/4">
            <div className="flex items-center flex-col ">
                <div className="absolute top-[-3.5rem] left-1/2 transform -translate-x-1/2 w-45">
                    <h1 className="font-mouse  text-8xl bg-gradient-to-b from-[#67B6FF] to-[#FFFFFF] bg-clip-text text-transparent drop-shadow-large md:text-[7rem]">Paused</h1>
                </div>
                <div className="uppercase flex flex-col w-full items-center pt-4 pb-4 ">
                    <button className="bg-accent text-white mb-8 w-5/6 md:w-3/4 lg:w-2/4 p-2 font-mouse text-3xl rounded-full shadow-[0px_1px_0px_2px_rgba(0,0,0,0.8),inset_0_-2px_4px_rgba(111,168,220,0.8)] uppercase mt-10 hover:bg-opacity-80" onClick={()=>setPause(preValue=>({...preValue,isPause:!preValue.isPause}))}>Continue</button>
                    <button className="bg-accent text-white mb-8 w-full md:w-3/4 lg:w-[60%] p-2 font-mouse text-3xl rounded-full shadow-[0px_1px_0px_2px_rgba(0,0,0,0.8),inset_0_-2px_4px_rgba(111,168,220,0.8)] uppercase hover:bg-opacity-80" onClick={newCategory}>New Category</button>
                    <button className="bg-accent text-white mb-8 w-5/6 md:w-3/4 lg:w-2/4 p-2 font-mouse text-3xl rounded-full shadow-[0px_1px_0px_2px_rgba(0,0,0,0.8),inset_0_-2px_4px_rgba(111,168,220,0.8)] uppercase bg-gradient-to-b from-[#fe71fe] to-[#7199ff] hover:bg-opacity-80" onClick={quitGame}>Quit Game</button>
                </div>
            </div>
        </div>
    </div>
    </div>)}
    </>
    )
}

export default PauseScreen
