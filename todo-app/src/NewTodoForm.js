import React, {useState} from "react";

const NewTodoForm = ({addItem}) => {

    const INITIAL_STATE = {
        id: '',
        todo: '',
     
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ( {
            ...formData, 
            [name]: value

        }))
    }
        const handleSubmit = (e) => {
            e.preventDefault();
            addItem(formData.todo)

        } 
    

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">todo</label>
            <input
            type="text"
            name="todo"
            value ={formData.todo}
            onChange={handleChange}
            />

            <p>{formData.todo}</p>
         
            <button >Add Todo</button>
            
        </form>
    )
     
}


export default NewTodoForm;