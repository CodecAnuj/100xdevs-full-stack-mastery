import { useMemo, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let FinalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      FinalCount = FinalCount + i;
    }
    return FinalCount;
  }, [inputValue]);

  return (
    <div>
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder={"Find sum from 1 to n"}
      />{" "}
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter {{ counter }}
      </button>
    </div>
  );
}

export default App;
