import React, {useState} from "react";
import "./Box.css";

const Box = ({id, colour, width, height, deleteBox}) => {

  



    return (

           <div 
           onClick ={() => deleteBox(id)}
           
           className="Box" style={{backgroundColor: colour, width: width, height: height}}>
               
              
           </div>

       

    ) 
}

export default Box;