import "./WrongLetters.scss";
type Props = {
  wrongLetters: string[];
};
export const WrongLetters = (props: Props) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {props.wrongLetters.length > 0 && <p>Wrong</p>}
        {props.wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            (prev:any, curr) => (prev == null ? [curr] : [prev, ", ", curr]),
            null
          )}
      </div>
      <div className="wrong-letters"></div>
    </div>
  );
};
