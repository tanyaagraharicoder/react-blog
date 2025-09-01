import { useState } from "react";


function App() {
  const [count, setCount]= useState(3);

  return(
    <div>
      <h1>{count} </h1>
      <button onClick={() => setCount(count+1)}> counter</button>
      {
        count==0? <h1>  condition 0 </h1>
        :count==1? <h1>condition 1</h1>
        :count==2? <h1>condition 2</h1>
        :<h1>other condition </h1>
        
      }

    </div>
    
  

  )

  
}

export default App;
