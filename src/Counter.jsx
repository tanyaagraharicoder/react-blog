import {useState} from 'react';
const  Counter =()=>{
    const [count, setCount] = useState(0);
    const[ Rcount, setRcount] = useState(10);

    

    return(
        <div>
            <h1>Counter Component {count}</h1>
            <button onClick={()=> setCount(count +1)}> Update counter </button>
            <h1> Reverse counter { Rcount }</h1>
            <button onClick={()=> setRcount(Rcount -1)}> Update Reverse counter </button>

        </div>
    )
}


export default Counter;