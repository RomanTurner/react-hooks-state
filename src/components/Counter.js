import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log(count, "pre count");
    setCount(count + 1);
    console.log(count, "count");
    setCount((currentCount) => {
      console.log(currentCount, "current count");
      return currentCount + 1;
    });
    console.log(count, "post count");
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
