import React, {useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

const ColorDetail =({colors}) =>{
    const param = useParams()
    const navigate = useNavigate()
    let invalidColor = false

    useEffect(() => {
        if (invalidColor) {
            return navigate('/colors')
        }
        
    })
    if(!colors.includes(param.color)){
        invalidColor = true
        return (
            <div>
                <h1> Invalid Color</h1>
            </div>
        )
    } else {
        return(
        
            <div style={{backgroundColor:param.color}}>
                <button onClick={() => navigate('/colors')}>Go Back</button>
                <h1> THIS IS {param.color.toUpperCase()}</h1>
                <h1> ISN'T IT BEAUTIFUL?</h1>
            </div>
        )
    } 
    
}
export default ColorDetail