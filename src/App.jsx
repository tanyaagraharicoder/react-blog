import { useState } from 'react'

function App() {
  const [name , setName ]= useState("");
  const [password , setPassword ]= useState("");
  const [email , setEmail ]= useState("");  

  return (

      
      <div>
        <h1>contoller component </h1>
        <form action="">
          <input  value={name } onChange={(event)=> setName(event.target.value)} type="text"placeholder='Enter name ' />
        <br />
        <br />
          <input  value={password} onChange={(event)=> setPassword(event.target.value)} type="password"placeholder='Enter password ' />
        <br />
        <br />
          <input  value={email} onChange={(event)=> setPassword(event.target.value)} type="text"placeholder='Enter email ' />
        <br />
        <br />

        <button>submit </button>
       <button onClick={()=> {setEmail('') ; setName(''); setName('')}}>clear</button>

        </form>
        <h3>{name}</h3>
       
        <h3>{password}</h3>
       
        <h3>{email}</h3>

      </div>
  );
}

export default App;
