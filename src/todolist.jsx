import React,{useState} from "react";
function Todolist(){
    var[todo,setTodo]=useState(["Ayyappa","Anji","Vikas"])
    var[xy,setXy]=useState("")
    function xyz(){
       setTodo([...todo,xy])
    }
    function zx(i){
        var de=[...todo]
        de.splice(i,1)
        setTodo(de)
    }
    return <div className="border border-2 border-info p-3 m-3">
        <input type="text" name="" onChange={(e)=>{setXy(e.target.value)}} />
        <button onChange={()=>{xyz()}}>Add</button>
        <div>
            {
                todo.map((s)=>{
                    return <li>{s} <button onClick={()=>{zx()}}>Del</button></li>
                })
            }
        </div>
    </div>
}
export default Todolist