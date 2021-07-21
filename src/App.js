import React, { useState, useMemo, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black"
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);

  const updateNumber = (e) => {
    if (e.target.value === "") {
      setNumber(0);
    } else {
      setNumber(parseInt(e.target.value, 10));
    }
  };

  return (
    <>
      <input type="number" value={number} onChange={(e) => updateNumber(e)} />
      <button onClick={(_) => setDark((prevDark) => !prevDark)}>
        Change theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log("Calling Slow Function");
  for (let i = 0; i < 500000000; i++) {}

  return num * 2;
}
