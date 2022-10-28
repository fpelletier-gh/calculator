import { MouseEvent } from "react";

export default function Numbers({
  handleNumberClick,
  className,
}: {
  handleNumberClick: (e: MouseEvent<HTMLButtonElement>) => void;
  className: string;
}): JSX.Element {
  const numberArr: string[] = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  return (
    <>
      {numberArr.map((strNumber: string, index: number) => {
        return (
          <button
            id={strNumber}
            key={strNumber}
            onClick={handleNumberClick}
            className={className}
          >
            {index}
          </button>
        );
      })}
    </>
  );
}
