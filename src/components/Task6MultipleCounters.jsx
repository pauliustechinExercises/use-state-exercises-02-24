import { useState } from "react";

const MultipleCounters = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const handleReset = () => {
    setCounterOne(0);
    setCounterTwo(0);
  }

  return (
    <div className="tail_div">
      <p className="font-bold">**Exercise 6: Multiple Counters**</p>
      <hr />
      <p>
        Build a component with: - Two counters (`counter1` and `counter2`). -
        Buttons to increment or decrement each counter separately. - A "Reset
        All" button to reset both counters to `0`.
      </p>
      <hr />
      <p className="font-bold pb-5">Solution:</p>
      <div className="flex justify-center gap-10">
        <div>
          <p className="font-bold mb-2">First counter: {counterOne}</p>
          <button
            className="mr-2"
            onClick={() => setCounterOne(() => counterOne + 1)}
          >
            Increment
          </button>
          <button
            className="mr-2"
            onClick={() => setCounterOne(() => counterOne - 1)}
          >
            Decrement
          </button>
        </div>
        <div>
          <p className="font-bold mb-2">Second counter: {counterTwo}</p>
          <button
            className="mr-2"
            onClick={() => setCounterTwo(() => counterTwo + 1)}
          >
            Increment
          </button>
          <button
            className="mr-2"
            onClick={() => setCounterTwo(() => counterTwo - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
      <button 
      className="mt-5 w-25" 
      style={{ background: "red" }}
      onClick={handleReset}
      >Reset
      </button>
    </div>
  );
};

export default MultipleCounters;
