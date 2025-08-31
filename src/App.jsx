import { useState } from "react";
import User from "./user.jsx";

function App() {
  const [ display, setDisplay]= useState(true);
  return(
    <div>
      <h1> Toggele in react js</h1>
      {/* {
        display?<h1>Tanya Agrahari</h1>: null
      } */}
      {
        display?<User/>: null
      }

    <button onClick={()=> setDisplay(!display)} > toggle </button>
    </div>

  )

  
}

export default App;
