import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [fruit, setFruit] = useState("banana");

  const handleFruit = () => {
    setFruit("apple");
  };

  return (
    <div>
      <h1>State in React JS</h1>
      <h2>Current fruit: {fruit}</h2>   {/* 👈 Display state here */}
      <button onClick={handleFruit}>Change Fruit Name</button>
    <Counter/>
    </div>
  );
}

export default App;
