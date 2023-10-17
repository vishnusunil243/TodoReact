import { useEffect } from "react"
export function TodoList({todos,toggleTodo,deleteTodo}){
    useEffect(()=>{
        window.addEventListener('click',()=>{
            console.log("vishnu");
        })
    })
     
    return (
    <ul className="list">
    {todos.length==0 && "NO Todos"}
    {todos.map(todo=>{
        return (<li key={todo.id}>
        <label>
            <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id,e.target.checked)}/>
            {todo.title}
        </label>
        <button className="btn btn-danger" onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </li>
        )
    })}
   
</ul>
    )
}