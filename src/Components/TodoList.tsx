import { useState } from 'react'


function TodoList(){

const todos = ["Buy Groceries","Clean the house", "walk the dog"];
const [selectedTodoIndex, setSelectedTodoIndex] = useState<number | null>(null);
const handleclick = (index:number) =>{setSelectedTodoIndex(index)}
const updated = todos.filter((_,index)=> index != selectedTodoIndex)

return (
    
    <>
    {todos.length > 0 ?(
    
    <ul className='list-group'>  
        {todos.map((todos,index) =>

        ( <li key={index}
            className={`list-group-item ${index === selectedTodoIndex ? 'active' : ''}`}
            onClick={() => handleclick(index)}
            

            
            >{todos} </li>

        ))}
     </ul>
    ): ( <p>no to do list</p>
 )}
      
    </>
)}

export default TodoList