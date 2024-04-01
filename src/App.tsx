import {useState,useEffect} from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'
import Homepage from './pages/homepage'
import './index.css'
import HowToPlay from './components/howToPlay'
import { MyState,CatState,GameWon,Pause,GameLost } from './interfaces/myState'
import Categories from './components/category'
import {Data} from './interfaces/dataInterface'
import GamePage from './components/gamePage'
import PauseScreen from './components/pauseScreen'
import WinOrLose from './components/winOrLose'

function App() {
  const [howTo,setHowTo] = useState<MyState>({isOpen:false})
  const [categories,setCategories] = useState<MyState>({isOpen:false})
  const [chooseCat,setChooseCat] = useState<CatState>({chooseCat:'Movies'})
  const [showGamePage,setShowGamePage] = useState<MyState>({isOpen:false})
  const [correctLetters,setCorrectLetters] = useState<string[]>([])
  const [selectedLetters,setSelectedLetters] = useState<string[]>([])
  const [lives,setLives] = useState<number>(8)
  const [pause,setPause] = useState<Pause>({isPause:false})
  const [gameWon,setGameWon] = useState<GameWon>({isWon:false})
  const [gameLost,setGameLost] = useState<GameLost>({isLost:false})
  console.log(pause);
  
  useEffect(()=>{
    axios.get<Data>('./data/data.json')
      .then((response:AxiosResponse<Data>)=>{
        // Handle Success
        const filteredData = response.data ? response.data.categories[chooseCat.chooseCat] || []:[]
        const randomData =  filteredData[Math.floor(Math.random() * filteredData.length)]
        setCorrectLetters([...randomData.name.toLocaleUpperCase().split('')])
      })
      .catch((error:AxiosError)=>{
        // Handle Error
        console.log('Error fetching data:', error)
      })
  },[chooseCat])

  return (
    <div className='relative h-screen bg-no-repeat bg-cover bg-mobile md:bg-tablet lg:bg-desktop'>
      <Homepage howTo={howTo.isOpen} setHowTo={setHowTo} categories={categories.isOpen} setCategories={setCategories} showGamePage={showGamePage.isOpen}/>
      <HowToPlay howTo={howTo.isOpen} setHowTo={setHowTo}/>
      <Categories categories={categories.isOpen} setCategories={setCategories} chooseCat={chooseCat.chooseCat} setChooseCat={setChooseCat} setShowGamePage={setShowGamePage}/>
      <GamePage categories={categories.isOpen} correctLetters={correctLetters} setLives={setLives} showGamePage={showGamePage.isOpen} chooseCat = {chooseCat.chooseCat} lives={lives} setGameWon={setGameWon} setGameLost={setGameLost} gameLost={gameLost.isLost} setPause={setPause} pause={pause.isPause} selectedLetters={selectedLetters} setSelectedLetters={setSelectedLetters} gameWon={gameWon.isWon}/>
      <PauseScreen pause={pause.isPause} setPause={setPause} setCategories={setCategories} setShowGamePage={setShowGamePage} setLives={setLives} setSelectedLetters={setSelectedLetters}/>
      <WinOrLose gameWon={gameWon.isWon} gameLost={gameLost.isLost} setGameWon={setGameWon} setGameLost={setGameLost} setCategories={setCategories} setShowGamePage={setShowGamePage} setLives={setLives} setSelectedLetters={setSelectedLetters}/>
    </div>
  )
}

export default App
