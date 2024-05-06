import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ColorList from "./ColorList";
import ColorDetail from "./ColorDetail";
import ColorForm from "./ColorForm";

const ColorRoutes = ({colors, addColor}) =>{
    return (
        <>
        <Routes>
            <Route path="/colors/new" element={<ColorForm addColor={addColor} />}></Route>
            <Route path="/colors" element={<ColorList colors={colors} />}></Route>
            <Route path="/colors/:color" element={<ColorDetail colors={colors}/>}></Route>
            <Route path='/*' element={<Navigate to='/colors' />}></Route>
            <Route path='/colors/*' element={<Navigate to='/colors' />}></Route>
        </Routes>
        </>
    )
}
export default ColorRoutes