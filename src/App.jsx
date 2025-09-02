import User from "./User";


function App() {
  let userObject={
    name:"Tanya Agrahari",
    age:29,
    location:"India",
    profession:"Software Engineer"


  }
  let userObject2={
    name:"John Doe",
    age:32,
    location:"USA",
    profession:"Doctor"

  }
  
 

  return(
    <div>
      <h1>props in react  js </h1>
      <User user ={userObject}/>
      <User user={userObject2}/>

      {/* <User   name ="Tanya Agrahri" age ={29} /> */}
     

    </div>
    
  

  )

  
}

export default App;
