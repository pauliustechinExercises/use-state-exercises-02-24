import { useState, useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(false);
  const [count, setCount] = useState(0);

  const startTimer = () => {
    setTimer(true);
  };

  const stopTimer = () => {
    setTimer(false);
  };

  const resetTimer = () => {
    setTimer(false);
    setCount(0);
  };

  useEffect(() => {

    let intervalId;

    if (timer) {
      intervalId = setInterval(() => {
        setCount(() => count + 1);
      }, 1000);
    }
    
    return () => clearInterval(intervalId);

  }, [count, timer]);

  return (
    <div className="tail_div">
      <p className="font-bold">**Exercise 12: Timer**</p>
      <hr />
      <p>
        Create a timer component that: - Starts at `0` and increments by `1`
        every second when a "Start" button is clicked. - Stops when a "Stop"
        button is clicked. - Resets to `0` when a "Reset" button is clicked.
      </p>
      <hr />
      <p className="font-bold pb-5">Solution:</p>
      <div>
        <p className="font-bold mb-2">Timer: {count}</p>
        <button className="mr-2" onClick={startTimer}>
          Start timer
        </button>
        <button className="ml-2" onClick={stopTimer}>
          Stop timer
        </button>
        <button className="ml-2" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
