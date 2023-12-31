import React, { useState } from "react";
import("./App.css");

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" className="display" value={result} />
      </div>
      <div className="keypad">
        <button className="operator" name="+" onClick={handleClick}>
          +
        </button>
        <button className="operator" name="-" onClick={handleClick}>
          -
        </button>
        <button className="operator" name="*" onClick={handleClick}>
          *
        </button>
        <button className="operator" name="/" onClick={handleClick}>
          /
        </button>

        <div className="Btn">
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
        </div>
        <div className="Btn">
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
        </div>
        <div className="Btn">
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
        </div>
        <button className="clear" onClick={clear}>
          Clear
        </button>
        <button className="equal" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
