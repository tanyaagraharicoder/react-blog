import { useState } from "react";
function Skills(){
    const [skills ,setSkills ]=useState([]);
    const handleSkills=(event)=>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setSkills([...skills, event.target.value])
        }else{
            setSkills(skills.filter((skill)=> skill !== event.target.value))

        }
    }
    return (
        <div>



            <h3> Select Your Skills </h3>
            <input  onChange={handleSkills} type="checkbox"  id="php" value="php" />
            <label htmlFor="php">PHP</label>
            <br />
            <input    onChange={handleSkills}   type="checkbox"  id="js" value="js" />
        <label htmlFor="js">JavaScript</label>
            <br />
            <input onChange={handleSkills} type="checkbox" id="java" value="java" />
            <label htmlFor="java">Java</label>
            <br />
            <input onChange={handleSkills} type="checkbox"  id="c++" value="c++" />
           <label htmlFor="c++">C++</label>
            <h4>Selected Skills:</h4>
      <p>{skills.length > 0 ? skills.join(", ") : "None selected"}</p>
        </div>
    )
}
export default Skills;