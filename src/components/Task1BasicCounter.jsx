import { useState } from "react";

const BasicCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="tail_div">
      <p className="font-bold">**Exercise 1: Basic Counter**</p>
      <hr />
      <p>
        Create a `Counter` component that: - Displays a number starting at `0`.
        - Increases the count by 1 when a "Increment" button is clicked. -
        Decreases the count by 1 when a "Decrement" button is clicked.
      </p>
      <hr />
      <p className="font-bold pb-5">Solution:</p>
      <div>
        <p className="font-bold mb-2">Counter: {count}</p>
        <button className="mr-2" onClick={() => setCount(() => count + 1)}>Increment</button>
        <button className="ml-2" onClick={() => setCount(() => count - 1)}>Decrement</button>
      </div>
    </div>
  );
};

export default BasicCounter;
