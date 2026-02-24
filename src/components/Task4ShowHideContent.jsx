import { useState } from "react";

const ShowHideContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div className="tail_div flex flex-col items-center">
      <p className="font-bold">**Exercise 4: Show/Hide Content**</p>
      <hr />
      <p>
        Build a component with a "Show/Hide" button that: - Toggles the
        visibility of a paragraph (`p`). - Displays "Content is hidden" when the
        content is hidden.
      </p>
      <hr />
      <p className="font-bold pb-5">Solution:</p>
      <div>
        <button className="ml-2" onClick={handleClick}>
          {isVisible ? "HIDE" : "SHOW"}
        </button>
        {isVisible ? (
          <p style={{ visibility: isVisible ? "visible" : "hidden" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            aperiam, aut, impedit soluta nisi voluptatem iusto, totam adipisci
            veritatis cumque quasi ipsum distinctio provident quisquam iure
            animi error officiis reiciendis.
          </p>
        ) : (
          <p>Content is hidden</p>
        )}
      </div>
    </div>
  );
};

export default ShowHideContent;
