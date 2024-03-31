interface GameWordProps{
  letter:string,
  selectedLetters:string[]
}
const GameWord = ({letter,selectedLetters}:GameWordProps) => {
  return (
    <div className={`${selectedLetters.includes(letter) ? "bg-accent text-white" : "bg-white text-transparent bg-opacity-10"} text-3xl md:text-5xl p-3 md:p-6 rounded-xl uppercase shadow-inner mr-1 md:mr-3 md:mb-3 lg:rounded-2xl`}>
      {letter}
    </div>
  )
}

export default GameWord
