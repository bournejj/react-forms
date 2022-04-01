import React, {useState} from "react";
import {v4 as uuid} from 'uuid'
import Todo from "./Todo.js";
import NewTodoForm from "./NewTodoForm.js";

const TodoList = () => {
    const INITIAL_STATE = [
        {id: "", todo: ""}
    ]
    const [items, setItems] = useState(INITIAL_STATE);
    
        const addItem = (todo) => {
            setItems(items => [...items, {id: uuid(), todo}])
    
        }

       const deleteTodo = id => {
           setItems(items => {
               const copy = [...items];
               const item = id
               const filteredArray =  copy.filter(function(el) { return el.id !== item; });
               console.log(filteredArray)
               return filteredArray;

           })

       }
            






    return (
        <div>
            <h3>Todo List</h3>
            <NewTodoForm addItem={addItem}/>
            <div>
                {items.map(({id, todo}) => <Todo deleteBox={deleteTodo} id ={id} todo={todo} />)}
                
            </div>
            




        </div>
    )
}

export default TodoList;
