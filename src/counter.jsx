import React,{useState} from "react";
function Counter(){
    var [count,setCount]=useState(0)
    function abc(){
        setCount(count+1)
    }
    function xyz(){
        setCount(count-1)
    }
    return <div className="border border-3 border-primary p-3">
    <h1>counter:{count}</h1>
    <button onClick={()=>{abc()}}>Inc</button>
    <button onClick={()=>{xyz()}}>Dec</button>
    </div>
}
export default Counter