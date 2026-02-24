import { useState } from "react";

const DynamicInputField = () => {
  const [name, setName] = useState("");

  return (
    <div className="tail_div">
      <p className="font-bold">**Exercise 3: Dynamic Input Field**</p>
      <hr />
      <p>
        Create a component with an input field that: - Updates a displayed text
        (e.g., "Hello, [name]!") in real-time as the user types.
      </p>
      <hr />
      <p className="font-bold pb-5">Solution:</p>
      <div>
        <input type="text" onChange={(e) => {setName(e.target.value)}} value={name}/>
        <p>{name ? ("Hello, " + name) : ""}</p>
      </div>
    </div>
  );
};

export default DynamicInputField;
