import React, { useState } from "react";
import "./calculatorTwo.css";

const CalculatorTwo = () => {
  const [calc, setCalc] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  // funcion que controla el no poder colocar 2  operadores seguidos ni comenzar con un operador

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
  };

  //funcion para crear los digitos del 1 al 9

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  // funcion para hacer calculos ( con funcion eval )

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  // funcion para borrar el ultimo digito

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  // funcion para borrar todo

  const clearAll = () => {
    setCalc("");
  };

  return (
    <div className="app">
      <div className="container">
        <div className="display">{calc || "0"}</div>
        <div className="operators">
          <button onClick={clearAll}>AC</button>
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>x</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorTwo;
