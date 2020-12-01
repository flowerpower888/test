import React, { useState, useEffect } from "react";

export const Form = ({ data }) => {
  const [filtered, setFiltered] = useState(data);
  const [inputValue, setInputValue] = useState();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setFiltered(data);
  }, []);

  const handleClick = (e) => {
    if (e.target.id === "length") {
      if (isNaN(+inputValue)) {
        return;
      }
      setFiltered(data.filter((x) => x.length > inputValue));
    } else if (e.target.id === "substr") {
      if (!isNaN(+inputValue)) {
        return;
      }
      setFiltered(
        data.filter((x) =>
          isChecked
            ? x.includes(inputValue)
            : x.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheck = (e) => {
    setIsChecked((isChecked) => !isChecked);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <p>
        <input type="text" name="" id="" onChange={handleChange} />
        <label>
          <input onChange={handleCheck} type="checkbox" name="" />
          case sensitive
        </label>
      </p>
      <p>
        <button type="button" id="length" onClick={handleClick}>
          length
        </button>
        <button type="button" id="substr" onClick={handleClick}>
          substr
        </button>
      </p>
      <ol>{filtered && filtered.map((word) => <li key={word}>{word}</li>)}</ol>
    </form>
  );
};
