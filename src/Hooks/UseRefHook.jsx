import React, { useRef } from "react";
import Header from "../components/Header";

const ExerciseOne = () => {
  const myRef = useRef(null);

  const handleFocus = () => {
    myRef.current.focus();
  };

  const handleClear = () => {
    myRef.current.value = "";
  };

  return (
    <div>
      {/* Exercise 1: Focus an input field */}
      <label>Enter something:</label>
      <input type="text" ref={myRef} placeholder="Enter something" />
      <button type="button" onClick={handleFocus}>
        Focus Input
      </button>
      <button type="button" onClick={handleClear}>
        Clear Input
      </button>
      <input />
    </div>
  );
};
const ExerciseTwo = () => {
  return <div>Exercise 2</div>;
};
function UseRefHook() {
  return (
    <div>
      <h2>useRef Hook Exercises</h2>
      <ExerciseOne />
      <ExerciseTwo />
      <Header />
    </div>
  );
}

export default UseRefHook;
