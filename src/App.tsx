import "./App.scss";
import { useState, MouseEvent } from "react";
import { evaluate, isNaN } from "mathjs";

function App() {
  const [display, setDisplay] = useState<string>("0");
  const [hasDecimal, setHasDecimal] = useState<boolean>(false);

  function validateOperator(operator: string): void {
    const isLastCharNumber: number = parseInt(display[display.length - 1]);

    if (isNaN(isLastCharNumber) && operator !== "-") {
      setDisplay((display) => display.replace(/\D*$/, operator));
    } else {
      setDisplay((display) => display + operator);
    }
    setHasDecimal(false);
  }

  function handleNumberClick(e: MouseEvent<HTMLButtonElement>) {
    const input = e.target as HTMLElement;
    if (display !== "0") {
      const newNum: string = display + input.innerText;
      setDisplay(newNum);
    } else {
      setDisplay(input.innerText);
    }
  }

  function handleOperatorClick(e: MouseEvent<HTMLButtonElement>) {
    const input = e.target as HTMLElement;
    const operator: string = input.innerText;
    validateOperator(operator);
  }

  function handleDecimalClick() {
    if (hasDecimal) return;
    setDisplay(display + ".");
    setHasDecimal(true);
  }

  function handleEqualsClick() {
    const total: number = evaluate(display);
    setDisplay(total.toString());
  }

  function handleClearClick() {
    setDisplay("0");
    setHasDecimal(false);
  }

  return (
    <main className="App">
      <section id="display">{display}</section>
      <button
        id="equals"
        onClick={handleEqualsClick}
        className="button bg-teal"
      >
        =
      </button>
      <button
        id="zero"
        onClick={handleNumberClick}
        className="button bg-lightgray"
      >
        0
      </button>
      <button
        id="one"
        onClick={handleNumberClick}
        className="button bg-lightgray"
      >
        1
      </button>
      <button
        id="two"
        onClick={handleNumberClick}
        className="button bg-lightgray"
      >
        2
      </button>
      <button
        id="three"
        onClick={handleNumberClick}
        className="button bg-lightgray"
      >
        3
      </button>
      <button
        id="four"
        onClick={handleNumberClick}
        className="button bg-lightgray"
      >
        4
      </button>
      <button
        id="five"
        onClick={handleNumberClick}
        className="button bg-lightgray"
      >
        5
      </button>
      <button
        id="six"
        onClick={handleNumberClick}
        className="button bg-lightgray"
      >
        6
      </button>
      <button
        id="seven"
        onClick={handleNumberClick}
        className="button bg-lightgray"
      >
        7
      </button>
      <button
        id="eight"
        onClick={handleNumberClick}
        className="button bg-lightgray"
      >
        8
      </button>
      <button
        id="nine"
        onClick={handleNumberClick}
        className="button bg-lightgray"
      >
        9
      </button>
      <button id="add" onClick={handleOperatorClick} className="button bg-teal">
        +
      </button>
      <button
        id="subtract"
        onClick={handleOperatorClick}
        className="button bg-teal"
      >
        -
      </button>
      <button
        id="multiply"
        onClick={handleOperatorClick}
        className="button bg-teal"
      >
        *
      </button>
      <button
        id="divide"
        onClick={handleOperatorClick}
        className="button bg-teal"
      >
        /
      </button>
      <button id="decimal" onClick={handleDecimalClick} className="button">
        .
      </button>
      <button id="clear" onClick={handleClearClick} className="button bg-red">
        AC
      </button>
    </main>
  );
}

export default App;
