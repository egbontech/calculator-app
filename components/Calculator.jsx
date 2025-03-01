import React, { useState } from "react";

export default function Calculator() {
    const [input, setInput] = useState("");

    const buttons = [
      "7", "8", "9", "/",
      "4", "5", "6", "*",
      "1", "2", "3", "-",
      "0", ".", "=", "+",
      "C"
    ];
  
    const handleClick = (value) => {
      if (value === "C") {
        setInput("");
      } else if (value === "=") {
        try {
          setInput(eval(input).toString());
        } catch (error) {
          setInput("Error");
        }
      } else {
        setInput((prev) => prev + value);
      }
    };
  
    return (
       <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {buttons.map((val) => (
          <button
            key={val}
            onClick={() => handleClick(val)}
            className={
              val === "C" ? "clear" :
              val === "=" ? "equals" :
              ["+", "-", "*", "/"].includes(val) ? "operator" : ""
            }
          >
            {val}
          </button>
        ))}
      </div>
    </div>
    );  
}
