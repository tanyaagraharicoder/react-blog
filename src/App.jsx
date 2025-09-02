import { useState } from "react";

function App() {
  const [gender, setGender] = useState(" ");


  return (

      
      <div>
        <h1> Handle radio and dropdown </h1>
        <h3>select gender</h3>
        <input onChange={(e)=>setGender(e.target.value)} type="radio" name="gender" id="male" value="male" /> 
       <lebel htmlFor="male">Male</lebel>
       <br />
        <input onChange={(e)=>setGender(e.target.value) }type="radio" name="gender" id="female" value="female"/> female
       <lebel htmlFor="female">female</lebel>
       <br />
       <h2>selected gender : {gender}</h2>
        
      </div>
  );
}

export default App;
 