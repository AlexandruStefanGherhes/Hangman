import { ChildProps } from "../interfaces/myState";

const HowToPlay = ({howTo,setHowTo}: ChildProps) => {
  return (
    <>
    {howTo && (<div className="absolute top-0 left-0 bottom-0 right-0  bg-mainT flex flex-col items-center p-6 font-mouse lg:p-10">
      <div className="how-title flex items-center justify-between md:justify-start w-full lg:w-5/6">
        <button className="flex align-center justify-center bg-gradient-to-b from-gradS to-gradE rounded-full w-10 h-10 md:w-16 md:h-16 lg:ml-4 lg:w-20 lg:h-20" onClick={() => setHowTo(prevState => ({ ...prevState, isOpen: !prevState.isOpen }))}>
            <img src="./src/assets/icon-back.svg" className="w-6 md:w-10 lg:w-12" alt="arrow-back" />
        </button>
        <div className="font-mouse text-4xl text-white md:text-8xl md:ml-[22%] lg:ml-[30%] lg:text-[7rem]">How to play</div>
      </div>
      <div className="how-cards flex flex-col items-center justify-between lg:justify-around md:justify-evenly mt-14 h-full lg:flex-row lg:w-5/6">
        <div className="how-card bg-white p-6 rounded-3xl flex md:flex md:p-8 lg:flex-col lg:items-center flex-[.3]">
            <div className="card-title flex md:items-center align-self-start">
                <p className="text-accent pr-4 text-xl md:text-8xl md:mr-4 mb-10">01</p>
            </div>
            <div className="flex flex-col lg:items-center lg:h-60">
              <h1 className="text-main text-2xl md:text-6xl md:mb-6 uppercase">Choose a category</h1>
              <p className="text-mainT md:text-2xl lg:text-center">First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.</p> 
            </div>
        </div>
        <div className="how-card bg-white p-6 rounded-3xl flex  md:flex md:p-8 lg:flex-col lg:items-center flex-[.3]">
            <div className="card-title flex md:items-center align-self-start">
                <p className="text-accent pr-4 text-xl md:text-8xl md:mr-4 mb-10 ">02</p>
            </div>
            <div className="flex flex-col lg:items-center lg:h-60">
              <h1 className="text-main text-2xl md:text-6xl md:mb-6 uppercase">Guess letters</h1>
              <p className="text-mainT md:text-2xl lg:text-center">Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health which empties after eigths incorrect guesses.</p>
            </div>
        </div>
        <div className="how-card bg-white p-6 rounded-3xl flex md:w-full  md:flex md:p-8 lg:flex-col lg:items-center lg:w-auto  flex-[.3]">
            <div className="card-title flex md:items-center align-self-start">
                <p className="text-accent pr-4 text-xl md:text-8xl md:mr-4 mb-10">03</p>
            </div>
            <div className="flex flex-col lg:items-center lg:h-60">
              <h1 className="text-main text-2xl md:text-6xl md:mb-6 uppercase">Win or lose</h1>
              <p className="text-mainT md:text-2xl lg:text-center">You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word you lose.</p>
            </div>
        </div>
      </div>
    </div>)}
    </>
  )
  
}

export default HowToPlay
