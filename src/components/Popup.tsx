import { useEffect } from "react";
import { checkWin } from "../helpers/helpers";
import "./Popup.scss";
type Props = {
  correctLetters: string[];
  wrongLetters: string[];
  selectedWord: string;
  setPlayable: any
  playAgain: any
}
export const Popup = (props: Props) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
  if(checkWin(props.correctLetters, props.wrongLetters, props.selectedWord) === 'win') {
    finalMessage = 'Congratulations! You won!';
    finalMessageRevealWord = `The word was: ${props.selectedWord}`;
    playable = false;
  } else if(checkWin(props.correctLetters, props.wrongLetters, props.selectedWord) === 'lose') {
    finalMessage = 'Sorry! You lost!';
    finalMessageRevealWord = `The word was: ${props.selectedWord}`;
    playable = false;
  }

  useEffect(() => props.setPlayable(playable));
  
  return (
    <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={props.playAgain}>Play Again</button>
      </div>
    </div>
  );
};
