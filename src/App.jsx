import { useState } from 'react'

function App() {
  const [ val, setVal]= useState("Tanya agrahari")
  return (

      
      <div>
        <h1>get Input field value </h1>
        <input type="text"  value={val} onChange={(event)=> setVal(event.target.value)} placeholder=" enter user name " />
        <h1>{val}</h1>
        <button onClick={ ()=> setVal("")} > clear value </button>


      </div>
  );
}

export default App;
