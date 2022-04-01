
import React, {useState} from "react";

const NewBoxItemForm = ({addItem}) => {

    const INITIAL_STATE = {
        colour: '',
        width: '',
        height: ''
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
            addItem(formData.colour, formData.width, formData.height)

        } 
    

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="colour">colour</label>
            <input
            type="text"
            name="colour"
            value ={formData.colour}
            onChange={handleChange}
            />
            <label htmlFor="width">width</label>
            <input
            type="text"
            name="width"
            value={formData.width}
            onChange={handleChange}
            />
            <label htmlFor="height">height</label>
            <input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleChange}
            />
            <button >Add Box</button>
            
        </form>
    )
     
}


export default NewBoxItemForm;