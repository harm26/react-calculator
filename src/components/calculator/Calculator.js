import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secontNumber, setSecontNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);

  const currentNumber = (val) => {
    if (!operation) {
      setFirstNumber(firstNumber + val);
    } else {
      setSecontNumber(secontNumber + val);
    }
  };

  const currentOperation = (val) => {
    setOperation(val);
  };

  const clearAll = () => {
    setFirstNumber("");
    setSecontNumber("");
    setOperation("");
    setResult(0);
  };

  const clearCurrentNumber = () => {
    setFirstNumber("");
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        setResult(Number(firstNumber) + Number(secontNumber));

        setFirstNumber("");
        setSecontNumber("");
        setOperation("");

        break;
      case "-":
        setResult(Number(firstNumber) - Number(secontNumber));
        setFirstNumber("");
        setSecontNumber("");
        setOperation("");

        break;
      case "x":
        setResult(Number(firstNumber) * Number(secontNumber));
        setFirstNumber("");
        setSecontNumber("");
        setOperation("");

        break;
      case "/":
        setResult(Number(firstNumber) / Number(secontNumber));
        setFirstNumber("");
        setSecontNumber("");
        setOperation("");

        break;
      default:
        return;
    }
    setFirstNumber("");
    setSecontNumber("");
    setOperation("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="output">
          <div className="previous">
            {operation ? firstNumber + operation : ""}
          </div>
          <div className="current">
            {result ? result : !operation ? firstNumber : secontNumber}
          </div>
        </div>

        <button onClick={clearAll} className="buttons span">
          AC
        </button>
        <button onClick={clearCurrentNumber} className="buttons">
          C
        </button>
        <button
          onClick={() => {
            currentOperation("/");
          }}
          className="buttons"
        >
          /
        </button>
        <button
          onClick={() => {
            currentNumber(7);
          }}
          className="buttons"
        >
          7
        </button>
        <button
          onClick={() => {
            currentNumber(8);
          }}
          className="buttons"
        >
          8
        </button>
        <button
          onClick={() => {
            currentNumber(9);
          }}
          className="buttons"
        >
          9
        </button>
        <button
          onClick={() => {
            currentOperation("x");
          }}
          className="buttons"
        >
          X
        </button>
        <button
          onClick={() => {
            currentNumber(4);
          }}
          className="buttons"
        >
          4
        </button>
        <button
          onClick={() => {
            currentNumber(5);
          }}
          className="buttons"
        >
          5
        </button>
        <button
          onClick={() => {
            currentNumber(6);
          }}
          className="buttons"
        >
          6
        </button>
        <button
          onClick={() => {
            currentOperation("-");
          }}
          className="buttons"
        >
          -
        </button>
        <button
          onClick={() => {
            currentNumber(1);
          }}
          className="buttons"
        >
          1
        </button>
        <button
          onClick={() => {
            currentNumber(2);
          }}
          className="buttons"
        >
          2
        </button>
        <button
          onClick={() => {
            currentNumber(3);
          }}
          className="buttons"
        >
          3
        </button>
        <button
          onClick={() => {
            currentOperation("+");
          }}
          className="buttons"
        >
          +
        </button>
        <button
          onClick={() => {
            currentNumber(0);
          }}
          className="buttons"
        >
          0
        </button>
        <button
          onClick={() => {
            currentNumber(".");
          }}
          className="buttons"
        >
          .
        </button>
        <button onClick={getResult} className="buttons span-two">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
