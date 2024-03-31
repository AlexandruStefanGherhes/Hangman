interface ClickableLetter {
  gameWon:boolean,
  pause:boolean
  lives:number
  key:number,
  letter:string,
  selectedLetters:string[],
  onClick:(letter:string)=> void;
}

const LetterBtn = ({letter,onClick,selectedLetters,lives,pause,gameWon}: ClickableLetter)=> {
  return (
    <button className={`${selectedLetters.includes(letter) ? "text-main bg-opacity-15 bg-white" : "text-main bg-white "} rounder-xl  text-3xl md:text-5xl p-2 md:p-5 rounded-lg cursor-pointer lg:rounded-2xl lg:w-27 ${selectedLetters.includes(letter) ? "hover:bg-white hover:bg-opacity-15 hover:hover:text-main" : "hover:bg-accent " }  hover:text-white`} onClick={()=>onClick(letter)}  disabled={lives == 0 || pause || gameWon ? true : false}>
      {letter}
    </button>
  )
}

export default LetterBtn
