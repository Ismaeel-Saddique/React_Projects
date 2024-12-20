import { useState } from "react";

function Counter() {
    let [counter, setCounter] = useState(0);
  
    const addValue = () => {
      if (counter < 20) {
        counter = counter + 1;
        setCounter(counter);
      }
    };
  
    const removeValue = () => {
      if (counter > 0) {
        counter = counter - 1;
        setCounter(counter);
      }
    };
  
    return (
      <>
        <h1>My Counter </h1>
        <h2>Counter starts at: {counter}</h2>
  
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </>
    );
  }
  
  export default Counter;
  