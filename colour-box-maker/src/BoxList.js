import React, {useState} from "react";
import {v4 as uuid} from 'uuid'
import BoxItem from "./BoxItem";
import NewBoxItemForm from "./NewBoxItemForm";

const BoxList = () => {
    const INITIAL_STATE = [
        {id: "", colour: "", width: "", height: ""}
    ]
    const [items, setItems] = useState(INITIAL_STATE);
    
        const addItem = (colour, width, height) => {
            setItems(items => [...items, {id: uuid(), colour, width, height}])
    
        }

       const deleteBox = id => {
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
            <h3> Box List</h3>
            <NewBoxItemForm addItem={addItem}/>
            <div>
                {items.map(({id, colour, width, height}) => <BoxItem deleteBox={deleteBox} id ={id} colour={colour} width={width} height={height}/>)}
                
            </div>
            




        </div>
    )
}

export default BoxList;

