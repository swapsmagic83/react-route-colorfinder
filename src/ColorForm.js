import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const ColorForm = ({addColor}) =>{
    const navigate =useNavigate()
    const initial_state = {name:""}
    const [formData, setFormData] =useState(initial_state)

    const handleChange = (e) =>{
        const {name,value} = e.target
        setFormData(formData =>({
            ...formData,
            [name]:value
    }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        addColor(formData.name)
        setFormData(initial_state)
        navigate('/colors')
    }

    return (
        <>
    
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="name">Color Name</label>
            <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name of color"
            value={formData.name}
            onChange={handleChange}
            ></input>
            <button >Add Color</button>
            
        </form>
        </>
    )


}
export default ColorForm