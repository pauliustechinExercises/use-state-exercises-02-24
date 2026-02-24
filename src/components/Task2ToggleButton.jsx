import { useState } from "react";

const ToggleButton = () => {
  const [bgState, setBgState] = useState(false);

  const handleClick = () => {
    if(bgState){
      setBgState(false);
    } else {
      setBgState(true);
    }
  }

  return (
    <div className="tail_div flex flex-col items-center">
      <p className="font-bold">**Exercise 2: Toggle Button**</p>
      <hr />
      <p>
        Create a `Toggle` component with a button that: - Toggles between "ON"
        and "OFF" states when clicked. - Changes the background color (e.g.,
        green for "ON" and red for "OFF").
      </p>
      <hr />
      <p className="font-bold pb-5">Solution:</p>
      <div className={`border p-2 w-40 rounded ${bgState ? "bg-green-200" : "bg-red-300"}`}>
        <button className="ml-2" onClick={handleClick}>
          {bgState ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
