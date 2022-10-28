import "./App.scss";
import Numbers from "./components/numbers";
import { useState, MouseEvent } from "react";
import { evaluate, isNaN } from "mathjs";

function App(): JSX.Element {
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
      <Numbers
        handleNumberClick={handleNumberClick}
        className="button bg-ligthgray"
      />
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
