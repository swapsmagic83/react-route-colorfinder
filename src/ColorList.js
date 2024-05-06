import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css"

const ColorList = ({colors}) =>{
    
return (
    <div>
        <div className="ColorList-div">
        <h1>Welcome to the color factory</h1>
            <h1>Select a color</h1>
            <Link to={"/colors/new"}>Add A Color</Link>
        </div>
        <div>
            {colors.map(color =>(
                <Link to={`/colors/${color}`} style={{ display: 'block', marginBottom: '10px' }}>{color}</Link>
            ))}
        </div>
    
    </div>
)
}
export default ColorList