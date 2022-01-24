import "./Word.scss";
type Props = {
  word: string;
  correctLetters: string[];
};
export const Word = (props: Props) => {
  return (
    <div className="word">
      {props.word.split("").map((letter,i) => (
        <span className="letter" key={i}>
          {props.correctLetters.includes(letter) ? letter : ""}
        </span>
      ))}
    </div>
  );
};
