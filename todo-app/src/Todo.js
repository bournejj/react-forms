import React, {useState} from "react";


const Todo = ({id, todo, deleteTodo}) => {

  



    return (

           <ul>
               
               <li onClick ={() => deleteTodo(id)}>{todo}</li>
               
               
               
              
           </ul>

       

    ) 
}

export default Todo;